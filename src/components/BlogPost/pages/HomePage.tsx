import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8 text-8xl">
          🚧
        </div>

        <h1 className="mb-4 text-5xl font-bold">
          Under Construction
        </h1>

        <p className="mb-8 text-zinc-500 dark:text-zinc-400 text-lg">
          The blog is currently being assembled with an unhealthy
          amount of coffee, TypeScript, and questionable life choices.
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
            Error: Homepage not implemented
          </p>

          <p className="mt-2 text-zinc-500">
            at buildAmazingPortfolio()
          </p>

          <p className="text-zinc-500">
            at consumeCoffee()
          </p>

          <p className="text-zinc-500">
            at procrastinate()
          </p>

          <p className="mt-4 text-green-500">
            Status: Work in progress...
          </p>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          In the meantime, open a blog directly using its article ID.
        </p>

        <Link
          to="/2295989"
          className="
            mt-4
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
          View Sample Article →
        </Link>
      </div>
    </div>
  );
};