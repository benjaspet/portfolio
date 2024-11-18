type BoldifyProps = {
    text: string;
}

export default function Boldify({ text }: BoldifyProps) {
    const bolded = text.replace(/\*([^*]+)\*/g, "<strong>$1</strong>");
    return <div dangerouslySetInnerHTML={{ __html: bolded }} />;
}