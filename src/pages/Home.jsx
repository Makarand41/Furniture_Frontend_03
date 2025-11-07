import React from 'react'
import Header from '../components/Header'
import HomeCarousel from '../components/HomeCarousel'
import FeaturedCollections from '../components/FeaturedCollections'
import NoticeBar from '../components/NoticeBar'
import PromoSplit from '../components/PromoSplit'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FurnitureGrid from '../components/FurnitureGrid'
import ProductsWithSidebar from '../components/ProductsWithSidebar'
import Testimonials from '../components/Testimonials '
import WhatsAppButton from '../components/WhatsAppButton'
// import HomeProducts from '../components/HomeProducts'
import HomeCategorySections from '../components/HomeCategorySections'
import PromoBanner from '../components/PromoBanner '




const Home = () => {
  return (
    <>
  
    {/* <ProductsWithSidebar/> */}
     <Header/>
     
     <HomeCarousel/>
     <FeaturedCollections/>
     {/* <HomeProducts/> */}

     <HomeCategorySections/>
     <NoticeBar/>
     <PromoSplit/>

     <PromoBanner/>
     
     <Testimonials/> 
   
     <Footer/>
     <ScrollToTopButton/>
     <WhatsAppButton/>
    </>
  )
}

export default Home