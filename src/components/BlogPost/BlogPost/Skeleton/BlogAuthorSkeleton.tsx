

export const BlogAuthorSkeleton = () => {
    return (
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-skeleton animate-pulse" />
            <div className="flex flex-col gap-1">
                <div className="w-24 h-4 bg-skeleton animate-pulse" />
                <div className="w-16 h-3 bg-skeleton animate-pulse" />
            </div>
        </div>
    );
}