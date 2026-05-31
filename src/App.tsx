import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { BlogPage } from './components/BlogPost/pages/BlogPage'
import { HomePage } from './components/BlogPost/pages/HomePage'
import { BlogNotFoundErrorPage } from './components/BlogPost/pages/BlogNotFoundErrorPage';
import { UserNotFoundErrorPage } from './components/BlogPost/pages/UserNotFoundErrorPage';
import { UserProfile } from './components/BlogPost/pages/UserProfile';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/:articleId",
      element: <BlogPage />,
      errorElement: <BlogNotFoundErrorPage />,
    },
    // {
    //   path: "/u/:userId",
    //   element: <UserProfile />, // Placeholder for UserProfile component
    //   errorElement: <UserNotFoundErrorPage />,
    // },
    {
      path: "/u/:username",
      element: <UserProfile />, // Placeholder for UserProfile component
      errorElement: <UserNotFoundErrorPage />,
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
