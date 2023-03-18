import React, { useState } from 'react'
import { useRouter } from 'next/router'
import data from '../components/page-sections/dummy.js'
import { useDispatch, useSelector } from 'react-redux'
import {BiMinus,BiPlus} from 'react-icons/bi'
import { cartActions } from '@/reduc/Cart.jsx'


export default function DynamicR() {
    const router = useRouter()
   const itemid= router.query.id

   console.log(data[itemid])

   typeof(itemid)
 


   let prop= data[itemid]

   const id=  parseInt(itemid);
   const name= prop.name;
   const price = prop.price;

   console.log(id);

   console.log(itemid)

   let [count,setcount]= useState(0);

   

const dispatch= useDispatch()

   const additem=()=>{
    
    dispatch(cartActions.Add({
      id,name,price
      
    }))
   
  
   }

    
    const itemlist = useSelector((state)=> state.cart.Itemslist);

    const value= itemlist.filter((item)=>{
return item.id === id
    });

    console.log(value)

console.log(itemlist)


  return (
    <div className='pt-[16em] px-5 w-full'>
  
    <div className=' mb-5'>
      <img src={`../images2/${prop.img}`} className='box w-full'/>
      </div>
<div  className=' flex flex-col gap-3'>
      <div className=' text-3xl font-bold'>{prop.name}</div>

      <div>{prop.description}</div>
      </div>

      <div className=' w-full border-b border-black my-2 lg:my-1'></div>

      <div>
        <p className=' font-bold text-xl my-[1em]'>Ghc <span>{prop.price}</span></p>

        <div className='bord w-[8em] h-12 rounded-[2em]  flex justify-center items-center gap-4' >
          <button>
        <BiPlus size={20} className='' onClick={additem}/> 
        </button>
          <p className='text-2xl'>{value[0].quantity}</p>
          <button>
          <BiMinus size={20} className=''/>
          </button>

        </div>
        </div>
    </div>
  )
}
