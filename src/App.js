import React, { useEffect } from "react";
import "./style/style.css";
import "./style/media.css";
import Database from "./Database/MyDatabase";
import { useDispatch } from "react-redux";
import { setProduct } from "./redux/actions/productActions";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { Redirect } from "react-router-dom";
import Home from "./Component/Home";
import Destination from "./Component/Destination";
import Crew from "./Component/Crew";
import Technology from "./Component/Technology";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setProduct(Database));
  });

  return (
    <BrowserRouter>
      <div className="nav-menu">
        <Navbar />
      </div>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/destination" component={Destination} exact />
        <Route path="/crew" component={Crew} exact />
        <Route path="/technology" component={Technology} exact />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
