// import firebase from "firebase";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// database.ref("expenses")
// .once("value")
// .then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses")
// .on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses)
// });

  // database.ref("expenses").push({
  //   description: "Rent",
  //   note: "",
  //   amount: 109500,
  //   createdAt: 98478394832
  // })


// database.ref("notes/-MabeJS5UDfu6pUjp6E3").remove();

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React native, Angular, Python"
// });

// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });

// database.ref("location/city")
// .once("value")
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.log("Error fetching data", e)
// });

// database.ref().set({
//   name: "Andrew Mead",
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: "Software Developer",
//     company: "Google"
//   },
//   location: {
//       city: "Philadelphia",
//       country: "United States"
//   }
// }).then(() => {
//   console.log("Data is saved");
// }).catch((e) => {
//   console.log("This failed.", e)
// });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database.ref("isSingle")
// .remove()
// .then(() => {
//   console.log("Data was removed")
// }).catch((e) => {
//   console.log("Did not remove", e)
// });