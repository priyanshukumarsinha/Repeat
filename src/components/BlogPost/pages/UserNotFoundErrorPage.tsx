import { Link } from "react-router-dom";

export const UserNotFoundErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8 text-8xl">
          🕵️
        </div>

        <h1 className="mb-4 text-5xl font-bold">
          User Not Found
        </h1>

        <p className="mb-8 text-lg text-zinc-500 dark:text-zinc-400">
          We looked everywhere, but this developer appears to have
          vanished into the void.
        </p>

        <div
          className="
            mx-auto
            max-w-lg
            rounded-2xl
            border
            border-zinc-200
            dark:border-zinc-800
            bg-white
            dark:bg-zinc-900
            p-6
            text-left
            font-mono
            text-sm
          "
        >
          <p className="text-red-500">
            Error: UserNotFoundException
          </p>

          <p className="mt-2 text-zinc-500">
            at fetchUserProfile()
          </p>

          <p className="text-zinc-500">
            at loadArticles()
          </p>

          <p className="text-zinc-500">
            at renderDeveloper()
          </p>

          <p className="mt-4 text-yellow-500">
            Possible causes:
          </p>

          <ul className="mt-2 space-y-1 text-zinc-500">
            <li>• Username is incorrect</li>
            <li>• User deleted their account</li>
            <li>• User ascended to senior architect</li>
            <li>• User is debugging production</li>
          </ul>
        </div>

        <Link
          to="/"
          className="
            mt-8
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
          ← Back Home
        </Link>
      </div>
    </div>
  );
};