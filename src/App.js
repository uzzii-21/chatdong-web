import { useState } from "react";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";

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
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <DragAndDrop uploadFile={changeHandler} />
        <div>{error ? error : files.name}</div>
      </div>
    </div>
  );
}

export default App;
