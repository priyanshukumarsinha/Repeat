import { Link } from "react-router-dom";

export function BlogNotFoundErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <img
          src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
          alt="Confused cat"
          className="mx-auto mb-8 h-56 rounded-2xl"
        />

        <p className="text-6xl font-bold mb-4">404</p>

        <h1 className="text-3xl font-bold mb-3">
          This blog wandered off.
        </h1>

        <p className="text-zinc-500 dark:text-zinc-400 mb-8">
          We searched every corner of the internet, under the couch,
          and even inside Stack Overflow. This article doesn't seem
          to exist.
        </p>

        <Link
          to="/"
          className="
            inline-flex
            items-center
            rounded-xl
            border
            border-zinc-200
            dark:border-zinc-800
            px-5
            py-3
            text-sm
            font-medium
            hover:bg-zinc-100
            dark:hover:bg-zinc-900
            transition-colors
          "
        >
          ← Back to blogs
        </Link>
      </div>
    </div>
  );
}