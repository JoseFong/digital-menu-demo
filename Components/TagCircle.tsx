import { Tag } from '@/libs/types'
import React from 'react'

import Image from "next/image"
import vegan from "@/assets/vegan.png"
import season from "@/assets/season.png"
import spicy from "@/assets/spicy.png"
import neww from "@/assets/new.png"
import popular from "@/assets/popular.png"
import sugar from "@/assets/sugar.png"

function TagCircle({tag}:{tag:Tag}) {
  return (
    <div className='bg-zinc-500 h-6 w-6 rounded-xl p-1' style={{backgroundColor:tag.color}}>
        <Image src={tag.icon==="vegan" ? vegan : (tag.icon==="season" ? season : (tag.icon==="spicy" ? spicy : (tag.icon==="neww" ? neww : (tag.icon==="popular" ? popular : sugar))))} alt={tag.icon}/>
    </div>
  )
}

export default TagCircle