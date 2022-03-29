import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
