import React from 'react'

interface imgProps{
    src:string;
    alt:string;
    imgSX:React.CSSProperties
}

const Image = ({src,alt,imgSX}:imgProps) => {
  return (
    <img src={src} alt={alt} style={{...imgSX}} />
  )
}

export default Image
