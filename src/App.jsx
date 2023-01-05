import Footer from "./Layout/Footer"
import Header from "./Layout/Header"
import Home from "./Layout/Home"

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
