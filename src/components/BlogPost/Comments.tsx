import { BlogComment } from "./BlogComment";

interface CommentsProps {
    comments: any[];
}

export function Comments({ comments }: CommentsProps) {
    return (
        <div className="mt-8" id="comment">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            {comments && comments.map((comment, index) => (
                <BlogComment index={index} comment={comment} />

            ))}
        </div>
    );
}