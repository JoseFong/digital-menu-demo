"use client"
import { Product, Tag } from '@/libs/types'
import TagsCard from './TagsCard'
import { useEffect, useRef, useState } from 'react'
import ProductInfoModal from './ProductInfoModal'

function ProductCard({p,setSelectedProduct,setOpen}:{p:Product,setSelectedProduct:any,setOpen:any}) {
    const [visible,setVisible] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        function handleScroll(){
            if(!cardRef.current) return

            const rect = cardRef.current.getBoundingClientRect()

            if(rect.top < window.innerHeight - 100) setVisible(true)
        }

        handleScroll()

        document.addEventListener("scroll",handleScroll)

        return ()=>{document.removeEventListener("scroll",handleScroll)}
    },[])

  return (
    <div
        className={`${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} bg-white p-3 rounded-2xl shadow-lg w-full flex flex-row gap-5 hover:scale-105 transition-all duration-500 cursor-pointer relative`}
        onClick={()=>{
            setSelectedProduct(p);
            setOpen(true);
        }}
        ref={cardRef}
    >
        <div className='h-20 w-20 rounded-xl bg-zinc-400' style={{backgroundImage:"url("+p.picture+")", backgroundPosition:"center", backgroundSize:"cover"}}></div>
        <div className='flex flex-col gap-1 justify-center w-1/2'>
            <h1 className='text-xl font-semibold'>{p.name}</h1>
            <p className='text-sm'>{p.desc}</p>
        </div>
        <div className='flex items-center justify-center grow pt-5'>
            <h2 className='text-lg font-semibold'>${p.prices[0].price}</h2>
        </div>
        <div className='absolute right-5'>
            <TagsCard ids={p.tags}/>
        </div>
        
    </div>
  )
}

export default ProductCard