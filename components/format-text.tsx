"use client"

import React from "react"

export function FormatText({ text, className = "" }: { text: string; className?: string }) {
    if (!text) return <p className={className}></p>

    const formattedElements = parseText(text)

    return <p className={className}>{formattedElements}</p>
}

type Token = {
    type: "text" | "bold" | "italic" | "underline" | "link"
    content: string | Token[]
    href?: string
}

function parseText(text: string): React.ReactNode {
    const tokens = tokenize(text)
    return renderTokens(tokens)
}

function tokenize(text: string): Token[] {
    const tokens: Token[] = []
    let currentText = ""

    let i = 0
    while (i < text.length) {
        if (text.substring(i, i + 2) === "**" && i + 2 < text.length) {
            if (currentText) {
                tokens.push({ type: "text", content: currentText })
                currentText = ""
            }

            const startPos = i + 2
            const endPos = text.indexOf("**", startPos)

            if (endPos === -1) {
                currentText += "**"
                i += 2
            } else {
                const boldContent = text.substring(startPos, endPos)
                tokens.push({
                    type: "bold",
                    content: tokenize(boldContent),
                })
                i = endPos + 2
            }
        } else if (text[i] === "*" && text[i + 1] !== "*" && i + 1 < text.length) {
            if (currentText) {
                tokens.push({ type: "text", content: currentText })
                currentText = ""
            }

            const startPos = i + 1
            const endPos = text.indexOf("*", startPos)

            if (endPos === -1) {
                currentText += "*"
                i += 1
            } else {
                const italicContent = text.substring(startPos, endPos)
                tokens.push({
                    type: "italic",
                    content: tokenize(italicContent),
                })
                i = endPos + 1
            }
        } else if (text[i] === "_" && i + 1 < text.length) {
            if (currentText) {
                tokens.push({ type: "text", content: currentText })
                currentText = ""
            }

            const startPos = i + 1
            const endPos = text.indexOf("_", startPos)

            if (endPos === -1) {
                currentText += "_"
                i += 1
            } else {
                const underlineContent = text.substring(startPos, endPos)
                tokens.push({
                    type: "underline",
                    content: tokenize(underlineContent),
                })
                i = endPos + 1
            }
        } else if (text[i] === "[" && i + 1 < text.length) {
            if (currentText) {
                tokens.push({ type: "text", content: currentText })
                currentText = ""
            }

            const linkTextStart = i + 1
            const linkTextEnd = text.indexOf("]", linkTextStart)

            if (linkTextEnd === -1) {
                currentText += "["
                i += 1
            } else if (linkTextEnd + 1 < text.length && text[linkTextEnd + 1] === "(" && text.indexOf(")", linkTextEnd + 2) !== -1) {
                const urlStart = linkTextEnd + 2
                const urlEnd = text.indexOf(")", urlStart)

                const linkText = text.substring(linkTextStart, linkTextEnd)
                const href = text.substring(urlStart, urlEnd)

                tokens.push({
                    type: "link",
                    content: tokenize(linkText),
                    href
                })

                i = urlEnd + 1
            } else {
                currentText += "["
                i += 1
            }
        } else {
            currentText += text[i]
            i++
        }
    }

    if (currentText) {
        tokens.push({ type: "text", content: currentText })
    }

    return tokens
}

function renderTokens(tokens: Token[]): React.ReactNode[] {
    return tokens.map((token, index) => {
        if (token.type === "text") {
            return <React.Fragment key={index}>{token.content as string}</React.Fragment>
        }

        const content = Array.isArray(token.content) ? renderTokens(token.content) : token.content

        switch (token.type) {
            case "bold":
                return (
                    <span key={index} className="font-bold">
                        {content}
                    </span>
                )
            case "italic":
                return (
                    <span key={index} className="italic">
                        {content}
                    </span>
                )
            case "underline":
                return (
                    <span key={index} className="underline">
                        {content}
                    </span>
                )
            case "link":
                return (
                    <a
                        key={index}
                        href={token.href}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {content}
                    </a>
                )
            default:
                return <React.Fragment key={index}>{content}</React.Fragment>
        }
    })
}