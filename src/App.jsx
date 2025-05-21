// App.jsx
import { Routes, Route } from 'react-router-dom'
import Ctg from './Ctg'
import Home from './Home'

export default function App({ initialData }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Ctg ssrData={initialData} />} />
    </Routes>
  )
}
