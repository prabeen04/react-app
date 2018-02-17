import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBj3i3WQ_vChtU6ZdbfJDia9bsKTy5Chz0",
    authDomain: "react-40b7f.firebaseapp.com",
    databaseURL: "https://react-40b7f.firebaseio.com",
    projectId: "react-40b7f",
    storageBucket: "",
    messagingSenderId: "95036717125"
  };
  if(!firebase.apps.length){
      firebase.initializeApp(config);
  }
const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
export {
  auth,provider,
};
