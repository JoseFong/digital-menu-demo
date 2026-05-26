import React from 'react'
import { Playwrite_MX } from 'next/font/google'

const playwrite = Playwrite_MX({
  weight: ["400"]
})

function Handwritten({text}:{text:string}) {
  return (
    <p className={`max-w-1/2 text-center text-xl text-white ${playwrite.className}`}>{text}</p>
  )
}

export default Handwritten