import ItemComponent from '@/components/reusables/ItemComponent.jsx'
import React from 'react'
import data from '../dummy.js'

export default function Items() {

    console.log(data)

    const details = data.map((item,index)=>{
        return <ItemComponent key={index} {...item} id={index}/>
    })




  return (
<<<<<<< HEAD
<div className=' mt-[2em] flex flex-col gap-8 p-2 font-[Poppins]' >
=======
<div className=' mt-[2em] flex flex-col gap-8 p-5' >
>>>>>>> 19c6f7b1a66ab1a3cb11eb3d430762a0f40a6305
    <p className=' md:text-3xl'>Our Products</p>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  pt-4 px-6 py-[2em] items-center'>
        {details}





    </div>
    </div>
  )
}
