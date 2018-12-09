import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Replace this with your own config details
var config = {
  apiKey: 'AIzaSyAqm-O9geVTSwNllIONb9J0aRpP3I2VByM',
  authDomain: 'myfirebasetestingproject-ef18d.firebaseapp.com',
  databaseURL: 'https://myfirebasetestingproject-ef18d.firebaseio.com',
  projectId: 'myfirebasetestingproject-ef18d',
  storageBucket: 'myfirebasetestingproject-ef18d.appspot.com',
  messagingSenderId: '369201464446'
}
firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
