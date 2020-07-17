import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import "./bootstrap.min.css";

import StudentList from "./components/StudentList";
import StudentSearch from "./components/StudentSearch";

function App(props) {
  return (
    <Router>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Navbar.Toggle aria-controls="navbarColor01" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/StudentList">StudentList</Nav.Link>
            <Nav.Link href="/StudentSearch">StudentList</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Route render={() => <StudentList />} path="/StudentList" />
        <Route render={() => <StudentSearch />} path="/StudentSearch" />
      </div>
    </Router>
  );
}
//<Route render ={()=> < App />} path="/" />
export default App;
