"use client"
import allproducts from "@/libs/products.json"
import { Product } from "@/libs/types"
import { useEffect, useState } from "react"
import Image from "next/image"
import prev from "@/assets/icons8-chevron-left-50.png"
import nex from "@/assets/icons8-chevron-right-50.png"

function Recomendations() {
    const products = allproducts.filter((f:Product)=>f.rec===true)

    const [started,setStarted] = useState(false)
    const [index,setIndex] = useState(0)

    useEffect(()=>{
        const interval = setInterval(() => {
            setIndex(index=>{
                let next = index+1
                if(next>=products.length) next=0
                return next
            })
        }, 5000);

        return ()=>{clearInterval(interval)}
    },[])

    function change(change:number){
        setIndex(prev => {
        let next = prev + change

        if(next < 0) next = products.length - 1
        if(next >= products.length) next = 0

        return next
        })
    }

  return (
    <div className='w-full p-6 flex flex-col gap-2 items-center justify-center' style={{backgroundColor:"#bda597"}}>
        <h1 className='font-bold text-4xl mb-3 w-full text-start' style={{color:"#49241c"}}>
            Recomendaciones
        </h1>
        <div className='bg-zinc-200 h-52 w-2/3 rounded-3xl shadow-sm relative flex items-end' style={{backgroundImage:"url("+products[index].picture+")", backgroundPosition:"center", backgroundSize:"cover"}}>
            <button onClick={()=>change(-1)} className="absolute top-1/2 -translate-y-1/2 -left-12">
                <Image src={prev} alt={"Anterior"} className="w-10"/>
            </button>
            <button onClick={()=>change(1)} className="absolute top-1/2 -translate-y-1/2 -right-12">
                <Image src={nex} alt={"Next"} className="w-10"/>
            </button>
            <div className="bg-black/60 text-white rounded-b-3xl py-1 w-full text-center bg-1/2 text-lg">{products[index].name}</div>
        </div>
    </div>
  )
}

export default Recomendations