// Set the configuration for your app
  // TODO: Replace with your project's config object
const firebase = require("firebase");
const dotenv = require("dotenv").config();
  var config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    storageBucket: process.env.storageBucket
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  //console.log(database);
function writeUserData(userId, name, email, imageUrl) {
  database.ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
writeUserData('221','swan','test@gmail.com','test')
