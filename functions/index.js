const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.createProfile = functions.auth.user().onCreate(async (user) => {
  const replaceSpaces = (str) => str.replace(" ", "_");
  const snapshot = await admin
    .firestore()
    .collection("users")
    .where("username", "==", replaceSpaces(user.displayName))
    .get();

  let username;
  if (snapshot.size !== 0) {
    username = `${replaceSpaces(user.displayName)}_${snapshot.size}`;
  } else {
    username = replaceSpaces(user.displayName);
  }

  const userData = {
    username: username,
    email: user.email,
  };

  return admin
    .firestore()
    .doc("users/" + user.uid)
    .set(userData);
});
