// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBXWbM6UmCCNuk9pHJpK3tjcShzdV5_2XY",
    authDomain: "kid-instagram.firebaseapp.com",
    projectId: "kid-instagram",
    storageBucket: "kid-instagram.appspot.com",
    messagingSenderId: "612284936004",
    appId: "1:612284936004:web:92fec220dcbc7cfc1d3111"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
 
       //End code
       });});}
 getData();
  
 function  addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child("room_name",room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "Insta_page.html";
 }

 function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name",name);
   window.location = "Insta_page.html";
 }