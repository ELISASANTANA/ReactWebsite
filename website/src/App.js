import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
        <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
