import React from 'react'

function TopMenuTwo() {
    function goToSection(str:string){
        window.location.href = "#"+str
    }

  return (
    <div className='bg-white w-full shadow-xl flex items-center text-sm justify-center fixed z-50 p-4 flex-row gap-2'>
        <button onClick={()=>goToSection("caliente")}>Caliente</button>
        <button onClick={()=>goToSection("cold-brew")}>Cold Brew</button>
        <button onClick={()=>goToSection("frappes")}>Frappes</button>
        <button onClick={()=>goToSection("te")}>Té</button>
        <button onClick={()=>goToSection("snacks")}>Snacks</button>
        <button onClick={()=>goToSection("postres")}>Postres</button>
        <button onClick={()=>goToSection("vegano")}>Vegano</button>
      </div>
  )
}

export default TopMenuTwo