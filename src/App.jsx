import { Routes, Route } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
import Home from './pages/Home'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainlayout />}>
        <Route index element={<Home />} />
        </Route >
      </Routes>
    </>
  )
}

export default App
