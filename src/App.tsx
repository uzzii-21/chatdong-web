import { useState, useEffect } from 'react';
import useStorage from './hooks/useStorage';
import imageType from './constant/constant';
import UploadForm from './components/UploadForm/UploadForm';
import UploadingSkeleton from './components/UploadingSkeleton/UploadingSkeleton';
import ImageCard from './components/ImageCard/ImageCard';
import useFirestore from './hooks/useFirestore';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [file, setFile] = useState(null);
  const [skeletonImage, setSkeletonImage] = useState<
    string | ArrayBuffer | null
  >('');

  const { progress, url } = useStorage(file);
  const { docs } = useFirestore(url);

  const changeFile = (e: any) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && imageType.includes(selectedFile.type)) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setSkeletonImage(reader.result);
      });
      reader.readAsDataURL(selectedFile);
    }
  };

  useEffect(() => {}, [file]);

  return (
    <>
      <Navbar />
      <div className="App">
        <UploadForm changeFile={changeFile} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {!(progress === 100) && progress !== 0 && (
            <UploadingSkeleton src={skeletonImage} percent={progress} />
          )}
          {docs.map((urls: any) => (
            <ImageCard src={urls.url} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
