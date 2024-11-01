import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Info from "./sections/Info"
import About from ".//sections/About"
import Banner from "./sections/Banner"
import Creations from "./sections/Creations"
import Details from "./sections/Details"
import ServicesThatDriveResults from "./sections/ServicesThatDriveResults"
import Banner2 from "./sections/Banner2"
import MaintainYourWebsite from "./sections/MaintainYourWebsite"
import Testimonial from "./sections/Testimonial"
import OurWebDesignApproach from "./sections/OurWebDesignApproach"
import Questions from "./sections/Questions"

const App = () => {
  return (
    <div>
      <Info/>
      <Nav/>
      <Hero />
      <Banner/>
      <About/>
      <Creations/>
      <Details/>
      <ServicesThatDriveResults/>
      <Testimonial />
      <Banner2/>
      <MaintainYourWebsite/>
      <OurWebDesignApproach/>
      <Questions/>
      <Footer />
    </div>

  )
}

export default App