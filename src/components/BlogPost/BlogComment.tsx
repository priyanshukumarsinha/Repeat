
interface BlogCommentProps {
    index: number;
    comment: any;
    level?: number;
}

export function BlogComment({ index, comment, level = 0 }: BlogCommentProps) {
    console.log(comment);
    const indentClass = level > 0 ? "ml-8 pb-1" : "";
    return (
        <div key={index} className={`mb-5 pt-2 rounded-lg ${indentClass}`}>
            <div className="flex items-center mb-2">
                <img
                    src={comment.user?.profile_image_90}
                    alt={comment.user?.name}
                    className="w-10 h-10 rounded-full mr-4"
                />
                <div className="text-sm border-1 border-gray-300 p-4 w-full rounded-lg">
                    <p className="text-gray-900 dark:text-white font-semibold">{comment.user?.name}</p>
                    <p className="text-gray-700 dark:text-white" dangerouslySetInnerHTML={{ __html: comment.body_html }}></p>
                </div>
            </div>
            {
                comment?.children?.length > 0 && (<BlogComment index={index} comment={comment.children[0]} level={1} />)
            }
        </div>
    );
}