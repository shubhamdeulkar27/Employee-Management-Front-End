import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route exact path='/Login' component={Login}/>
          <Route path='/Register' component={Register}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
