
interface BlogImageProps {
  src: string;
  alt?: string;
  onClick?: (src: string) => void;
}

export function BlogImage({
  src,
  alt,
  onClick,
}: BlogImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onClick={() => onClick?.(src)}
      className="
        my-6
        w-full
        rounded-xl
        cursor-zoom-in
        transition
        hover:opacity-90
      "
    />
  );
}