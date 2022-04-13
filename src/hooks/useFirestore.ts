import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { fireStore } from '../firebase/config'

const useFirestore = (file) => {
  const [docs, setDocs] = useState([])
  useEffect(async () => {
    const querySnapshot = await getDocs(collection(fireStore, 'images'))
    querySnapshot.forEach((doc) => {
      setDocs((prev) => [...prev, doc.data()])
    })
  }, [file])
  return { docs }
}

export default useFirestore
