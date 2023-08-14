import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import {Route, Routes} from 'react-router-dom';
import Body from './components/Body/body';


import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
