import Bookservice from "./components/Bookservice"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Viewservices from "./components/Viewservices"
import Signuplogin from "./components/Signuplogin"
import {Route, Routes} from 'react-router-dom'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Viewservices" element={<Viewservices/>}/>
    <Route path="/Bookservice" element={<Bookservice/>}/>
    <Route path="/Signuplogin" element={<Signuplogin/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
