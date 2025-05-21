import { Routes, Route } from 'react-router-dom'
import Ctg from './Ctg'

function App() {
  return (
    <>
      <Routes>
        <Route path="/:id" element={<Ctg />} />
      </Routes>
    </>
  )
}

export default App
