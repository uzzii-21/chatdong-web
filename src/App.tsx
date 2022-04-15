// import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
// import useStorage from './hooks/useStorage';
// import imageType from './constant/constant';
// import UploadForm from './components/UploadForm/UploadForm';
// import UploadingSkeleton from './components/UploadingSkeleton/UploadingSkeleton';
// import ImageCard from './components/ImageCard/ImageCard';
// import useFirestore from './hooks/useFirestore';
import Navbar from './components/Navbar/Navbar';
import {Home, Search, Saved, Profile, SignIn, SignUp, ResetPassword, NotFound} from './pages';

const App = () => 
  // const [file, setFile] = useState(null);
  // const [skeletonImage, setSkeletonImage] = useState<
  //   string | ArrayBuffer | null
  // >('');

  // const { progress, url } = useStorage(file);
  // const { docs } = useFirestore(url);

  // const changeFile = (e: any) => {
  //   const selectedFile = e.target.files[0];
  //   if (selectedFile && imageType.includes(selectedFile.type)) {
  //     setFile(selectedFile);
  //     const reader = new FileReader();
  //     reader.addEventListener('load', () => {
  //       setSkeletonImage(reader.result);
  //     });
  //     reader.readAsDataURL(selectedFile);
  //   }
  // };

  // useEffect(() => {}, [file]);

   (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="discover" element={<Search />} />
        <Route path="saved" element={<Saved />} />
        <Route path="profile" element={<Profile />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <div className="App">
        <UploadForm changeFile={changeFile} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {!(progress === 100) && progress !== 0 && (
            <UploadingSkeleton src={skeletonImage} percent={progress} />
          )}
          {docs.map((urls: any) => (
            <ImageCard src={urls.url} />
          ))}
        </div>
      </div> */}
    </>
  )
;

export default App;
