import Cartcomponent from '@/components/reusables/cartcomponent';
import BasicModal from '@/components/reusables/modal';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const empty =  '/images2/cart.png'


export default function Cartpage() {

    const cartList = useSelector((state)=> state.cart.Itemslist);
    const data = cartList.map((item)=>{
      return <Cartcomponent key={item.id} {...item} />

    });



  let total= 0;
  
  cartList.forEach((item)=>{
    total += item.totalprice
  })
  const delivery= 20;
  const finaltotal = total + delivery

    
    //        <img src={empty} className=' h-[150px]' alt='empty cart'/>
    

    const auth = cartList.length === 0;
  return (
    <div className='  w-full h-full flex lg:h-screen justify-center items-center '>
      
      <div className=' w-full min-h-[70vh] mt-[16em] lg:mt-[2em] lg:flex lg:gap-0 lg:px-[5em]   '> 
      <div className='w-full flex flex-col gap-2 px-5 lg:px-0 pb-3 lg:pb-0'>
     <p className='text-3xl font-semibold'> Your Cart</p>


     <div className=' w-full h-full   rounded-t-[2rem] flex flex-col lg:w-[55vw] xl:w-[60vw] '>
        <div className=' bg-[#f0f0f0] w-full h-[340px] md:h-[500px]  lg:max-h-[20rem] xl:min-h-full md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll no-scrollbar'>
        {!auth && <>  
       {data}
       </> }
       {
        auth && (
            <div className=' flex flex-col items-center justify-evenly w-full h-full'>
               <img src={empty} className=' h-[150px]' alt='empty cart'/>
             
        <p className='text-black text-xl'>Empty Cart</p>
        </div>
        )
       }
   

                

    </div>

    
    
   </div>
</div>
<div className='h-full'>
<div className=' w-full lg:min-w-[25vw] lg:min-h-[55vh]  lg:px-4 xl:min-h-[70vh] xl:px-5  lg:rounded-[0] lg:mt-[2.5em]   min-h-[35vh] md:min-h-[43vh] flex-1 bg-[#353535] rounded-t-[2rem] flex flex-col items-center justify-evenly px-8  py-2 text-white'>
      <div className='w-full lg:w-full  flex items-center justify-between'>
      
        <p className=' text-lg'>Subtotal</p>
        <p className=' text-lg'>Ghc {total}.00</p>

        

      </div>
      <div className='w-full flex items-center justify-between'>
      
      <p className=' text-lg'>Delivery</p>
      <p className=' text-lg'>Ghc{delivery}.00</p>

      

    </div>

 

    <div className=' w-full border-b border-white my-2 lg:my-1'></div>
    <div className='w-full flex items-center justify-between'>
      
      <p className=' text-lg'>Total</p>
      <p className=' text-lg'>Ghc {finaltotal}.00</p>

    </div>
<div className='w-full h-full'>
  <BasicModal/>
</div>


 


    </div>
    </div>


    </div>
    </div>
  )
}
