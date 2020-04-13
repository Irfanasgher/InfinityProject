import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import CustomerApproach from "./components/CustomerApproach/CustomerApproach";
import Frames from "./components/Frames/Frames";
import FeatureProduct from "./components/FeatureProduct/FeatureProduct";
import ImpressiveWork from "./components/ImpressiveWork/ImpressiveWork";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import LoveOurClient from "./components/LoveOurClient/LoveOurClient";
import OurBlog from "./components/Blog/OurBlog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className={'pt-5'}>
          <CustomerApproach />
      </div>
        <Frames />
        <FeatureProduct />
        <ImpressiveWork />
        <ChooseUs />
        <LoveOurClient />
        <OurBlog />
        <Footer />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
