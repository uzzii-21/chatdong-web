import {useState, useEffect} from 'react';
import {storage} from '../firebase/config';

const useStorage = (files) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = storage.ref(files.name);
        storageRef.put(files).on('stage_changed', snap => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            console.log(percentage);
            setProgress(percentage)
        },(err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url)
        }) 
    }, [files]);

    return {progress, url, error};
}
export default useStorage;