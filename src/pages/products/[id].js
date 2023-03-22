import React, { useState } from 'react'
import { useRouter } from 'next/router'
import data from '../../dummydata/dummy.js'
import { useDispatch, useSelector } from 'react-redux'
import {BiMinus,BiPlus} from 'react-icons/bi'
import { cartActions } from '@/reduc/Cart.jsx'
import {FaTruck} from 'react-icons/fa';
import {FaStar,FaBoxOpen} from 'react-icons/fa'

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
   const name= prop && prop.name;
   const price = prop && prop.price;
   const star = prop && prop.star;
   const img= prop && prop.img;

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
    <div className='w-full h-full lg:h-screen p-5  flex justify-center items-center md:p-[3em] '>
      <div className=' w-full min-h-[70vh] md:min-h-[75vh] lg:mt-[4em]  mt-[15em] md:mt-[16em] flex flex-col gap-6 xl:min-h-[55vh] xl:flex xl:justify-center xl:items-center  lg:flex-row'>

      <div className=' bord w-full  lg:w-[50vw] '>
      <img src={`../images2/${img}`} className='box w-full h-full object-contain lg:object-cover'/>
      </div>

      <div className=' w-full h-full lg:w-[50vw] lg:p-3 lg:flex lg:flex-col lg:justify-between  lg:h-full'>
        <div>
          <p className=' text-3xl font-bold'>{name}</p>
          <p className=''>{prop && prop.description}</p>

        
     <div className=' pt-[1em]'>
      
     <Stars count={star} />
      </div>
      
         


       

        </div>

        <div className=' w-full border-b border-black my-2 lg:my-1'></div>


        <div className='w-full h-full flex flex-col gap-5 md:gap-8 lg:gap-10 '>
          <p className='flex gap-2 text-2xl font-semibold'>GHc<span>{price}.00</span></p>

          <div className='flex gap-3'> 
        <div className=' w-[8em] h-12 rounded-[2em]  flex justify-center items-center gap-4 bg-[#e7e6e6]' >
          <button>
        <BiPlus size={20} className='' onClick={additem}/> 
        </button>
          <p className='text-2xl font-bold'>{acquantity}</p>
          <button>
          <BiMinus size={20} className='' onClick={deleteitem}/>
          </button>

        </div>

          </div>


          <section className=' pt-[1em] flex flex-col gap-3 md:flex-row' >
          <div className='boxer flex gap-4 p-2 md:w-[50%]'>

            <FaTruck size={30} className=' text-[goldenrod]' />

            <div>
              <p className='text-2xl font-bold'>Free Delivery</p>
             <p className=' underline text-sm'> Enter your Postal code for Delivery Availability</p>
            </div>


          </div>


            <div className='boxer flex gap-4 p-2 md:w-[50%]'>

            <FaBoxOpen size={30} className=' text-[goldenrod]' />

            <div>
              <p className='text-2xl font-bold'>Return Delivery</p>
             <p className='  text-sm'> Free 30days Delivery Returns. <span  className=' underline'>Details</span> </p>
            </div>


          </div>

        </section>


      </div>
       

      </div>

    </div>
    </div>
  )
}
