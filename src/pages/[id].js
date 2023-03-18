import React from 'react'
import { useRouter } from 'next/router'
import data from '../components/page-sections/dummy.js'


export default function DynamicR() {
    const router = useRouter()
   const itemid= router.query.id
   console.log(data[itemid])

   let prop= data[itemid]

  return (
    <div className='pt-[16em] px-5'>
  
    <div className=' mb-5'>
      <img src={`../images2/${prop.img}`} className='box w-full'/>
      </div>
<div  className=' flex flex-col gap-3'>
      <div className=' text-3xl font-bold'>{prop.name}</div>

      <div>{prop.description}</div>
      </div>

      <div className='w-full'></div>    
    </div>
  )
}
