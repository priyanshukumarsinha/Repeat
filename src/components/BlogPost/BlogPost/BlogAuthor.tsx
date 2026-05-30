

export function BlogAuthor({ author, publishedDate }: any) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <img
        src={author.profile_image_90}
        alt={author.name}
        className="h-11 w-11 rounded-full ring-1 ring-zinc-700"
      />

      <div>
        <p className="font-medium text-zinc-100">
          {author.name}
        </p>

        <p className="text-sm text-zinc-400">
          Posted on {publishedDate}
        </p>
      </div>
    </div>
  );
}