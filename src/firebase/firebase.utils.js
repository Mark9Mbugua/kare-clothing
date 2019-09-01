import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAeBlkxI08VZATvuQq580BoAcpjBTWrw9c",
    authDomain: "kare-data.firebaseapp.com",
    databaseURL: "https://kare-data.firebaseio.com",
    projectId: "kare-data",
    storageBucket: "",
    messagingSenderId: "664435864537",
    appId: "1:664435864537:web:f2e3e9addcd0f6d9"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;