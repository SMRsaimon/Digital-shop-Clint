import React, { useContext } from 'react';
import { userContext } from '../../App';
import { hendelGoogleSingIn, logInframWork } from '../FirebaseAuth';


const LogIn = () => {

  logInframWork()

  const { user, setUser } = useContext(userContext)


  const googleSignIn = () => {

    hendelGoogleSingIn()
      .then(result => {
        setUser(result)
      })
  }



  return (
    <div>
      <button onClick={googleSignIn}> LogIn With Google </button>
    </div>
  );
};

export default LogIn;