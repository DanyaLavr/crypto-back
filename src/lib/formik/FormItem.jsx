"use client";
import { ErrorMessage, Field } from "formik";
import styles from "./formik.module.css";
export default function FormItem({
  name,
  placeholder,
  type = "",
  onChange = null,
}) {
  return (
    <div className={`${styles.wrapper} grid gap-1.5 `}>
      <Field
        className={`${styles.input} text-stone-950 outline-none border-2 border-gray-950 rounded-2xl px-3 py-1.5 transition-all duration-500 placeholder:text-gray-400 placeholder:capitalize`}
        type={type ? type : name}
        name={name}
        placeholder={placeholder || name}
        {...(onChange && { onChange })}
      />
      <ErrorMessage
        className={`${styles.error} text-rose-600 text-xs`}
        name={name}
        component="div"
      />
    </div>
  );
}
