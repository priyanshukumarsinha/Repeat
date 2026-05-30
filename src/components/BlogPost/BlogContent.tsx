import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface BlogContentProps {
    content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <article
      className="
        prose
        prose-neutral
        dark:prose-invert

        max-w-none

        prose-headings:font-semibold

        prose-a:text-blue-600
        dark:prose-a:text-blue-400

        prose-a:no-underline
        hover:prose-a:underline

        prose-img:rounded-lg

        prose-pre:rounded-lg
        prose-pre:p-4
        prose-pre:bg-zinc-100
        dark:prose-pre:bg-zinc-900
      "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}