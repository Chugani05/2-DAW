import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDaRHXt5c-GdO_uoa82MFtNmmSyRDOJ9U8',
  authDomain: 'auth-51261.firebaseapp.com',
  projectId: 'auth-51261',
  storageBucket: 'auth-51261.firebasestorage.app',
  messagingSenderId: '545219668873',
  appId: '1:545219668873:web:8d8108d5a34e9baee38f58',
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

class ConnectToDB {
  constructor() {
    this.collectionRef = collection(db, "users");
  }

  async create(data) {
    try {
      const docRef = await addDoc(this.collectionRef, data);
      console.log("Documento escrito con ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error añadiendo documento: ", e);
    }
  }

  async readAll() {
    try {
      const querySnapshot = await getDocs(this.collectionRef);
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Documentos:", dataList);
      return dataList;
    } catch (e) {
      console.error("Error obteniendo documentos: ", e);
    }
  }

  async getFile(id) {
    try {
        const docRef = doc(this.collectionRef, id)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    } catch (e) {
        console.error("No se obtuvo la información: " + e)
    }
  }

  async userExists(email) {
    const allUsers = await this.readAll()
    let userExists = false
    if (allUsers) {
      allUsers.forEach((user) => {
        if (user.email == email) {
          console.log('Usuario encontrado!')
          userExists = true
        }
      })
    }
    return userExists
  }

  async authenticate(email, password) {
    const allUsers = await this.readAll()
    let isAuthenticated = false
    if (allUsers) {
      allUsers.forEach((user) => {
        if (user.email == email && user.password == password) {
          console.log('Usuario loggeado!')
          isAuthenticated = true
        }
      })
    }
    return isAuthenticated
  }
}

export default ConnectToDB;