import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Testimonolist from "../components/Route/Testimolist/Testimonolist";
import Packages from "../components/Route//Packages/Packages";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import ContactUs from "../components/Route/ContactUs/ContactUs";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Testimonolist />
        <Packages/>
        <BestDeals />
        <Events />
        <FeaturedProduct />
        {/* <ContactUs/> */}
        <Footer />
    </div>
  )
}

export default HomePage