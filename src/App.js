import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import Navbar from "./components/Navbar";

// import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
// import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar';
import ViewDetails from "./pages/ViewDetails";


function App() {
  return (
    <>
   <Navbar/>
 <Routes>
      <Route path='/' element={<Home/>} index="true"/>
      <Route path='/products' element={<ProductList/>}/>
      <Route path='/products/:productId' element={<ViewDetails/>}/>
   </Routes>
      
  
    </>
  );
}

export default App;
