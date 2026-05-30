import { useState } from "react";


export function CommentInput() {
    const [comment, setComment] = useState("");
    const [commentFocus, setCommentFocus] = useState(false);
    const handleSubmit = () => {
        // call backend to submit comment
        // for now just clear the input
        setComment("");
        setCommentFocus(false);
    }
    const rows = comment.split("\n").length;
    return (
        <div className="flex items-start space-x-4 mb-10 outline-none">
            <div className="flex-1">
                <textarea
                    className="
                        outline-none
                        w-full border border-white/10 rounded-lg p-4 md:p-5 bg-gradient-to-br from-white/4 to-transparent hover:border-white/20 transition-all duration-300 group
                    "
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    onFocus={() => setCommentFocus(true)}
                    placeholder="Write a comment..."
                    rows={rows}
                />

                {
                    commentFocus && (
                        <div className="mt-2 flex">
                            <button
                                className="
                            px-4
                            py-2
                            bg-white
                            cursor-pointer
                            text-black
                            rounded-md
                            hover:bg-white/80
                            transition-colors duration-200
                            disabled:bg-gray-300
                            disabled:cursor-not-allowed
                            disabled:text-gray-500
                        "
                                onClick={handleSubmit}
                                disabled={comment.trim() === ""}
                            >
                                Submit
                            </button>
                        </div>)
                }
            </div>
        </div>
    );
}