// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCC5NJhQP6jmhwCjV7sk2RSe2buMc9jJVY",
  authDomain: "ovio-1.firebaseapp.com",
  databaseURL: "https://ovio-1.firebaseio.com",
  projectId: "ovio-1",
  storageBucket: "ovio-1.appspot.com",
  messagingSenderId: "354649423076",
  appId: "1:354649423076:web:7e278f62a7e01a82a000f1",
  measurementId: "G-LRYKRV5BEE"
};
// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
firebase.analytics();
firebase.auth();

//admin login
function admincheck() {
  var email = document.getElementById("emailfield").value;
  var password = document.getElementById("passwordfield").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function () {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          window.location.replace("adminpage.html");
        }
        else {
          window.alert("error");
        }
      });

    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      swal("Oops", "Wrong Password or Email Address", "error");

    });
}


function adminpass(){
  window.location.href = "admin/index.html"
}


function seller(){
const db = firebase.firestore()
db.collection("seller").get()
.then(querySnapshot => {
    querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
    });
})
}