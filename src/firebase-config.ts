import { initializeApp } from "firebase/app"
import { collection } from "firebase/firestore"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const projectsCollectionRef = collection(db, "projects")
export const skillsCollectionRef = collection(db, "skills")
export const linksCollectionRef = collection(db, "links")
export const storage = getStorage(app)
