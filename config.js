import firebase from 'firebase';
require('@firebase/firestore')


  var firebaseConfig = {
    apiKey: "AIzaSyCWFai5Iy4TtvbI5G7eW2xcGRtt9YhBXcs",
    authDomain: "user-profile-27706.firebaseapp.com",
    projectId: "user-profile-27706",
    storageBucket: "user-profile-27706.appspot.com",
    messagingSenderId: "15326559716",
    appId: "1:15326559716:web:e79f4dd3c8aa460d5f1bf1"
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
