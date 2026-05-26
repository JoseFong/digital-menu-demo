"use client"

import tagsinit from "@/libs/tags.json"
import { Tag } from "@/libs/types"
import { useEffect, useState } from "react"
import TagCircle from "./TagCircle"

function TagsCard({ids}:{ids:number[]}) {

    const [tags,setTags] = useState<Tag[]>([])

    useEffect(()=>{
        let aux = tagsinit.filter((t:Tag)=>ids.includes(t.id))
        setTags(aux)
    },[ids])

    return (
    <div className="flex flex-row gap-1">
        {tags.map((t:Tag)=>(
            <TagCircle tag={t} key={t.id}/>
        ))}
    </div>
  )
}

export default TagsCard