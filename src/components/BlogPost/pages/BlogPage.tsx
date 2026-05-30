import { useRef } from "react";
import { BlogPost } from "../BlogPost/BlogPost";
import DockElement from "../DockElement";
import { useParams } from "react-router-dom";


export function BlogPage() {
    const commentRef = useRef<HTMLDivElement>(null);
    const { articleId } = useParams<{ articleId: string }>();

    console.log("Article ID:", articleId);
    
    return (
      <div className="min-h-screen">
        <BlogPost
          articleId={articleId || "123456"}
          commentRef={commentRef}
        />

        <div className="flex fixed left-1/2 -translate-x-1/2 bottom-0 justify-center pb-6 z-50">
          <DockElement commentRef = {commentRef} />
        </div>
        {/* Bottom Gradient Fade */}
        <div
          aria-hidden="true"
          className="
              pointer-events-none
              fixed bottom-0 left-0 right-0
              w-full
              h-48
              z-30
              bg-gradient-to-t
              from-[#0a0a0a]     
              via-[#0a0a0a]/70
              via-[#0a0a0a]/30
              to-transparent
            "
        />
      </div>
    )
}