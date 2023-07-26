import './App.css'
import Footer from './section/Footer'
import Glance from './section/Glance'
import Hero from './section/Hero'
import HowTo from './section/HowTo'
import JoinUs from './section/JoinUs'
import Navbar from './section/Navbar'
import What from './section/What'
import Why from './section/Why'

function App() {

  return (
    <>
      <div className="bg-[#212121] overflow-hidden">
        <div className="hero-section m-0">
          <Navbar />
          <Hero />
        </div>
        <div className="relative">
          <What />
          <div className="gradient-03 z-0">

          </div>
          <HowTo />

        </div>
        <div className="relative">
          <Why />
          <div className="gradient-02 z-0">
          </div>

          <Glance />
        </div>


        <JoinUs />


        <Footer />



      </div>
    </>
  )
}

export default App
