import { useEffect, useState } from "react";
import { BlogAuthor } from "./BlogAuthor";
import { BlogContent } from "./BlogContent";
import { BlogTitle } from "./BlogTitle";
import { Comments } from "./Comments";
import axios from "axios";
import { OtherArticles } from "../OtherArticles/OtherArticles";

interface BlogPostProps {
    articleId: string;
    commentRef: React.RefObject<HTMLDivElement | null>;
}

export function BlogPost({ articleId, commentRef }: BlogPostProps) {
    const [blogData, setBlogData] = useState<any>({
        content: "Loading ...",
        title: "Loading ...",
        author: {},
        publishedDate: "Loading ...",
        comments: ["Loading ..."],
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getArticleById = async (articleId: string) => {
            try {
                const response = await axios.get(`https://dev.to/api/articles/${articleId}`);
                console.log(response);

                const date = new Date(response.data.published_at);

                const formattedDate = date.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                });

                const commentsResponse = await axios.get(`https://dev.to/api/comments?a_id=${articleId}`);
                setBlogData((prev: any) => ({
                    ...prev,
                    content: response.data.body_markdown,
                    title: response.data.title,
                    publishedDate: formattedDate,
                    author: response.data.user,
                    comments: commentsResponse.data
                }));
            } catch (error) {
                setError("Failed to load article data. Please try again later.");
            }
        }

        getArticleById(articleId);

    }, [])

    if(error){
        throw new Error(error);
    }
    return (
        <div className="max-w-3xl mx-auto px-4 py-8"
        >
            <BlogAuthor author={blogData.author} publishedDate={blogData.publishedDate} />
            <BlogTitle title={blogData.title} />
            <BlogContent content={blogData.content} />
            <Comments comments={blogData.comments} commentRef={commentRef} />
            <OtherArticles username={blogData.author.username} />

        </div>
    )
}