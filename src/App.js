import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
// import About from './About';
import React, { useState } from 'react';
import Alert from './Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter,
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const setAlert1 = (message, type) => {
    setAlert ({
      msg: message,
      type: type,
    })
    setTimeout  (()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = 'grey';
      setAlert1("Dark mode has been Enabled", "success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      setAlert1("Light mode has been Enabled", "success");
    }
  }
  const theme = ()=>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#8a045c ';
      setAlert1("Dark mode has been Enabled", "success");
    }
    else{
      setMode ('dark');
      document.body.style.backgroundColor = '#6f04d9';
      setAlert1("Light mode has been Enabled", "success");
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" text="About Us" mode={mode} toggleMode={toggleMode} theme={theme}/>
    <Alert alert={alert}/>
    <TextForm setAlert1={setAlert1} heading="Enter the text to analyze below" mode={mode}/>
      {/* <Routes>
      <Route exact path="/"element={<TextForm setAlert1={setAlert1} heading="Enter the text to analyze below" mode={mode}/>}>
      </Route>
      <Route exact path="/about" element={<About mode={mode} />} >
      </Route>
      </Routes>
    </BrowserRouter> */}
    </> 
  );
}

export default App;
