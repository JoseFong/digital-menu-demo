import React from 'react'
import Image from "next/image"
import foto1 from "@/assets/foto1.jpg"
import dessertspic from "@/assets/cakepop.jpg"
import frappespic from "@/assets/frappe.jpg"
import hotcoffeepic from "@/assets/lecheavena.jpg"
import veganpic from "@/assets/lecheavena.jpg"
import snackspic from "@/assets/snacks.jpg"
import teapic from "@/assets/tea.jpg"
import CategoryMenuCard from '@/Components/CategoryMenuCard'
import icedpic from "@/assets/iced.jpg"

import products from "@/libs/products.json"
import tags from "@/libs/tags.json"
import { Price, Product } from '@/libs/types'
import Products from '@/Components/Products'

function HomePage() {
  return (
    <div className='w-full' style={{backgroundColor:"#f2e9dc"}}>
      <div className='bg-white w-full shadow-xl flex items-center justify-center fixed z-50 p-4'>
        <img
          src="https://freepngimg.com/save/62031-logo-ristretto-coffee-cafe-cup-free-transparent-image-hd/956x736"
          className='w-15   '
        />
      </div>
      <img
        src="https://cdn.wallpapersafari.com/45/1/usjrAL.jpg"
        className='mt-10 w-full mask-b-from-70% mask-b-to-100%'
      />
      <div className='flex items-center justify-center flex-row w-full gap-5 p-8'>
        <Image src={foto1} alt="Barista" className='rounded-2xl shadow-2xl'/>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <img
            src="https://freepngimg.com/save/62031-logo-ristretto-coffee-cafe-cup-free-transparent-image-hd/956x736"
            className='w-25'
          />
          <p style={{color:"#49241c"}} className='text-center'>
            Creemos en el café como una experiencia para disfrutar con calma: ingredientes de calidad, atención cercana y un espacio pensado para conectar, trabajar y compartir.
          </p>
        </div>
      </div>
      <div className='w-full px-6 flex flex-row gap-3'>
          <CategoryMenuCard src={hotcoffeepic} title={'Caliente'}/>
          <CategoryMenuCard src={icedpic} title={'Cold Brew'}/>
      </div>
      <div className='w-full px-6 flex flex-row gap-2 mt-5'>
        <CategoryMenuCard src={frappespic} title={'Frappes'}/>
        <CategoryMenuCard src={teapic} title={'Té'}/>
      </div>
      <div className='w-full px-6 flex flex-row gap-2 mt-5'>
        <CategoryMenuCard src={snackspic} title={'Snacks'}/>
        <CategoryMenuCard src={dessertspic} title={'Postres'}/>
        <CategoryMenuCard src={veganpic} title={'Vegano'}/>
      </div>
      <Products title={"Caliente"} products={products}/>
      <Products title={"Cold Brew"} products={products}/>
      <Products title={"Frappes"} products={products}/>
      <Products title={"Te"} products={products}/>
      <Products title={"Snacks"} products={products}/>
      <Products title={"Postres"} products={products}/>
      <Products title={"Vegano"} products={products}/>
    </div>
  )
}

export default HomePage