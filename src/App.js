import { useState } from "react";
import DragandDrop from "./components/DragandDrop/DragandDrop";

function App() {
  const [files, setFiles] = useState({});
  const [error, setError] = useState(null);

  const type = ['image/png', 'image/jpeg', 'image/jpg', 'image/jxr', 'image/webp']

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    if (selected && type.includes(selected.type)) {
      setFiles(selected);
      setError(null)
    }
    else {
      setFiles(null)
      setError('Please Select an image file')
    }
  }
  console.log(error);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <DragandDrop uploadFile={changeHandler} />
        <div>{error ? error : files.name}</div>
      </div>
    </div>
  );
}

export default App;
