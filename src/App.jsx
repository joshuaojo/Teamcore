import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';  
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Service from './Pages/Service';

function App() {
  return (
    <Router>
    
      <Navbar />
      
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />  
        <Route path="/service" element={<Service />} />    
      </Routes>
    </Router>
  );
}

export default App;
