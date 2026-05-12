import './App.css'
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import ContactsMe from "./components/ContactsMe.jsx";
import BTEC from './components/BTEC.jsx';



function App() {


  return (
    <>
        <Navbar/>
        <About/>
        <Experience/>
        <Projects/>
        <BTEC/>
        <ContactsMe/>
        <footer>
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <p className="copyright">© All Rights Reserved / Oleksandr Hanysh</p>
        </footer>

    </>
  )
}

export default App
