// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyDRobpsVXUa-1R9rkFODIhKnzF1NVbVORY",
//   authDomain: "react-app-676fe.firebaseapp.com",
//   projectId: "react-app-676fe",
//   storageBucket: "react-app-676fe.appspot.com",
//   messagingSenderId: "1043533173285",
//   appId: "1:1043533173285:web:91578f330bea6f1fb8e5cc"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = app.firestore();
// const auth = firebase.auth();

// export {db,auth}

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDRobpsVXUa-1R9rkFODIhKnzF1NVbVORY",
  authDomain: "react-app-676fe.firebaseapp.com",
  projectId: "react-app-676fe",
  storageBucket: "react-app-676fe.appspot.com",
  messagingSenderId: "1043533173285",
  appId: "1:1043533173285:web:91578f330bea6f1fb8e5cc"
};

 const app = firebase.initializeApp(firebaseConfig);
 const db = app.firestore();
 const auth = firebase.auth();

 export{db,auth}