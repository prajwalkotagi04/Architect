import { Routes, Route } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Loading from './components/Loading'
import Projects from './pages/Projects'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainlayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />}  />
        <Route path='/project' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/loading" element={<Loading />} />
        </Route >
      </Routes>
    </>
  )
}

export default App
