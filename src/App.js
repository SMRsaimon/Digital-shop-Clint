
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
import PrivateRoute from './components/PrivateRoute';
import NotMatch from './components/NoMatch/NotMatch';



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

          <PrivateRoute path="/Orders">
            <Header ></Header>
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/Deals">
            <Header ></Header>
            <Deals></Deals>
          </Route>
          <PrivateRoute path="/Admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/logIn">
            <Header ></Header>
            <LogIn></LogIn>

          </Route>
          <PrivateRoute path="/CheckOut/:id">
            <Header ></Header>
            <CheckOut></CheckOut>

          </PrivateRoute>
          <Route path="*">
            <Header ></Header>
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>

    </userContext.Provider>
  );
}

export default App;
