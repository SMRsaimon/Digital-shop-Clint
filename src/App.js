
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import { createContext, useState } from 'react';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Deals from './components/Deals/Deals';
import Admin from './components/Admin/Admin';
import LogIn from './components/LogIn/LogIn';
import CheckOut from './components/CheckOut/CheckOut';


export const userContext = createContext()
function App() {

  const [user, setUser] = useState({})


  return (
    <userContext.Provider value={{ user, setUser }} >

      <Router>

        <Switch>
          <Route exact path="/">
            <Header ></Header>
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Header ></Header>
            <Home></Home>
          </Route>
          <Route path="/Orders">
            <Header ></Header>
            <Orders></Orders>
          </Route>
          <Route path="/Deals">
            <Header ></Header>
            <Deals></Deals>
          </Route>
          <Route path="/Admin">
            <Admin></Admin>
          </Route>
          <Route path="/logIn">
            <Header ></Header>
            <LogIn></LogIn>

          </Route>
          <Route path="/CheckOut/:id">
            <Header ></Header>
            <CheckOut></CheckOut>

          </Route>
        </Switch>
      </Router>

    </userContext.Provider>
  );
}

export default App;
