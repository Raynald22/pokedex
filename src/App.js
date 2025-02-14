import React from 'react';
import Navbar from './components/Navbar';
import "./App.css"
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './pages/About';
import Pokemon from './pages/Pokemon';
import Form from './pages/Form';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Footer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/form-add' element={<Form />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
