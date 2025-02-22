/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");

//const cors = require("cors");
const app = express();
const serviceAccount = require("./permissions.json");
admin.initializeApp({
  //credential: admin.credential.cert(serviceAccount)
  credential: admin.credential.applicationDefault()
})

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello World!" });
})

app.use(require('./route/deposito.route'))

exports.app = functions.https.onRequest(app);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
