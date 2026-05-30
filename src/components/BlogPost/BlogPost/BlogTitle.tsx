
interface BlogTitleProps {
    title: string;
}

export function BlogTitle({ title }: BlogTitleProps) {
    return (
        <h1 className="text-4xl font-bold mb-10 dark:text-white">{title}</h1>
    );
}