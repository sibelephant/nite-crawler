import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MiddleTop from "./components/Middle"
import Ooduee from "./components/Ooduee"
import FeaturesSection from "./components/FeatureSection"
import CustomerTestimonial from "./components/CustomerTestimonial"
import Achievements from "./components/Achievements"
import PricingSection from "./components/PricingSection"
import TestimonialCarousel from "./components/TestimonialCaru"
import TestimonialCarousel1 from "./components/TestimonialCaru"

const App = () => {
  return (
   <div className="md:bg-[#e6e6ff] overflow-y-auto h-screen">
    <Navbar/>
    <Hero/>
    <MiddleTop/>
    <Ooduee/>
    <FeaturesSection/>
    <CustomerTestimonial/>
    <Achievements/>
    <PricingSection/>
    <TestimonialCarousel/>

   </div>
  )
}

export default App
