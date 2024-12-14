
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
import Profile from './pages/Profile'
import Register from './pages/Register'
import MyOrders from './pages/MyOrders'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ConfirmOrder from './pages/ConfirmOrder'
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
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/my-orders' element={<MyOrders/>}/>
        <Route path='*' element={<NoPage/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/confirm-order' element={<ConfirmOrder/>}/>
      </Routes>
      {/* <Footer/> */}
       
    </BrowserRouter>
  )
}

export default App
