import Image from "next/image"

function CategoryMenuCard({src,title,reff}:{src:any,title:string,reff:string}) {
  return (
    <div onClick={()=>{window.location.href = "#"+reff}} className='hover:scale-105 w-full cursor-pointer transition-all shadow-lg rounded-lg bg-white p-4 flex flex-col items-center justify-center gap-2'>
        <Image src={src} alt={title} className='rounded-lg w-full'/>
        <h2 className="font-semibold text-xl" style={{color:"#49241c"}}>{title}</h2>
    </div>
  )
}

export default CategoryMenuCard