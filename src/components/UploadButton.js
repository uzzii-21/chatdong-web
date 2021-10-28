import { useState } from "react";

const UploadButton = () => {
    const [files, setFiles] = useState(null);
    const type = ['image/png', 'image/jpeg', 'image/jpg', 'image/jxr', 'image/webp']
    const changeHandler = (e) => {
        let selected = e.target.files;
         if(selected && type.includes(selected.type)){
             setFiles(...selected);
             console.log(files, "yes")
         }
         else{
             setFiles(null)
         }
    }
    return (
        <div>
            <input type="file" onChange={changeHandler} multiple />
            {/* {files} */}
        </div>
    )
}

export default UploadButton
