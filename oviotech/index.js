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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth();

function login()
{
    var email= document.getElementById("emailfield").value;
    var password = document.getElementById("passwordfield").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                window.location.replace("dashboard.html");
            } else {
                window.alert("error");
            }
          });

    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        swal ( "Oops" ,  "Wrong Password or Email Address" ,  "error" );

      });
}

function logout(){
  firebase.auth().signOut().then(function() {
     
     window.location.replace("index.html");
  }).catch(function(error) {
    window.alert('Cannot Signout Right Now Please Try Agian Later');
  });
}

function signup()
{

 var email= document.getElementById("emailfield").value;
 var password = document.getElementById("passwordfield").value;
 var cpassword = document.getElementById("confirmpasswordfield").value;
 if ( password== cpassword)
{ firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("error"+errorMessage)
  // ...
});
}
else{
window.alert("Password Doesnt match");
}
}

function passreset(){
  var auth = firebase.auth();
var email = document.getElementById("emailfield").value;

auth.sendPasswordResetEmail(email).then(function() {
  swal (  "Email Send Successfully" ,  "Success" );
  
}).catch(function(error) {
  // An error happened.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("error"+errorMessage)
});
}

// to check if user is logged in or not
function IsUser(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user)
    {window.location.replace("index.html");}
  }); 
}

