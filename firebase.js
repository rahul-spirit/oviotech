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
firebase.firestore();
const db=firebase.firestore();
 //create new user
 const createForm=document.querySelector('#contact-form');
createForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('ovio').add({
        catagory:createForm['exslect1'].value,
        email:createForm['email'].value,
        message:createForm['message'].value
    }).then(()=>{
        swal("Your Question has been taken", "Your Form Has Been Submitted", "success");
        // take id #name,#email,#message .value=" ";
        
    }).catch(err=>{
        console.log(err.message)
    })
})


