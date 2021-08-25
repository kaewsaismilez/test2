import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

//import Navbar from "./Navbar";

import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Home from "./Home";
import HomePageUser from "../Menu/MenuHomeuser";
import HomePageAdmin from "../Menu/MenuHomeadmin";
import showUser from "../Table/MyProfile";



function App() {
  return (

    <BrowserRouter>
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/myprofile" component={showUser} />
          
          <CheckRoute />
        </Switch>
      
    </BrowserRouter>
  );
}

export default App;

const CheckRoute = () => {
  const token = localStorage.getItem("userrole_token");
  if(token === null){
    return <Redirect from='/' to='/'></Redirect>
  }
    return <>
    <Route exact path="/menuhomeuser" component={HomePageUser} />
    <Route exact path="/menuhomeadmin" component={HomePageAdmin} /> 
     </>
    
  

}
