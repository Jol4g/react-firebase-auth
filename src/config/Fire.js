import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAlawbBbjGZVlqz-2-7epRZzDHx40cuMFA",
    authDomain: "fir-react-auth-c8cdc.firebaseapp.com",
    databaseURL: "https://fir-react-auth-c8cdc.firebaseio.com",
    projectId: "fir-react-auth-c8cdc",
    storageBucket: "fir-react-auth-c8cdc.appspot.com",
    messagingSenderId: "462253634102",
    appId: "1:462253634102:web:e92381a43a030339d15e97",
    measurementId: "G-VDWNFXEDBF"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;