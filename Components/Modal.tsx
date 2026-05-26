"use client"
/*
===============
José Fong, 2026
===============
*/


import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from "next/image"
import arrow from "@/assets/icons8-left-96.png"

function Modal({children,setOpen,open}:{children:any,setOpen:any,open:any}) {
  const [mounted, setMounted] = useState(false)
  const [root, setRoot] = useState<Element | null>(null)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") {
          setOpen(false)
        }
      }

      if (open) {
        document.addEventListener("keydown", handleKeyDown)
      }

      return () => {
        document.removeEventListener("keydown", handleKeyDown)
      }
    }, [open])

  

  useEffect(() => {
    setMounted(true)
    setRoot(document.getElementById("modal-root"))
  }, [])

  if (!mounted || !root) return null
  return createPortal(
    <div onClick={()=>setOpen(false)} className={`${open ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-100 top-0 left-0 h-screen w-screen inset-0 fixed bg-black/50 flex items-center justify-center`}>
        <div onClick={(e)=>e.stopPropagation()} className={`${open ? "scale-100" : "scale-90"} transition-all duration-100 bg-white p-5 rounded-xl shadow-xl`}>
            {children}
        </div>
        <div onClick={()=>setOpen(false)} className='p-2 cursor-pointer shadow-3xl absolute bg-white bottom-8 left-8 w-16 h-16 rounded-full flex items-center justify-center'>
          <Image src={arrow} alt={'Regresar'}/>
        </div>
    </div>,
    root
  )
}

export default Modal