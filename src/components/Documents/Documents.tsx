import React, { useRef } from "react";
import { useFieldArray, Controller } from "react-hook-form";
import cls from "./Documents.module.css";
import removeBtn from "./remove.svg"
import add from "./add.svg"

export const Documents = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "documents",
    keyName: "documentId"
  });

  const hiddenFileInput = useRef(null);

  const onAddDocuments = () => {
    hiddenFileInput.current.click();
  };

  const handleAddDocuments = (event) => {
    const uploadedFiles = Array.from(event.target.files);

    const files = uploadedFiles.map((file) => ({
      file,
      urlImage: URL.createObjectURL(file),
    }));

    append(files);

    hiddenFileInput.current.value = "";
    console.log(files)
  };

  return (
    <>
      <input
        style={{ display: "none" }}
        ref={hiddenFileInput}
        type="file"
        multiple
        onChange={handleAddDocuments}
        name="documents"
      />

      <div className={cls.filesWrapper}>
        {fields.map((file, index) => (
          <div key={file.documentId} className={cls.file}>
            <Controller
              control={control}
              name={`documents.${index}`}
              render={() => (
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={file.urlImage} alt="" className={cls.img} />
                  </div>
                  <div className={cls.remove} onClick={() => remove(index)}>
                    <img src={removeBtn} alt="" />
                  </div>
                </div>
              )}
            />
          </div>
        ))}

        <div onClick={onAddDocuments} className={cls.addBtn}>
          <img src={add} alt="" />
        </div>
      </div>
    </>
  );
};

export default Documents;
