import React from 'react'
import Modal from './Modal'
import { Price, Product } from '@/libs/types'

function ProductInfoModal({setOpen,open,p}:{setOpen:any,open:any,p:Product}) {
  return (
    <Modal setOpen={setOpen} open={open}>
        <div className='max-w-[80vw] flex flex-col gap-2 text-lg'>
            <h1 className='font-bold text-2xl'>{p.name}</h1>
            <div className='flex flex-row gap-3'>
                <div className='rounded-2xl min-w-1/2 max-w-1/2 bg-zinc-200 aspect-square' style={{backgroundImage:"url("+p.picture+")", backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className='flex flex-col gap-3'>
                    <p>{p.desc}</p>
                    {p.prices.map((pr:Price)=>(
                        <p key={pr.size}>{pr.size}: <span className='font-bold'>{pr.price}</span></p>
                    ))}
                </div>
            </div>
            <div className='flex flex-row gap-2'>
                    <div className='flex flex-col gap-2 w-1/2'>
                        {p.ingredients.length>0 && <div>
                            <h2 className='text-xl font-bold'>Ingredientes</h2>
                            <ul>
                                {p.ingredients.map((i:string)=>(
                                    <li key={i}>- {i}</li>    
                                ))}
                            </ul>    
                        </div>}
                    </div>
                    <div className='flex flex-col gap-2 w-1/2'>
                        {p.flavours.length>0 && <div>
                            <h2 className='text-xl font-bold'>Sabores</h2>
                            <ul>
                                {p.flavours.map((i:string)=>(
                                    <li key={i}>- {i}</li>    
                                ))}
                            </ul>    
                        </div>}
                    </div>
            </div>
        </div>
    </Modal>
  )
}

export default ProductInfoModal