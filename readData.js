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
function readData(userId){
	database.ref('/users/' + userId).once('value').then(function(snapshot) {
	  var username = snapshot.val().username;
	  console.log(username)
	  var email = snapshot.val().email;
	  console.log(email)
	  var profile_picture = snapshot.val().profile_picture;
	  console.log(profile_picture)
	});
}
readData('221')