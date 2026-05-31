import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { BlogContentSkeleton } from "../Skeleton/BlogContentSkeleton";
import { CodeBlock } from "./CodeBlock";
import { ImageModal } from "./ImageModal";
import { BlogImage } from "./BlogImage";
import { YoutubeEmbed } from "./YoutubeEmbed";

import { remarkCodeBlock } from "./customRemarks/remarkCodeBlock";
import { remarkImage } from "./customRemarks/remarkImage";
import { remarkYoutubeEmbed } from "./customRemarks/remarkYoutubeEmbed";

interface BlogContentProps {
  content: string;
}


export function BlogContent({
  content,
}: BlogContentProps) {
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  if (content === "Loading ...") {
    return <BlogContentSkeleton />;
  }

  const markdownComponents: any = {
    "code-block": ({ language, code }: any) => {
      return (
        <CodeBlock
          language={language}
          code={code}
        />
      );
    },
    "blog-image": ({ src, alt }: any) => {
      return (
        <BlogImage
          src={src}
          alt={alt}
          onClick={(src) =>
            setSelectedImage(src)
          }
        />
      );
    },
    "youtube-embed": ({ url }: any) => (
      <YoutubeEmbed url={url} />
    ),
  }

  console.log(content.match(/\{%.*?%\}/g));
  return (
    <>
      <article
        className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-pre:p-0 prose-pre:bg-transparent"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkCodeBlock, remarkImage, remarkYoutubeEmbed]}
          components={markdownComponents}
        >
          {content}
        </ReactMarkdown>
      </article >

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          onClose={() =>
            setSelectedImage(null)
          }
        />
      )
      }
    </>
  );
}