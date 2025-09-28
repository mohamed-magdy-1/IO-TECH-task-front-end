"use client";
import "./customStyle.css"
import { useSelector } from "react-redux";
import DOMPurify from 'dompurify';
export default function ServiceBlog({ data }) {
  const language = useSelector(state => state.app.language);
   const cleanHTML = DOMPurify.sanitize(data.content); 

  return (
    <div dir={language === "en" ? "ltr" : "rtl"}>
      <h1 className="text-[#4B2615] my-[30px] font-medium text-[42px] leading-[32px]">{data.title}</h1>
      <div className="prose " dangerouslySetInnerHTML={{ __html: cleanHTML }} />
    </div>
  );
}
