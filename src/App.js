import React from "react";

import {
  Switch,
  BrowserRouter,
  NavLink,
  Redirect,
  Route
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import NotFound from "./Components/NotFound";
import Form from "./Components/Form";
import Header from "./Header";
export default function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <BrowserRouter>
        <div className="topnav">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </div>
        <br />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:id" component={Post} />
          <Route exact path="/posts/edit/:id" component={Form} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
