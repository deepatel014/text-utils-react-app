import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#083348'
      showAlert("Dark mode has been enabled!","success");
    }
    else {
      setMode('light');
      document.body.style.background = '#ffffff'
      showAlert("Light mode has been enabled!","success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <TextForm label="Enter text to analyze:" showAlert={showAlert} mode={mode} />
        <AboutUs/> */}
        {/* <Switch>
        <Route exact path="/"> */}
          <TextForm label="Enter text to analyze:" showAlert={showAlert} mode={mode} />
          {/* </Route> */}
          {/* <Route path="/about">
            <AboutUs mode={mode} />
          </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
