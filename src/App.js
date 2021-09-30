import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alerts from './components/Alerts';
import React, { useState } from 'react'//type imrs
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setalert(null)
  }, 1500);
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#04153a'
      showalert("Dark mode is enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert("light mode is enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About TextUtils" Mode={Mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Switch>
            {/* ./users -->.component 1
            ./users/home -->-->.components 2 */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text to analys" Mode={Mode} showalert={showalert} />
            </Route>
          </Switch>
          </div>
      </Router>
    </>
  );
}

export default App;
