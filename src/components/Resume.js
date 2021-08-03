import React, { useState } from 'react';
import style from '../styles/style.css'
import resume from "../utils/resume.png"
import resumeDownload from "../utils/Resume.pdf"


export default function Resume() {
    return (
        <div>
        <div className="flex justify-center mt-10">
        <img className="" src={resume} />

    </div>
    
    <div className="flex justify-center">
            <a href={resumeDownload} target="_blank" download><button class="downloadResumeButton mt-10">Download Full Resume Here</button></a>
    </div>
    </div>
    )
}