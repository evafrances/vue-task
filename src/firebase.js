import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCQbTaOYGDO_al0NLRJ6Bd6kbOnnvR_SR0",
        authDomain: "vue-tareas-d1f14.firebaseapp.com",
        databaseURL: "https://vue-tareas-d1f14.firebaseio.com",
        projectId: "vue-tareas-d1f14",
        storageBucket: "",
        messagingSenderId: "161981423874",
        appId: "1:161981423874:web:c8e342133c7a8254"
      };
      // Initialize Firebase
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    export default firebaseApp.firestore()