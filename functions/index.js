

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.getData = functions.https.onRequest((req, res) => {
    const docRef = db.collection('collection seller').doc('document op');
    const getDoc = docRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
          return res.send('Not Found')
        } 
          console.log(doc.data());
          return res.send(doc.data());
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
   });