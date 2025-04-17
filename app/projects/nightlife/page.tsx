import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const content = "# Markdown Example\n\n" +
    "## Formatting\n\n" +
    "**Bold text** and *italic text*\n\n" +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt lacus velit, non congue justo laoreet vel. In ullamcorper enim quis condimentum porttitor. Sed augue libero, consequat vel convallis sed, dictum eu enim. Praesent auctor auctor nunc sit amet scelerisque. Ut ultricies sagittis est vitae ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, dolor auctor consequat condimentum, neque mi tempus massa, et faucibus ante ligula id erat. Curabitur vitae ligula sed diam cursus euismod eget eu nulla. Donec ligula quam, congue non pharetra et, ultrices at ante. Integer elementum enim et sollicitudin eleifend. Sed a lacus eu enim blandit volutpat. Quisque nec gravida lacus.\n" +
    "\n" +
    "Vivamus dictum, lectus ac lacinia rhoncus, neque mi eleifend nisi, ut finibus justo felis sit amet justo. Donec gravida in dui nec placerat. Mauris rhoncus sed nisl vel tempor. Duis augue arcu, volutpat quis fermentum sit amet, suscipit et tortor. Nam accumsan pellentesque accumsan. Phasellus non diam sit amet nisi dapibus venenatis. Vivamus nisl est, ultrices sit amet neque eget, cursus eleifend orci. Quisque at nisi ultricies, sagittis neque euismod, maximus lorem. Fusce nec sapien ultrices, fermentum eros mattis, feugiat lacus. Vestibulum nec augue et tellus maximus hendrerit. Etiam sem nisi, vehicula vel pellentesque tincidunt, dictum sit amet nibh. In non commodo elit, id elementum risus. Ut tristique urna nulla, a vestibulum orci vulputate commodo.\n" +
    "\n" +
    "Curabitur eu nunc interdum, tristique elit id, sodales libero. Donec interdum volutpat augue, ac scelerisque odio tincidunt et. Nunc porta augue ut ipsum tempus auctor. Phasellus venenatis libero quam, in porttitor libero imperdiet a. In hac habitasse platea dictumst. Nam maximus velit vel lectus pulvinar, non vehicula nisl tristique. Nunc lacinia sagittis ante vitae dignissim. Donec vulputate in arcu sed fringilla. Fusce blandit ultricies mauris, a dictum erat. Aliquam euismod malesuada pulvinar. Vestibulum tincidunt mattis mi ac iaculis.\n" +
    "\n" +
    "Aliquam maximus libero quis ultrices elementum. Phasellus pretium tempor felis sit amet bibendum. Nunc in tempus mauris, eu maximus quam. Nunc consectetur odio non arcu feugiat imperdiet. Sed quam libero, consectetur a sem ac, auctor eleifend nibh. Suspendisse enim nibh, congue sit amet euismod sit amet, ullamcorper quis leo. Quisque dictum volutpat nunc, vitae fermentum massa commodo ac. Integer congue lacus et odio efficitur consequat. Donec orci augue, dictum viverra elit nec, facilisis euismod felis. Suspendisse odio lorem, faucibus vehicula mollis in, pharetra vel quam. Aliquam fringilla dui ipsum, sit amet ultrices turpis maximus eget. Duis id magna a erat mollis faucibus quis et mauris. Morbi in orci viverra, feugiat sapien a, maximus mi." + +
        " \n\n" +
    "### Lists\n" +
    "- Item 1\n" +
    "- Item 2\n" +
    "- Item 3\n\n" +
    "### Code\n" +
    "```javascript\n" +
    "function hello() {\n" +
    "  console.log('Hello, world!');\n" +
    "}\n" +
    "```\n\n" +
    "> This is a blockquote\n\n" +
    "[Link example](https://example.com)"

export default function Page() {
    return (
        <div className="mx-8 sm:mx-16 md:mx-24 lg:mx-36 xl:max-w-[1080px] xl:justify-self-center my-8 sm:my-16">
            <NavigationMenu>
                <NavigationMenuList className={"gap-1"}>
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Homepage
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                PlateMate
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Nightlife
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className={"mt-8"}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                        h1: ({...props}) => (
                            <h1 className="text-3xl font-bold my-4" {...props} />
                        ),
                        h2: ({...props}) => (
                            <h2 className="text-2xl font-semibold my-4" {...props} />
                        ),
                        h3: ({...props}) => (
                            <h3 className="text-xl font-semibold my-4" {...props} />
                        ),
                        p: ({...props}) => (
                            <p className="my-2" {...props} />
                        ),
                        blockquote: ({...props}) => (
                            <blockquote className="border-l-4 border-gray-300 pl-4 my-2" {...props} />
                        ),
                        ul: ({...props}) => (
                            <ul className="list-disc pl-5 my-2" {...props} />
                        ),
                        a: ({...props}) => (
                            <a className="text-[#0b6db8] hover:underline" {...props} />
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    )
}