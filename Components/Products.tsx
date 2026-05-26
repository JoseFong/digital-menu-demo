"use client"
import { Product } from '@/libs/types'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ProductInfoModal from './ProductInfoModal'

function Products({title,products}:{title:any,products:any}) {
  const [prods,setProds] = useState<Product[]>([])
  
    const [modalOpen,setModalOpen] = useState(false)
    const [selectedProduct,setSelectedProduct] = useState<Product>()

    useEffect(()=>{ 
        let aux = products.filter((p:Product)=>p.categories.includes(title))
        setProds([...aux])
    },[products])
  
    return (
    <div className='w-full p-6 flex mt-8 flex-col gap-2'>
        <h1 className='font-bold text-4xl mb-3' style={{color:"#49241c"}}>
            {title}
        </h1>
        {prods.map((p:Product)=>(
            <ProductCard p={p} key={p.id} setSelectedProduct={setSelectedProduct} setOpen={setModalOpen}/>
        ))}
        {selectedProduct && <ProductInfoModal setOpen={setModalOpen} open={modalOpen} p={selectedProduct}/>}
        
    </div>
  )
}

export default Products