import React from 'react'
import Modal from './Modal'
import Image from "next/image"
import wifi from "@/assets/icons8-wi-fi-50.png"

function WifiModal({open,setOpen}:{open:any,setOpen:any}) {
  return (
    <Modal setOpen={setOpen} open={open}>
        <div className='flex flex-col gap-3 items-center justify-center '>
            <Image src={wifi} alt={'Wi-Fi'}/>
            <p className='font-bold text-2xl'>INFINITUMA1237</p>
            <p className='text-2xl'>1234567890</p>
        </div>
    </Modal>
  )
}

export default WifiModal