"use client"

import React, { useEffect, useState } from 'react'
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
import Products from '@/Components/Products'
import InfoModal from '@/Components/InfoModal'
import WifiModal from '@/Components/WifiModal'

import wifilogo from "@/assets/icons8-wi-fi-50.png"
import TopMenuOne from '@/Components/TopMenuOne'
import TopMenuTwo from '@/Components/TopMenuTwo'
import Recomendations from '@/Components/Recomendations'

function HomePage() {

  const [modalOpen,setModalOpen] = useState(false)
  const [wifiOpen,setWifiOpen] = useState(false)
  const [secondMenu,setSecondMenu] = useState(false)

  useEffect(()=>{
    function handleScroll(){
      const el = document.getElementById("caliente")

      if(!el) return

      const rect = el.getBoundingClientRect()

      if(rect.top<=500){
          setSecondMenu(true)
      }else{
        setSecondMenu(false)
      }
    }

      document.addEventListener("scroll",handleScroll)

      return ()=>{
        document.removeEventListener("scroll",handleScroll)
      }
  },[])

  return (
    <div className='w-full overflow-x-hidden' style={{backgroundColor:"#f2e9dc"}} >
      {secondMenu ? <TopMenuTwo/> : <TopMenuOne/>} 
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
      <Recomendations/>
      <div className='w-full mt-8 px-6 flex flex-row gap-3'>
          <CategoryMenuCard src={hotcoffeepic} title={'Caliente'} reff='caliente'/>
          <CategoryMenuCard src={icedpic} title={'Cold Brew'} reff='cold-brew'/>
      </div>
      <div className='w-full px-6 flex flex-row gap-2 mt-5'>
        <CategoryMenuCard src={frappespic} title={'Frappes'} reff='frappes'/>
        <CategoryMenuCard src={teapic} title={'Té'} reff='te'/>
      </div>
      <div className='w-full px-6 flex flex-row gap-2 mt-5'>
        <CategoryMenuCard src={snackspic} title={'Snacks'} reff='snacks'/>
        <CategoryMenuCard src={dessertspic} title={'Postres'} reff='postres'/>
        <CategoryMenuCard src={veganpic} title={'Vegano'} reff='vegano'/>
      </div>
      <div style={{backgroundColor:"#875539"}} className='h-32 mt-8 relative flex items-center justify-center'>
        <p className='max-w-1/2 text-center text-2xl italic text-white'>"Café para disfrutar sin prisa."</p>
        <img className='absolute w-50 rotate-20 -left-18 -top-5' src="https://131850910.cdn6.editmysite.com/uploads/1/3/1/8/131850910/22VE6WDZDM56YXO2RFNVS4AQ.png"/>
        <img className='absolute w-85 -right-50 -top-10' src="https://static.vecteezy.com/system/resources/thumbnails/036/159/551/small/ai-generated-coffee-beans-isolated-on-transparent-background-free-png.png"/>
      </div>
      <div id="caliente" className='scroll-mt-14'/>
      <Products title={"Caliente"} products={products}/>
      <div style={{backgroundColor:"#875539"}} className='h-32 mt-8 relative flex items-center justify-center'>
        <p className='max-w-1/2 text-center text-2xl italic text-white'>"Cada taza cuenta una historia."</p>
        <img className='absolute w-70 rotate-20 -left-24 -top-18' src="https://www.starbucksathome.com/es/sites/default/files/2024-06/Recipe%20Refresh_Iced%20Macchiato_1842x1542_CS.png"/>
        <img className='absolute w-48 -right-15 -top-15 -rotate-20' src="https://www.peets.com/cdn/shop/products/cold-brew-iced-coffee.png?v=1597269387"/>
      </div>
      <div id="cold-brew" className='scroll-mt-14'/>
      <Products title={"Cold Brew"} products={products}/>
      <div style={{backgroundColor:"#875539"}} className='h-32 mt-8 relative flex items-center justify-center'>
        <p className='max-w-1/2 text-center text-2xl italic text-white'>"Hecho con calma, servido con cariño."</p>
        <img className='absolute w-50 rotate-20 -left-18 -top-8' src="https://www.nescafe.com/mx/sites/default/files/2023-07/Nes_Web3_Article_Header_Frappe_1448x1240.png"/>
        <img className='absolute w-48 -right-18 -top-10 -rotate-20' src="https://bk-latam-prod.s3.amazonaws.com/sites/burgerking.latam/files/BK_Web_FRAPPECAPUCCINO_500X540px.png"/>
      </div>
      <div id="frappes" className='scroll-mt-14'/>
      <Products title={"Frappes"} products={products}/>
      <div style={{backgroundColor:"#875539"}} className='h-32 mt-8 relative flex items-center justify-center'>
        <p className='max-w-1/2 text-center text-2xl italic text-white'>"Un buen día empieza con café."</p>
        <img className='absolute w-62 rotate-20 -left-22 -top-15' src="https://static.vecteezy.com/system/resources/thumbnails/051/803/187/small/white-ceramic-cup-of-milk-tea-on-transparent-background-free-png.png"/>
        <img className='absolute w-44 -right-18 -top-8 -rotate-20' src="https://www.alivitpharm.com/wp-content/uploads/2023/02/green-tea.png"/>
      </div>
      <div id="te" className='scroll-mt-14'/>
      <Products title={"Te"} products={products}/>
      <div style={{backgroundColor:"#875539"}} className='h-32 mt-8 relative flex items-center justify-center'>
        <p className='max-w-1/2 text-center text-2xl italic text-white'>"Tu momento favorito del día."</p>
        <img className='absolute w-44 rotate-20 -left-20 -top-10' src="https://drive.caffenio.com/wp-content/uploads/sites/2/2026/01/Sandwich-doble.webp"/>
        <img className='absolute w-52 -right-22 -top-8 rotate-40' src="https://www.bridor.com/medias/sys_master/images/h25/h66/8919908483102/515Wx515H_SourceHD_IMAGE-Packshot-VIENNOISERIE-ECLATTERROIR-Croissant_Courbe_EDT_35022-35022/515Wx515H-SourceHD-IMAGE-Packshot-VIENNOISERIE-ECLATTERROIR-Croissant-Courbe-EDT-35022-35022.png"/>
      </div>
      <div id="snacks" className='scroll-mt-14'/>
      <Products title={"Snacks"} products={products}/>
      <div style={{backgroundColor:"#875539"}} className='h-32 mt-8 relative flex items-center justify-center'>
        <p className='max-w-1/2 text-center text-2xl italic text-white'>"Aromas que acompañan conversaciones."</p>
        <img className='absolute w-44 rotate-20 -left-15 -top-10' src="https://static.wixstatic.com/media/ee6e5b_8c891aef6d9c408aaab12ed60b128ee8~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee6e5b_8c891aef6d9c408aaab12ed60b128ee8~mv2.png"/>
        <img className='absolute w-36 -right-10  rotate-40' src="https://crumbl.video/cdn-cgi/image/width=1920,format=auto,quality=80/https://crumbl.video/8819fb0a-0311-4ab7-a622-408fb49607d2_ClassicFudgeBrownie_FlyingAerial_TECH.png"/>
      </div>
      <div id="postres" className='scroll-mt-14'/>
      <Products title={"Postres"} products={products}/>
      <div style={{backgroundColor:"#875539"}} className='h-32 mt-8 relative flex items-center justify-center'>
        <p className='max-w-1/2 text-center text-2xl italic text-white'>"Café, conexión y buenos momentos."</p>
        <img className='absolute w-60 rotate-20 -left-20 -top-5' src="https://media.wawa.com/i/wawa/_WO_2402_DS_Crispy_Chicken_BLT_Salad-294-1?fmt=webp&qlt=75&strip=true&w=768"/>
        <img className='absolute w-60 -right-20  -rotate-38' src="https://media.wawa.com/i/wawa/_WO_2402_DS_Garlic_Parmesan_Avocado_Toast-332-1"/>
      </div>
      <div id="vegano" className='scroll-mt-14'/>
      <Products title={"Vegano"} products={products}/>
      <div onClick={()=>setModalOpen(true)} className='hover:opacity-100 cursor-pointer fixed bottom-8 bg-white right-4 h-15 w-15 rounded-full opacity-80 flex items-center justify-center text-2xl font-bold'>?</div>
      <div onClick={()=>setWifiOpen(true)} className='hover:opacity-100 cursor-pointer fixed bottom-24 p-4 bg-white right-4 h-15 w-15 rounded-full opacity-80 flex items-center justify-center text-2xl font-bold'>
        <Image src={wifilogo} alt={'Wifi'}/>
      </div>
     <InfoModal open={modalOpen} setOpen={setModalOpen}/>
      <WifiModal open={wifiOpen} setOpen={setWifiOpen}/>
    </div>
  )
}

export default HomePage