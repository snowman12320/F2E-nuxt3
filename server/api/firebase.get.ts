import { addDoc, deleteDoc, updateDoc, getDocs } from 'firebase/firestore'
import { numbersRef, studentsRed } from './firebase'

// defineEventHandler 會請求兩次，第一次是 OPTIONS，第二次才是 GET
export default defineEventHandler(async (event) => {
  let document: Array<any> = []
  const querySnapshot = await getDocs(studentsRed)
  querySnapshot.forEach((doc) => {
    document.push(doc.data())
  })
  return document
})
