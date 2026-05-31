

export const CommentsSkeleton = () => {
    return (
        <div className="space-y-4 my-10">
            <h2 className="mb-6 text-2xl font-bold">
                Comments (0)
            </h2>
            <div className="w-full h-6 bg-skeleton animate-pulse" />
            <div className="w-full h-6 bg-skeleton animate-pulse" />
            <div className="w-full h-6 bg-skeleton animate-pulse" />
        </div>
    );
}
