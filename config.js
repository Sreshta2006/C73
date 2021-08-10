import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCcCFuKbZBf9KmAwHrqNnrcIo9F-f0koxg",
  authDomain: "project73-8875e.firebaseapp.com",
  projectId: "project73-8875e",
  storageBucket: "project73-8875e.appspot.com",
  messagingSenderId: "73323397429",
  appId: "1:73323397429:web:2423c499ff28aaf66dcc7c"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

