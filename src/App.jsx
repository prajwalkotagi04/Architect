import { Routes, Route } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainlayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />}  />
        </Route >
      </Routes>
    </>
  )
}

export default App
