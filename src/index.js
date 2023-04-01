import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Slider from './components/Slider';
import Card from './components/Card';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
    <Slider />
    <Card />
    <About aboutText="About US Tommorow" />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
