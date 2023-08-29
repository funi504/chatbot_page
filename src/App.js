//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './pages/nav';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Contact from './pages/contact';
import Footer from './pages/footer';


function App() {

  return (
    <div>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
