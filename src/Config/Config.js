import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const Config = {
    apiKey: "AIzaSyC-8HzGa-QH_jvfMx3k3UsBgg4GjPVlVIE",
    authDomain: "form-auth-d21ba.firebaseapp.com",
    databaseURL: "https://form-auth-d21ba.firebaseio.com",
    projectId: "form-auth-d21ba",
    storageBucket: "form-auth-d21ba.appspot.com",
    messagingSenderId: "429638843119",
    appId: "1:429638843119:web:bf70d1640a4b6c5b6e391a",
    measurementId: "G-WVN5MQW75S"
};

firebase.initializeApp(Config);

firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
