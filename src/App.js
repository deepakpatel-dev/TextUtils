import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert'
import About from './components/About'
import {BrowserRouter as Router,
       Switch,
       Route
     } from "react-router-dom";


 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message ,type) => {
   setAlert({
     msg : message,
    type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been enabled' ,'success');
      // document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled' ,'success');
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
      {/* /users---> Component-1,
      /users/home---> -Component-2 */}
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/"> 
          <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>  
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;