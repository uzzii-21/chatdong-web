import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { fireStore } from '../firebase/config';

const useFirestore = (file: any) => {
  const [docs, setDocs] = useState<any>([]);
  useEffect(() => {
    const s = async () => {
      const querySnapshot = await getDocs(collection(fireStore, 'images'));
      querySnapshot.forEach((doc) => {
        setDocs((prev: any) => [...prev, doc.data()]);
      });
    };
    s();
  }, [file]);
  return { docs };
};

export default useFirestore;
