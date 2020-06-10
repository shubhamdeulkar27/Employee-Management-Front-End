import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appbar from "./Components/Appbar";
import Dashboard from "./Components/Dashboard";
import EmployeeList from "./Components/EmployeeList";
import AddEmployee from "./Components/AddEmployee";
import EditEmployee from "./Components/EditEmployee";
function App() {
  return (
    <Router>
      <div className="App" style={style}>
        <Appbar />
        <br />
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/EmployeeList" component={EmployeeList} />
          <Route path="/AddEmployee" component={AddEmployee} />
          <Route path="/EditEmployee" component={EditEmployee} />
        </Switch>
      </div>
    </Router>
  );
}

const style = {
  marginTop: "20px",
};

export default App;
