import { BlogContent } from "./BlogContent";
import { BlogTitle } from "./BlogTitle";
import { Comments } from "./Comments";

interface BlogPostProps {
    content: string;
    title: string;
    comments: any[];
}

export function BlogPost({ content, title, comments } : BlogPostProps) {
    return(
        <div className = "max-w-3xl mx-auto px-4 py-8"
        >
            <BlogTitle title={title} />
            <BlogContent content={content} />
            <Comments comments={comments} />
        </div>
    )
}