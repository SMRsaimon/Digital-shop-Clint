import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";



export const logInframWork = () => {

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}


// Google LogIn 

export const hendelGoogleSingIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  return firebase.auth()
    .signInWithPopup(googleProvider)
    .then((result) => {

      const user = result.user;
      return user

    }).catch((error) => {

      const errorMessage = error.message;
      return errorMessage
    });
}

// Facebook logIn 
export const hendelFaceBookSignIn = () => {
  const FaceBookProvider = new firebase.auth.FacebookAuthProvider();

  return firebase.auth()
    .signInWithPopup(FaceBookProvider)
    .then((result) => {
      const user = result.user;
      return user

    }).catch((error) => {

      const errorMessage = error.message;
      return errorMessage

    });
}


// LogOut from fairbase 

export const hendelLogOut = () => {
  return firebase.auth().signOut()

    .then(() => {

    }).catch((error) => {

      return error

    });

}



