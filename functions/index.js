const functions = require("firebase-functions");
const { app } = require('./src/api/app');

exports.app = functions.https.onRequest(app);
