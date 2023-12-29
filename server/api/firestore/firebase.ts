import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBjht0vea76V6ZLkCyqiFxeYRp4rvTaCYA',
  authDomain: 'my-first-project-1110913.firebaseapp.com',
  projectId: 'my-first-project-1110913',
  storageBucket: 'my-first-project-1110913.appspot.com',
  messagingSenderId: '975844882213',
  appId: '1:975844882213:web:fe2ad0746c2de61e5f4ccc',
  measurementId: 'G-C8JWYX7WYP',
  databaseURL: 'https://DATABASE_NAME.firebaseio.com'
})

// const {
//   API_KEY,
//   AUTH_DOMAIN,
//   PROJECT_ID,
//   STORAGE_BUCKET,
//   MESSAGING_SENDER_ID,
//   APP_ID,
//   MEASUREMENT_ID,
//   DATABASE_URL,
// } = process.env;

// export const firebaseApp = initializeApp({
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID,
//   measurementId: MEASUREMENT_ID,
//   databaseURL: DATABASE_URL,
// });

export const db = getFirestore(firebaseApp)

export const numbersRef = collection(db, 'numbers')

export const studentsRed = collection(db, 'students')
