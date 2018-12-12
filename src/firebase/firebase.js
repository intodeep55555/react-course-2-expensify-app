import * as firebase from 'firebase';
//Copied from firebase website
const config = {
  apiKey: "AIzaSyA3-FsSb4z7mqBern4xIO_GfOu36LMhnrw",
  authDomain: "expensify-cbd4a.firebaseapp.com",
  databaseURL: "https://expensify-cbd4a.firebaseio.com",
  projectId: "expensify-cbd4a",
  storageBucket: "expensify-cbd4a.appspot.com",
  messagingSenderId: "105835213432"
};
firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};
