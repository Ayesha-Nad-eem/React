import React from 'react'

export default function ProfilePicture() {
    const imageURL="./src/assets/images.png";
    const handleclick=(e)=>{ e.target.style.display="none";}
  return (
    <img onClick={(e)=>handleclick(e)} src={imageURL} alt="" />
  )
}
