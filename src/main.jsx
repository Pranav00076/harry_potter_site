import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Films from './components/Films/Flims'
import BooksPage from './components/pages/BooksPage'
import News from './components/News/News'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/films",
    element: <Films />,
  },
  {
    path: "/books",
    element: <BooksPage />,
  },
  {
    path: "/news",
    element: <News />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
