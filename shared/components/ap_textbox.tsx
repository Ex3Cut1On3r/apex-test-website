import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function ApTextBox(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`ap-textbox ${props.className ?? ""}`.trim()} />;
}

export function ApTextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`ap-textbox ap-textarea ${props.className ?? ""}`.trim()} />;
}
