var firebaseConfig = {
    apiKey: "AIzaSyBXWbM6UmCCNuk9pHJpK3tjcShzdV5_2XY",
    authDomain: "kid-instagram.firebaseapp.com",
    databaseURL: "https://kid-instagram-default-rtdb.firebaseio.com",
    projectId: "kid-instagram",
    storageBucket: "kid-instagram.appspot.com",
    messagingSenderId: "612284936004",
    appId: "1:612284936004:web:1575d7519d9d11a11d3111"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");

   function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

     row = name_with_tag + message_with_tag +like_button + span_with_tag;       
     document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();


function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
         name: user_name,
         message:msg,
         like:0,
    });
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}