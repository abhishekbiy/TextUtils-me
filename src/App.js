import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, {useState} from 'react';
import Alert from './Components/Alert';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('DarkMode Enabled','success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('LightMode Enabled','success');
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="MyApp" mode={mode} toggleMode={toggleMode} aboutText = "About Us" /> 
    <Alert alert={alert} />
    <div className="container my-5">
    
      {/* <Routes> */}
        {/* <Route exact path='/about' element={<About/>}></Route> */}
        {/* <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}></Route> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}
 
export default App;
