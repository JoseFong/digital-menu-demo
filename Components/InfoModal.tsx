import Modal from './Modal'
import BigTagCircle from './BigTagCircle'

import tags from "@/libs/tags.json"
import { Tag } from '@/libs/types'

function InfoModal({open,setOpen}:{open:any,setOpen:any}) {
  return (
    <Modal setOpen={setOpen} open={open}>
        <div className='flex flex-col gap-2 '>
            {tags.map((t:Tag)=>(
                <div key={t.id} className='flex flex-row gap-3 items-center'>
                    <BigTagCircle tag={t}/>
                    <p className='text-xl'>{t.name}</p>
                </div>
            ))}
        </div>
    </Modal>
  )
}

export default InfoModal