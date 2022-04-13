import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useState, useEffect } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { storage, fireStore, timestamp } from '../firebase/config'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    if (file) {
      const storageRef = ref(storage, file.name)
      const uploadFile = uploadBytesResumable(storageRef, file)

      uploadFile.on(
        'state_changed',
        (snapshot) => {
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        },
        (err) => setError(err),
        async () => {
          const uploadedUrl = await getDownloadURL(uploadFile.snapshot.ref)
          setUrl(uploadedUrl)
          try {
            const docRef = await addDoc(collection(fireStore, 'images'), {
              url: uploadedUrl,
              createdAt: timestamp
            })
            console.log('Document written with ID: ', docRef.id)
          } catch (e) {
            console.error('Error adding document: ', e)
          }
        }
      )
    }
  }, [file])

  return { progress, error, url, setProgress }
}

export default useStorage
