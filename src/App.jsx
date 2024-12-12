
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Policy from './pages/Policy'
import NoPage from './pages/NoPage'
import ProductDetail from './pages/ProductDetail'
const App=()=> {
  

  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product-detail/:id' element={<ProductDetail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='*' element={<NoPage/>}/>
        <Route/>
      </Routes>
      {/* <Footer/> */}
       
    </BrowserRouter>
  )
}

export default App
