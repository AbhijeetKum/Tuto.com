var firebaseConfig = {
      apiKey: "AIzaSyBNhROvbhMivUduketF0GfjaAmJilkqMLU",
      authDomain: "kwitter-ca07d.firebaseapp.com",
      databaseURL: "https://kwitter-ca07d-default-rtdb.firebaseio.com",
      projectId: "kwitter-ca07d",
      storageBucket: "kwitter-ca07d.appspot.com",
      messagingSenderId: "1054720209282",
      appId: "1:1054720209282:web:6cc3ba106a63dab3af5f9b"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
