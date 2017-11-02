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
function updateUserData(userId, name, email, imageUrl) {
  database.ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
updateUserData('221','kunal','test@gmail.com','test')