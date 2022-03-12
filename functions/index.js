const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.createProfile = functions.auth.user().onCreate((user) => {
  const userData = {
    displayName: user.displayName,
    email: user.email,
  };

  return admin
    .firestore()
    .doc("users/" + user.uid)
    .set(userData);
});
