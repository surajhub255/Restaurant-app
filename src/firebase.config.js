import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDzcek1qhX7EMjkM1a5zcOsADvwR3W9TGQ",
    authDomain: "restaurantapp-4e24e.firebaseapp.com",
    databaseURL: "https://restaurantapp-4e24e-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-4e24e",
    storageBucket: "restaurantapp-4e24e.appspot.com",
    messagingSenderId: "670238850629",
    appId: "1:670238850629:web:0f8acadf86f5893377ed2c"
};



const app = getApps.Length > 0 ? getApp(): initializeApp( firebaseConfig );

const firestore = getFirestore( app );
const storage = getStorage( app );

export { app, firestore, storage };