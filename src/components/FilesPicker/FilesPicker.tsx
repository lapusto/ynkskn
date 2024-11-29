import React from "react";
import { useRef, useState } from "react";

export const FilesPicker = ({ register }) => {
    const hiddenInputRef = useRef();


    const [preview, setPreview] = useState("");


    const { ref: registerRef, ...rest } = register("profilePicture");


    const handleUploadedFile = (event) => {
        const file = event.target.files[0];


        const urlImage = URL.createObjectURL(file);


        setPreview(urlImage);
    };

    const hiddenFileInput = useRef(null);


    const onUpload = () => {
        hiddenInputRef.current.click();
    };
    const onAddDocuments = () => {
        hiddenFileInput.current.click();
      };

    const uploadButtonLabel =
        preview ? "Change image" : "Upload image";


    return (
        <div>
            <label>Profile picture</label>


            <input
                style={{ display: "none" }}
                type="file"
                name="profilePicture"
                {...rest}
                onChange={handleUploadedFile}
                ref={(e) => {
                    registerRef(e);
                    hiddenInputRef.current = e;
                }}
            />


            <img src={preview} style={{ width: 80, height: 80 }} />


            <button onClick={onUpload}>
                {uploadButtonLabel}
            </button>
            <button onClick={onAddDocuments}>
          Add documents
        </button>

        </div>
    );
};