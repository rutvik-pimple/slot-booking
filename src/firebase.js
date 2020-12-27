import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCNC-kYjRGCvSxgNqGz0Rcm1rPuH2afsSE",
    authDomain: "slot-booking-2337e.firebaseapp.com",
    databaseURL: "https://slot-booking-2337e-default-rtdb.firebaseio.com",
    projectId: "slot-booking-2337e",
    storageBucket: "slot-booking-2337e.appspot.com",
    messagingSenderId: "951963907429",
    appId: "1:951963907429:web:e23b769230c12c65389d8c"
  };
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();