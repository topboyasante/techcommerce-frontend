import ItemComponent from '@/components/reusables/ItemComponent.jsx'
import React from 'react'
import data from '../dummy.js'

export default function Items() {

    console.log(data)

    const details = data.map((item,index)=>{
        return <ItemComponent key={index} {...item}/>
    })




  return (


    <div className='bord grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  pt-4 px-6 py-[2em] items-center'>
        {details}





    </div>
  )
}
