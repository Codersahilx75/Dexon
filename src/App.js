import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './layout/Header';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Content4 from './components/Content4';
import Content5 from './components/Content5';
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
      <Header /> {/* Header sab pages mein dikhna chahiye */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/content1" element={<Content1 />} /> {/* Content1 Page */}
        <Route path="/content2" element={<Content2 />} />
        <Route path="/content3" element={<Content3 />} />
        <Route path="/content4" element={<Content4 />} />
        <Route path="/content5" element={<Content5 />} />

       
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
