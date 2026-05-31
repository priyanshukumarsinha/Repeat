// import React from 'react'
import { useEffect, useState } from 'react';
import HeadingDiv from './HeadingDiv';
import { motion } from 'motion/react';
import { BlogDiv } from './BlogDiv';

interface BlogProps {
    title: string;
    description: string;
    link: string;
}

const getBlogs = async (
  currentArticleId?: string
): Promise<BlogProps[]> => {
  try {
    const response = await fetch(
      "https://dev.to/api/articles?username=priyanshukumarsinha"
    );

    const data = await response.json();

    return data
      .filter(
        (blog: any) =>
          !currentArticleId ||
          blog.id !== Number(currentArticleId)
      )
      .sort(
        (a: any, b: any) =>
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime()
      )
      .map((blog: any) => ({
        title: blog.title,
        description: blog.description,
        link: blog.url,
      }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const OtherArticles = ({username = "priyanshukumarsinha"}) => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [loading, setLoading] = useState(true);
  const location = window.location.href;
  const currentArticleId = location.split('/').pop();

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsData = await getBlogs(currentArticleId);
      setBlogs(blogsData);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  if (loading || blogs.length === 0) return null;

  return (
    <div className="mt-20">
      <HeadingDiv
        heading="More Articles"
        moreTitle="View all"
        moreLink={`https://dev.to/${username}`}
      />
      <span 
        className="text-sm text-white/60 mb-4 block -translate-y-6"
      >
        from {username}
      </span>

      <div className="grid grid-cols-1 gap-4">
        {blogs.map((blog, idx) => (
          <motion.a
            key={idx}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
          >
            <BlogDiv blog={blog} />
          </motion.a>
        ))}
      </div>
    </div>
  )
}
