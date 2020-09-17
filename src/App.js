import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Products from "./Components/pages/Products";
import Services from "./Components/pages/Services";
import SignUp from "./Components/pages/SignUp";

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/products" exact component={Products} />
               <Route path="/services" exact component={Services} />
               <Route path="/sign-up" exact component={SignUp} />
            </Switch>
         </Router>
      </>
   );
}

export default App;
