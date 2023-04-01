import GetStarted from "src/Components/GetStarted"
import Hereos from "src/Components/Hereos"
import Services from "src/Components/Services"
import Footer from "../src/Components/Footer"
import Header from "../src/Components/Header"


function HomePage() {
    return <>

      <Header  />
      <Hereos />
      <Services />
      <GetStarted />
      <Footer />
      </>
  }
  
  export default HomePage