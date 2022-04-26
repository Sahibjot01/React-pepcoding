import './App.css';
import React from 'react';
// import Main from './components/Main'
import Navbar from './components/Navbar';
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import New from './components/New';
// import Routing from './Routing';

//add main component in serperate fn
//add login route
//add new page route
function App() {
  return (
  <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/New">
          <New></New>
        </Route>
        <Redirect from="/" to="/home">
        </Redirect>
      </Switch>
  </div>
  // <Routing></Routing>
  )
}

export default App;