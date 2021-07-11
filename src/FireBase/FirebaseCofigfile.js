import * as Firebase from 'firebase'
import { LogBox } from 'react-native';
import _ from 'lodash';

LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};



  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIQPj7p2J7FE5MU45bkUyfXOnHJ9JL5b0",
  authDomain: "tanzeemapp.firebaseapp.com",
  projectId: "tanzeemapp",
  storageBucket: "tanzeemapp.appspot.com",
  messagingSenderId: "799318648334",
  appId: "1:799318648334:web:4778000730db0587cdfe5f",
  measurementId: "G-F8C8DH4BQW"
};
 

  if (!Firebase.apps.length) {
    console.log('Connected with Firebase')
    Firebase.initializeApp(firebaseConfig);
  }
  export const db=Firebase.firestore()
  export const storage = Firebase.storage()
  



  export default Firebase;