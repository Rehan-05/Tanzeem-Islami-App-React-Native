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
  apiKey: "AIzaSyB3FL1qnMM2aI-wt7fi0uKtAndrRqgDzms",
  authDomain: "tanzeem.com",
  projectId: "tanzeemapp-6f072",
  storageBucket: "tanzeemapp-6f072.appspot.com",
  messagingSenderId: "767401992205",
  appId: "1:767401992205:android:365c4a0cc71a065a3e3544",
  //measurementId: "G-F8C8DH4BQW"
};
 

  if (!Firebase.apps.length) {
    console.log('Connected with Firebase')
    Firebase.initializeApp(firebaseConfig);
  }
  export const db=Firebase.firestore()
  export const storage = Firebase.storage()
  



  export default Firebase;