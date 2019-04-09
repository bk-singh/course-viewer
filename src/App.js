import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

import Courses from "./Courses";

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div class="bg-light p-4">
      <h2>Pluralsight Administration</h2>
      <p>React, Redux, React Router for ultra-responsive web apps.</p>
      <NavLink to="/About">
        <button class="btn btn-primary">Learn more</button>
      </NavLink>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        This app uses React, Redux, React Router and many other helpful
        libraries
      </p>
    </div>
  );
}

function NoMatch() {
  return <h2>Ooops! Page not found.</h2>;
}

function Header() {
  return (
    <ul class="nav">
      <li class="nav-item">
        <NavLink to="/home" activeClassName="selected-nav-item">
          Home
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/courses" activeClassName="selected-nav-item">
          Courses
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/about" activeClassName="selected-nav-item">
          About
        </NavLink>
      </li>
    </ul>
  );
}
