import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#083348'
    }
    else{
      setMode('light');
      document.body.style.background = '#ffffff'
    }
  }
  return (
    <>
      <Navbar title ="Text Utils" aboutText="About Us" mode={mode} toggleMode = {toggleMode} />
      <div className="container">
      <TextForm label = "Enter text to analyze:" mode ={mode} />
      {/* <AboutUs/> */}
      </div>
      
    </>
  );
}

export default App;
