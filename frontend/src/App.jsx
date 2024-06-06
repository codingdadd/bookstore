import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home , ShowBook , CreateBook , EditBook , DeleteBook } from './pages'

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/book/create" element={<CreateBook/>} />
      <Route path="/book/detail/:id" element={<ShowBook/>} />
      <Route path="/book/edit/:id" element={<EditBook/>} />
      <Route path="/book/delete/:id" element={<DeleteBook/>} />
    </Routes>
  )
}

export default App
