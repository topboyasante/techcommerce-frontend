import React, { useState } from 'react'
import { useRouter } from 'next/router'
import data from '../components/page-sections/dummy.js'
import { useDispatch, useSelector } from 'react-redux'
import {BiMinus,BiPlus} from 'react-icons/bi'
import { cartActions } from '@/reduc/Cart.jsx'
import {FaTruck} from 'react-icons/fa';
import {FaStar} from 'react-icons/fa'

const Stars = ({ count }) => {
  const stars = Array.from({ length: count }, (_, index) => (
    <FaStar key={index} className='text-[#3ab53a] ' />
  ));
  return <div className='flex pt-1 '>{stars}</div>;
};

export default function DynamicR() {
    const router = useRouter()
   const itemid= router.query.id

   console.log(data[itemid])

   typeof(itemid)
 


   let prop= data[itemid]

   const id=  parseInt(itemid);
   const name= prop.name;
   const price = prop.price;
   const star = prop.star;

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

const acquantity = value.length === 0 ? 0 :value[0].quantity;








  return (
    <div className='w-full h-full p-5 bord flex justify-center items-center'>
      <div className='w-full h-[100vh]  mt-[15em] flex flex-col gap-6'>

      <div className=' bord w-full  lg:w-[50vw] h-[]'>
      <img src={`../images2/${prop.img}`} className='box w-full h-full object-contain'/>
      </div>

      <div className=' w-full h-full'>
        <div>
          <p className=' text-3xl font-bold'>{prop.name}</p>
          <p className=''>{prop.description}</p>

        
     <div className=' pt-[1em]'>
      
     <Stars count={star} />
      </div>
      
         


       

        </div>

        <div className=' w-full border-b border-black my-2 lg:my-1'></div>


        <div>
          <p className='flex gap-2 text-2xl font-semibold'>GHc<span>{price}.00</span></p>
          </div>


      </div>
       

      </div>

    </div>
  )
}
