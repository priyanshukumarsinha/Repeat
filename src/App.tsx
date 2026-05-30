import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import { BlogPost } from './components/BlogPost/BlogPost'
import DockElement from './components/BlogPost/DockElement'


function App() {
  const [content, setContent] = useState("Loading...");
  const [title, setTitle] = useState("Loading...");
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getArticleById = async (articleId:string) => {
      const response = await axios.get(`https://dev.to/api/articles/${articleId}`);
      console.log(response);
      setContent(response.data.body_markdown);
      setTitle(response.data.title);
      const commentsResponse = await axios.get(`https://dev.to/api/comments?a_id=${articleId}`);
      setComments(commentsResponse.data);
    }

    getArticleById("2184952");

  }, [])

  return (
    <>
      <div className="min-h-screen">
        <BlogPost
          content={content}
          title={title}
          comments={comments}
        />
        <div className="flex fixed left-1/2 -translate-x-1/2 bottom-0 justify-center pb-6 z-50">
            <DockElement />
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
    </>
  )
}

export default App
