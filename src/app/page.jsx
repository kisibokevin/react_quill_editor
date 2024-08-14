'use client'

import React from 'react'
import styles from "./page.module.css";
import ReactQuillEditor from '@/components/reactQuillEditor/ReactQuillEditor';


const Home = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>ReactQuill with Syntax Highlighting</h1>
        <ReactQuillEditor />
      </div>
    )
}

export default Home