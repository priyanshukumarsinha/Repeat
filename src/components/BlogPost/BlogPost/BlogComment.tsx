import { useState } from "react";

interface BlogCommentProps {
  index: number;
  comment: any;
  level?: number;
}

export function BlogComment({
  index,
  comment,
  level = 0,
}: BlogCommentProps) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (!replyText.trim()) return;

    console.log("Reply:", {
      parentComment: comment.id_code,
      text: replyText,
    });

    setReplyText("");
    setShowReplyBox(false);
  };

  return (
    <div
      className={
        level > 0
          ? "ml-6 border-l border-zinc-200 dark:border-zinc-800 pl-4"
          : ""
      }
    >
      <div className="mb-4 flex items-start gap-3">
        <img
          src={comment.user?.profile_image_90}
          alt={comment.user?.name}
          className="h-10 w-10 shrink-0 rounded-full"
        />

        <div
          className="
            w-full border border-white/10 rounded-lg p-4 md:p-5 bg-gradient-to-br from-white/4 to-transparent hover:border-white/20 transition-all duration-300 group
          "
        >
          <div className="mb-2">
            <p className="font-semibold text-sm text-zinc-900 dark:text-white">
              {comment.user?.name}
            </p>

            <p className="text-xs text-zinc-500">
              @{comment.user?.username}
            </p>
          </div>

          <div
            className="
              prose
              prose-sm
              dark:prose-invert
              max-w-none
              text-sm
            "
            dangerouslySetInnerHTML={{
              __html: comment.body_html,
            }}
          />

          {/* Actions */}
          <div className="mt-3 flex items-center gap-4">
            <button
              onClick={() => setShowReplyBox((prev) => !prev)}
              className="
                text-sm
                font-medium
                text-blue-500
                hover:text-blue-600
              "
            >
              {showReplyBox ? "Cancel" : "Reply"}
            </button>

            {comment?.children?.length > 0 && (
              <span className="text-xs text-zinc-500">
                {comment.children.length}{" "}
                {comment.children.length === 1
                  ? "reply"
                  : "replies"}
              </span>
            )}
          </div>

          {/* Reply Input */}
          {showReplyBox && (
            <div className="mt-4 border-t border-zinc-200 dark:border-zinc-800 pt-4">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder={`Reply to ${comment.user?.name}...`}
                rows={3}
                className="
                  w-full
                  resize-none
                  rounded-lg
                  border
                  border-zinc-200
                  dark:border-zinc-700
                  bg-transparent
                  p-3
                  text-sm
                  outline-none
                "
              />

              <div className="mt-3 flex justify-end gap-2">
                <button
                  onClick={() => {
                    setReplyText("");
                    setShowReplyBox(false);
                  }}
                  className="
                    rounded-lg
                    px-4
                    py-2
                    text-sm
                    hover:bg-zinc-100
                    dark:hover:bg-zinc-800
                  "
                >
                  Cancel
                </button>

                <button
                  onClick={handleReply}
                  className="
                    rounded-lg
                    px-4
                    py-2
                    text-sm
                    text-white
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Reply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Replies Accordion */}
      {comment?.children?.length > 0 && (
        <details className="ml-13 mb-4">
          <summary
            className="
              cursor-pointer
              select-none
              text-sm
              text-zinc-500
              hover:text-zinc-700
              dark:hover:text-zinc-300
            "
          >
            View {comment.children.length}{" "}
            {comment.children.length === 1
              ? "reply"
              : "replies"}
          </summary>

          <div className="mt-4 space-y-4">
            {comment.children.map((child: any, idx: number) => (
              <BlogComment
                key={child.id_code ?? idx}
                index={idx}
                comment={child}
                level={level === 0 ? level+1: level}
              />
            ))}
          </div>
        </details>
      )}
    </div>
  );
}