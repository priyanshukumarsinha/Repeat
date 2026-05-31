import { BlogTitleSkeleton } from "./Skeleton/BlogTitleSkeleton";

interface BlogTitleProps {
    title: string;
}

export function BlogTitle({ title }: BlogTitleProps) {
    if(title === "Loading ...") {
        return <BlogTitleSkeleton />;
    }
    return (
        <h1 className="text-3xl font-bold mb-10 dark:text-white">{title}</h1>
    );
}