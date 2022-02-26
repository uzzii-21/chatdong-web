import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

// Set the configuration for your app
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

// initialize firebase
const firebaseApp = initializeApp(firebaseConfig)
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp)
const fireStore = getFirestore()

export { storage, fireStore }
