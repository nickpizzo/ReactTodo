import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyB9SqLjvunmRE-gv-0ZSNNjIX5_2ttTGxE",
    authDomain: "nick-todo-app.firebaseapp.com",
    databaseURL: "https://nick-todo-app.firebaseio.com",
    storageBucket: "nick-todo-app.appspot.com",
    messagingSenderId: "888663544699"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
