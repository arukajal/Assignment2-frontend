import React from "react";
import './App.css';
import Header from "./components/Header";
import CardProfile from "./components/CardProfile";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; //npm install


function App() {
  return (
    <>
    <Header />
    <Router>
      <Switch>
      
        <Route exact path="/"><Login /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/cardprofile"><CardProfile /></Route>
        <Route exact path="/register"><Register/></Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
