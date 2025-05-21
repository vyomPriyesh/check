import './App.css'
import { useState } from 'react'
import Ctg from './Ctg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ctg />
      {/* <Routes>
        <Route path='/:id' element={<Ctg />} />
      </Routes> */}
    </>
  )
}

export default App
