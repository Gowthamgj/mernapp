import './App.css';
import React,{useState } from 'react'
import {Login} from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/dashboard">
              <h1>dashboard compponent will flow here</h1>
            </Route>
            <Route path="/users">
              {/* <Users /> */}
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
