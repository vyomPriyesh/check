import './App.css'
import { useState } from 'react'
import ReactRouterDOM from 'react-router-dom'

const { Routes, Route } = ReactRouterDOM
import Ctg from './Ctg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/:id' element={<Ctg />} />
      </Routes>
    </>
  )
}

export default App
