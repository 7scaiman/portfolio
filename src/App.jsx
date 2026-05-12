import './App.css'

import Navbar from './components/Navbar.jsx';
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import ContactsMe from "./components/ContactsMe.jsx";
import BTEC from './components/BTEC.jsx';

import Unit10 from "./components/units/Unit10.jsx";
import Unit11 from "./components/units/Unit11.jsx";
import Unit16 from "./components/units/Unit16.jsx";
import Unit17 from "./components/units/Unit17.jsx";
import Unit18 from "./components/units/Unit18.jsx";
import Unit19 from "./components/units/Unit19.jsx";
import Unit22 from "./components/units/Unit22.jsx";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


function HomePage() {
    return (
        <>
            <Navbar/>
            <About/>
            <Experience/>
            <Projects/>
            <BTEC/>
            <ContactsMe/>
        </>
    )
}

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>

                <Route path="/" element={<HomePage />} />

                <Route path="/Unit10" element={<Unit10 />} />
                <Route path="/Unit11" element={<Unit11 />} />
                <Route path="/Unit16" element={<Unit16  />} />
                <Route path="/Unit17" element={<Unit17 />} />
                <Route path="/Unit18" element={<Unit18 />} />
                <Route path="/Unit19" element={<Unit19 />} />
                <Route path="/Unit22" element={<Unit22 />} />

            </Routes>

        </BrowserRouter>
    )
}

export default App