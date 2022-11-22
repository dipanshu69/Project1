import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import "./styles/header.scss";


function App(){
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}


export default App;