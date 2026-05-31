import { BlogComment } from "./BlogComment";
import { CommentInput } from "./CommentInput";
import { CommentsSkeleton } from "./Skeleton/CommentsSkeleton";

interface CommentsProps {
  comments: any[];
  commentRef: React.RefObject<HTMLDivElement | null>;
}

export function Comments({ comments, commentRef }: CommentsProps) {
  if(comments.length === 1 && comments[0] === "Loading ...") {
    return (
      <CommentsSkeleton />
    );
  }
  return (
    <div
      id="comments"
      ref={commentRef}
      className="mt-10"
    >
      <h2 className="mb-6 text-2xl font-bold">
        Comments ({comments?.length ?? 0})
      </h2>

      {/* input box for comments */}
      <CommentInput />

      <div className="space-y-4">
        {comments?.map((comment, index) => (
          <BlogComment
            key={comment.id_code ?? index}
            index={index}
            comment={comment}
          />
        ))}
      </div>
    </div>
  );
}