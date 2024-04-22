
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Components/Navbar'
import Home from './Components/Home';
// import Counter from './Components/Counter';
// import OurServices from './Components/OurServices';
// import CalltoAction from './Components/CalltoAction';
import Footer from './Components/Footer';
import About from './Components/About';
import {Routes,Route} from "react-router-dom"
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Navbar /> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
   <Footer/>
    </>
  );
}

export default App;
