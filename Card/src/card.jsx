import React from 'react'
import profilePic from "/src/assets/Profile-pic.png"

export default function () {
  return (
    <div className="card">
        <img src={profilePic} alt="Profile Picture" />
        <h2>Ayesha Nadeem</h2>
        <p>Software engineer | frontend developer | Loves Coding</p>
    </div>
  )
}
