type BoldifyProps = {
    text: string;
    classname?: string;
}

export default function Boldify({ text, classname }: BoldifyProps) {
    const bolded = text.replace(/\*([^*]+)\*/g, "<strong>$1</strong>");
    return <div className={classname} dangerouslySetInnerHTML={{ __html: bolded }} />;
}