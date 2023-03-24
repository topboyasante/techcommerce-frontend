import { cartActions } from '@/reduc/Cart'
import React from 'react'
import { useDispatch } from 'react-redux'
import {BiMinus,BiPlus} from 'react-icons/bi'

export default function Cartcomponent({id,name,price,quantity,img}) {
    const dispatch = useDispatch()

    const addButton= ()=>{
        dispatch(cartActions.Add({id,name,img,price}))
    }

    
    const delet = ()=>{
        dispatch(cartActions.delete(id))
    }
  

    return (
  
        <div className=' w-full p-1 px-2 rounded-lg flex items-center bg-[#e0e0e0] gap-2 scroll'>
        <img src={`../images2/${img}`} className='w-[70px] h-[70px] object-cover rounded-[20px] scroll'/>
        <div className=' flex flex-col gap-2'>
         <p className=' text-base font-medium text-black'>
             {name}
         </p>
         <p className='text-sm block text-black font-semibold'>
             Ghc {price}
         </p>
         </div>
         <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
             <button className=' border ' onClick={addButton}>
    
                <BiPlus size={20} className=' text-black'/> 
    
             </button>
             <p className='w-5 h-5 pl-1 rounded-sm flex text-black items-center'>{quantity}</p>
             <button className='border' onClick={delet}>
                 <BiMinus size={20} className=' text-black'/>
             </button>
         </div>
         </div>
    
        
    
    
        
      )
}
