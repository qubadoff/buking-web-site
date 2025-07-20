import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/layout/Layout"
import Home from "./components/pages/Home/Home"

function App() {
  const router= createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
