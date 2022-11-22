// import logo from './logo.svg';
import './App.css';
import TextForm from './components/textFormet/textForm'
import Navbar from './components/navbar/navbar';
import React, { useState, createContext } from 'react';
import Alert from './components/alert/alert';
// import { Route, Switch, NavLink, Link } from 'react-router-dom'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import About from './components/navbar/about';
export const AppContext = createContext('')
function App() {
  const [HaxColor, setHaxColor] = useState('');
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

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-sucess')
  }

  let toggelMode = (cls) => {
    console.log(cls);
    removeBodyClasses()
    document.body.classList.add('bg-' + cls)
    if (mode === 'dark') {
      setmode('light')
      setmodetxt('dark')
      showAlert('Light Mode...', 'success');
      document.body.style.backgroundColor = ""
      // thok thodak samye title chang tya kre 
      // setInterval(() => {
      //   document.title = "Light Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Project Viren"
      // }, 1500)
    }
    else {
      document.body.style.backgroundColor = "#07335A"
      setmode('dark')
      setmodetxt('light')
      showAlert('Dark Mode...', 'success');
      document.title = "Dark Mode"


      // thok thodak samye title chang tya kre 
      // setInterval(() => {
      //   document.title = "Dark Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Project Viren"
      // }, 1500)

    }
  }

  return (
    <>
      <Router><AppContext.Provider value={setHaxColor}>
        <Navbar setHaxColor={setHaxColor} mode={mode} modetxt={modetxt} toggelMode={toggelMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm mode={mode} modetxt={modetxt} showAlert={showAlert} toggelMode={toggelMode} title="Example textarea" />
          </Route>
        </Switch>
      </AppContext.Provider>

      </Router>
    </>
  )
}

export default App;
