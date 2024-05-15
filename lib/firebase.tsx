import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import exp from "constants";

const firebaseConfig = {
    apiKey: "AIzaSyCUSdGpTtcETLiNd0hNfORTAoO18Hj8Yi4",
    authDomain: "guider-78e9a.firebaseapp.com",
    projectId: "guider-78e9a",
    storageBucket: "guider-78e9a.appspot.com",
    messagingSenderId: "521400312000",
    appId: "1:521400312000:web:906d5d5d83683d8105cd25",
    measurementId: "G-51BBJWX924"
  };


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();  