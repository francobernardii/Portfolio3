import Footer from "./Layout/Footer"
import Header from "./Layout/Header"
import Home from "./Layout/Home"
import AboutMe from "./Layout/AboutMe"
import Projects from "./Layout/Projects"
import ContactMe from "./Layout/ContactMe"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen justify-between">
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/AboutMe" element={<AboutMe/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Contact" element={<ContactMe/>}/>
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    
  )
}

export default App
