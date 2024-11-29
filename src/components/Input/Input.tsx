import React, { useImperativeHandle, useRef, useState } from "react";
import cls from "./Input.module.css"
import { useAutosizeTextArea } from "../../hooks/useAutosizeTextArea.ts";

export const Input = ({ label, register, required, id, errors }) => {
  const { ref, ...rest } = register(id)

  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setValue(val);
  };

  useImperativeHandle(ref, () => textAreaRef.current)

  return <div className={cls.input}>
    <label className={cls.label}>{label}</label>
    <textarea className={cls.textarea} {...register(id, { required })}
      id={id}
      onChange={handleChange}
      ref={textAreaRef}
      rows={1}
      name={id}
      value={value} />
      {
        errors[id]?
        <p className={cls.err}>Поле обязательно к заполнению</p> : null
      }
  </div>
};