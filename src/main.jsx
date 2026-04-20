import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './components/homepage/Homepage.jsx'
import Films from './components/Films/Flims'
import BooksPage from './components/pages/BooksPage'
import News from './components/News/News'
import Features from "./components/Features/Features.jsx"
import FactFile from './components/FactFile/FactFile.jsx'
import SortingHome from './components/SortingHat/SortingHome.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StarField from './components/reusable_comps/Navbar/Starfield/Starfield.jsx'
import Footer from './components/reusable_comps/Navbar/Footer/Footer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
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
  {
    path: "/features",
    element: <Features/>,
  },
  {
    path: "/facts",
    element: <FactFile />
  },
  {
    path: "/SortingHat",
    element: <SortingHome/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarField />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
