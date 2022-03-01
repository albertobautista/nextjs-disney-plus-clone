import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCLBw0uEdy2uOLTqfmCjs_nZ5CkcvFqcY0',
  authDomain: 'disneyplus-clone-nextjs.firebaseapp.com',
  projectId: 'disneyplus-clone-nextjs',
  storageBucket: 'disneyplus-clone-nextjs.appspot.com',
  messagingSenderId: '203145419292',
  appId: '1:203145419292:web:e4d59f8b6b264c31d15dd9',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()

export default app
export { db }
