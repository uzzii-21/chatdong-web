import { useState, useEffect } from 'react'
import useStorage from './hooks/useStorage'
import imageType from './constant/constant'
import UploadForm from './components/UploadForm/UploadForm'
import UploadingSkeleton from './components/UploadingSkeleton/UploadingSkeleton'

const App = () => {
  const [file, setFile] = useState(null)
  const [skeletonImage, setSkeletonImage] = useState(null)
 
  const { progress, error, url } = useStorage(file)
  
  const changeFile = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && imageType.includes(selectedFile.type)){
      setFile(selectedFile)
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setSkeletonImage(reader.result)
      })
      reader.readAsDataURL(selectedFile)
    }
  }

  console.log({ progress, error, url });
  useEffect(() => {
    console.log(file);
  }, [file])

  return (
  <div className="App">
    <UploadForm changeFile={changeFile} />
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
      
      <UploadingSkeleton src={skeletonImage} percent={progress} />
      

    </div>
  </div>
)}

export default App
