import React, { useState } from 'react'
import { useRouter } from 'next/router'
import data from '../components/page-sections/dummy.js'
import { useDispatch, useSelector } from 'react-redux'
import {BiMinus,BiPlus} from 'react-icons/bi'
import { cartActions } from '@/reduc/Cart.jsx'
import {FaTruck} from 'react-icons/fa'


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

   const deleteitem = ()=>{
    dispatch(cartActions.delete(
     id))
   }

   
 
    
    const itemlist = useSelector((state)=> state.cart.Itemslist);

    const value= itemlist.filter((item)=>{
return item.id === id
    });

    console.log(value)

console.log(itemlist)

const acquantity = value.length === 0 ? 0 :value[0].quantity


  return (
    <div className='w-full h-full lg:h-screen flex flex-col justify-center items-center lg:px-[4em] '>
    <div className='bord pt-[17em] px-5 w-full flex flex-col lg:flex-row gap-4 pb-[1em] lg:py-[5em] lg:pt-[8em] min-h-full xl:pt-[10em xl:px-[6em]   '>
  
    <div className=' bord  lg:w-[50vw] h-full'>
      <img src={`../images2/${prop.img}`} className='box w-full h-full object-cover'/>
      </div>

      <div className=' flex flex-col gap-2 h-full'>

<div  className=' flex flex-col gap-3 w-full h-full'>
      <div className=' text-3xl font-bold'>{prop.name}</div>

      <div>{prop.description}</div>
      </div>

      <div className=' w-full border-b border-black my-2 lg:my-1'></div>

      <div>
        <p className=' font-bold text-xl my-[1em]'>Ghc <span>{prop.price}</span></p>

<div className='flex gap-3'> 
        <div className='bord w-[8em] h-12 rounded-[2em]  flex justify-center items-center gap-4' >
          <button>
        <BiPlus size={20} className='' onClick={additem}/> 
        </button>
          <p className='text-2xl font-bold'>{acquantity}</p>
          <button>
          <BiMinus size={20} className='' onClick={deleteitem}/>
          </button>

        </div>


        <div className='bord w-[8em] h-12 rounded-[2em]  flex justify-center items-center gap-4' >
          <button className=''>
            Open Cart
        

          </button>

        </div>

        </div>




        </div>

        <section className=' pt-[1em] '>
          <div className='boxer flex gap-2 p-2'>

            <FaTruck size={30} />

            <div>
              <p className='text-2xl font-bold'>Free Delivery</p>
             <p className=' underline text-sm'> Enter your Postal code for Delivery Availability</p>
            </div>


          </div>

        </section>
        </div>
    </div>
    </div>
  )
}
