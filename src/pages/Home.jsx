import BestSeller from "../components/BestSeller"
import Categories from "../components/Categories"
import FeaturedCarousal from "../components/FeaturedCarousal"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import NewsLetter from "../components/NewsLetter"
import { categoriesFilterArray } from "../data/Data"
import { allproducts } from "../data/Product"


const Home = () => {
  return (
    <div>
      <Hero/>
      <Categories categoriesFilterArray={categoriesFilterArray}/>
      <FeaturedCarousal/>
      <BestSeller allproducts={allproducts}/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
