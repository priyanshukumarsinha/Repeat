import { useNavigate } from "react-router-dom";
import { BlogAuthorSkeleton } from "./Skeleton/BlogAuthorSkeleton";


export function BlogAuthor({ author, publishedDate }: any) {
  if(author.name === "Loading ..." || publishedDate === "Loading ...") {
    return <BlogAuthorSkeleton />;
  }

  const navigate = useNavigate();

  const handleAuthorClick = () => {
    navigate(`/u/${author.username}`);
  }

  return (
    <div className="mb-8 flex items-center gap-3">
      <img
        src={author.profile_image_90}
        alt={author.name}
        className="h-11 w-11 rounded-full ring-1 ring-zinc-700"
      />

      <div>
        <p className="font-medium text-zinc-100 cursor-pointer hover:text-blue-500" onClick={handleAuthorClick}>
          {author.name}
        </p>

        <p className="text-sm text-zinc-400">
          Posted on {publishedDate}
        </p>
      </div>
    </div>
  );
}