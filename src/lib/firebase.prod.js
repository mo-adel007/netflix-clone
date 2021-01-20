import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCELUBRM_vN30nxmFx5z20AuAekDPdzhjY",
  authDomain: "netflix-f2e71.firebaseapp.com",
  projectId: "netflix-f2e71",
  storageBucket: "netflix-f2e71.appspot.com",
  messagingSenderId: "20841414009",
  appId: "1:20841414009:web:b234998bf7deb8445743a8",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
