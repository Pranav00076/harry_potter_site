import { useState } from 'react'
import Homepage from './components/homepage/Homepage'
import './App.css'
import Films from './components/Films/Flims'
import BooksPage from './pages/BooksPage'

function App() {
  return (
    <>
      <Homepage />
      <Films />
      <BooksPage />
    </>
  )
}

export default App
