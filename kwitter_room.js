
  //ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAEG5pkWoo2ydGsLFFAoHJ4hQFeWN30Y3g",
  authDomain: "kwitter-c833a.firebaseapp.com",
  databaseURL: "https://kwitter-c833a-default-rtdb.firebaseio.com",
  projectId: "kwitter-c833a",
  storageBucket: "kwitter-c833a.appspot.com",
  messagingSenderId: "398997861862",
  appId: "1:398997861862:web:98543424fb85a94ada1227",
  measurementId: "G-MXGS3TDN7V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome   " + user_name;

function addRoom() {
  room_name = document.getElementById("").value;

  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
              console.log("Room Name -" +Room_names);
              row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names+" </div><hr>";
              document.getElementById("output").innerHTML += row;
              //End code
        });
  });
}
getData();

function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("room_name" ,name);
  window.location = "kwitter_page.html"

}
function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAEG5pkWoo2ydGsLFFAoHJ4hQFeWN30Y3g",
  authDomain: "kwitter-c833a.firebaseapp.com",
  databaseURL: "https://kwitter-c833a-default-rtdb.firebaseio.com",
  projectId: "kwitter-c833a",
  storageBucket: "kwitter-c833a.appspot.com",
  messagingSenderId: "398997861862",
  appId: "1:398997861862:web:98543424fb85a94ada1227",
  measurementId: "G-MXGS3TDN7V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome   " + user_name;

function addRoom() {
  room_name = document.getElementById("").value;

  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
              console.log("Room Name -" +Room_names);
              row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names+" </div><hr>";
              document.getElementById("output").innerHTML += row;
              //End code
        });
  });
}
getData();

function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("room_name" ,name);
  window.location = "kwitter_page.html"

}
function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAEG5pkWoo2ydGsLFFAoHJ4hQFeWN30Y3g",
  authDomain: "kwitter-c833a.firebaseapp.com",
  databaseURL: "https://kwitter-c833a-default-rtdb.firebaseio.com",
  projectId: "kwitter-c833a",
  storageBucket: "kwitter-c833a.appspot.com",
  messagingSenderId: "398997861862",
  appId: "1:398997861862:web:98543424fb85a94ada1227",
  measurementId: "G-MXGS3TDN7V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome   " + user_name;

function addRoom() {
  room_name = document.getElementById("").value;

  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
              console.log("Room Name -" +Room_names);
              row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names+" </div><hr>";
              document.getElementById("output").innerHTML += row;
              //End code
        });
  });
}
getData();

function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("room_name" ,name);
  window.location = "kwitter_page.html"

}
function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}