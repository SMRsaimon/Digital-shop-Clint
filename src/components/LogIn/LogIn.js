import React, { useContext } from 'react';
import "./LogIn.css"
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
import { hendelGoogleSingIn, logInframWork } from '../FirebaseAuth';
import imgGoogle from "./google.png"

const LogIn = () => {

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  logInframWork()

  const { user, setUser } = useContext(userContext)


  const googleSignIn = () => {

    hendelGoogleSingIn()
      .then(result => {
        setUser(result)
        history.replace(from);
      })
  }



  return (
    <div className="logIn-conatiner">
      <button onClick={googleSignIn}> <img src={imgGoogle} alt=""></img> <span> LogIn With Google</span> </button>
    </div>
  );
};

export default LogIn;