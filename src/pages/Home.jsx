import BestSeller from "../components/BestSeller";
import Categories from "../components/Categories";
import FeaturedCarousal from "../components/FeaturedCarousal";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import NewsLetter from "../components/NewsLetter";
import { categoriesFilterArray } from "../data/Data";
import { allproducts } from "../data/Product";

const Home = () => {
  return (
    
      <Layout>
        <Hero/>
        <Categories categoriesFilterArray={categoriesFilterArray} />
        <FeaturedCarousal />
        <BestSeller allproducts={allproducts} />
        <NewsLetter />
      </Layout>
    
  );
};

export default Home;
