import React from 'react'

interface btnProps{
    btnText:string;
    btnSX?:React.CSSProperties
}

const Button = ({btnText,btnSX}:btnProps) => {
  return (
    <button style={{backgroundColor:"red",...btnSX}}>{btnText}</button>
  )
}

export default Button
