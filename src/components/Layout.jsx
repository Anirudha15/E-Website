/* eslint-disable react/prop-types */
/* elint-disable react/prop-types */
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
    </>
  )
}

export default Layout
