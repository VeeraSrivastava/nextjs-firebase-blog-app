import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {

  apiKey: "AIzaSyAIfpudEtk7LHj6LzrklsE9c4BomRytzJU",

  authDomain: "blog-2ba4f.firebaseapp.com",

  databaseURL: "https://blog-2ba4f-default-rtdb.firebaseio.com",

  projectId: "blog-2ba4f",

  storageBucket: "blog-2ba4f.appspot.com",

  messagingSenderId: "24919826708",

  appId: "1:24919826708:web:0cc5fbf19b9c30e343a201",

  measurementId: "G-THK94Z0MB4"

};



if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)


const auth  = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export {auth,db,storage,serverTimestamp}


