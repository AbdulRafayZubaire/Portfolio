import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";



function App() {

  return (
    <div className="box-border">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>
    <Certificates/>
    <Contact/>
    </div>
  );
}

export default App;
