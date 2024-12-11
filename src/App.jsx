
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shope from './pages/Shope'
import Navbar from './components/Navbar'
function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shope/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
