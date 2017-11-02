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
function deleteUserData(userId) {
  database.ref('users/' + userId).remove();
}
deleteUserData('221')