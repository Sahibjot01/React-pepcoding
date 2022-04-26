import React from 'react'
import Navbar from './components/Navbar'
import { Route, Switch, Redirect } from "react-router-dom";
function Home(){
    return(
        <div>Home</div>
    )
}
function AboutUs(){
    return(
        <h1>AboutUs</h1>
    )
}
function PageNotFound(){
    return(
        <h1>PageNotFound</h1>
    )
}
function Temp(){
    return(
        <div>idk</div>
    )
}
function Routing() {
  return (
    <>
    <Navbar></Navbar>


{/* 1. if searched /xyz no route will render
2. if searched /home, /home will render
3. if searched /home/xyz, both /home and /home/xyz will render */}
<Switch>
<Route path="/home/xyz">
            <Temp></Temp>
        </Route>
    <Route path="/home" >
        <Home></Home>
    </Route>
        
    <Route path="/about">
        <AboutUs></AboutUs>
    </Route>
    <Route>
        <PageNotFound></PageNotFound>
    </Route>
</Switch>

    
    </>
  )
}

export default Routing