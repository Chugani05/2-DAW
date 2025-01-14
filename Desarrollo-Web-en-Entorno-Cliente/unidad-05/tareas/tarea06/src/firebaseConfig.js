import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDaRHXt5c-GdO_uoa82MFtNmmSyRDOJ9U8',
  authDomain: 'auth-51261.firebaseapp.com',
  projectId: 'auth-51261',
  storageBucket: 'auth-51261.firebasestorage.app',
  messagingSenderId: '545219668873',
  appId: '1:545219668873:web:8d8108d5a34e9baee38f58',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
