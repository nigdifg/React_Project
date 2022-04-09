import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
import About from './components/About';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'




// let name="Anurag";
function App() {
const [mode, setmode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert =(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500);
}

const toggleMode =()=>{
  if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor = ' #336699';
    showAlert("Dark mode Enabled!","success");
  }
  else
  {
    setmode('light');
    document.body.style.backgroundColor = 'rgb(194 135 143 / 30%)';
    showAlert("Light mode Enabled!","success");
  }
}
  return (
 
 <>
 <Router>  
<Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
 
<div className="container my-3">

  <Routes>
        <Route path='/' element={ <Textform showAlert={showAlert} mode={mode} /> } />
       
        <Route path='/about' element={<About/>} />
       
        
   </Routes>
   </div>
</Router>
  
    </>
  );
}

export default App;
