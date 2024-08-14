'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css';
import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css";


const ReactQuill = dynamic(() => import('react-quill'), { 
    ssr: false,
    loading: () => <p>Loading ...</p>
})



const ReactQuillEditor = () => {
    
    const modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
];

    const [value, setValue] = useState('');

    useEffect(() => {
    // Highlight all code blocks after content changes
    const highlightCode = () => {
        document.querySelectorAll('pre').forEach((block) => {
            Prism.highlightElement(block);
        });
    };

        highlightCode();

    }, [value]);

    return (
        <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
        />
    );
}

export default ReactQuillEditor