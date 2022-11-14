// import logo from './logo.svg';
import './App.css';
import TextForm from './components/textFormet/textForm'
import Navbar from './components/navbar/navbar';
import React, { useState } from 'react';
import Alert from './components/alert/alert';
// import { Route, Switch, NavLink, Link } from 'react-router-dom'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import About from './components/navbar/about';
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const [modetxt, setmodetxt] = useState("dark");

  let showAlert = (message, type) => {
    setalert({
      messj: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  let toggelMode = () => {
    if (mode === 'dark') {
      setmode('light')
      setmodetxt('dark')
      showAlert('Light Mode...', 'success');
      document.body.style.backgroundColor = ""


      // thok thodak samye title chang tya kre 
      setInterval(() => {
        document.title = "Light Mode"
      }, 2000);
      setInterval(() => {
        document.title = "Install Project Viren"
      }, 1500)


    }
    else {
      document.body.style.backgroundColor = "#07335A"
      setmode('dark')
      setmodetxt('light')
      showAlert('Dark Mode...', 'success');
      document.title = "Dark Mode"


      // thok thodak samye title chang tya kre 
      setInterval(() => {
        document.title = "Dark Mode"
      }, 2000);
      setInterval(() => {
        document.title = "Install Project Viren"
      }, 1500)

    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} modetxt={modetxt} toggelMode={toggelMode} />
        <Alert alert={alert} />
        <Switch>
          <Route path="/">
            <TextForm mode={mode} modetxt={modetxt} showAlert={showAlert} toggelMode={toggelMode} title="Example textarea" />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

      </Router>
    </>
  )
}

export default App;
