import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { BlogPage } from './components/BlogPost/pages/BlogPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/:articleId",
      element: <BlogPage />,
      errorElement: <div>404 Not Found</div>
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
