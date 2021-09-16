import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';


export const UserContext = createContext();

function App() {
  const[loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
       <Route exact path="/">
        <Home/> 
       </Route>
       <Route path="/home">
        <Home/> 
       </Route>
       <Route path="/contact">
        <Contact/> 
       </Route>
       <Route path="/blog">
        <Blog/> 
       </Route>
       <Route path="/login">
        <Login/> 
       </Route>
       </Switch>
     </Router>
     </UserContext.Provider>
  );
}

export default App;
