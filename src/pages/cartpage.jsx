import Cartcomponent from '@/components/reusables/cartcomponent';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

export default function Cartpage() {

    const cartList = useSelector((state)=> state.cart.Itemslist);
    const data = cartList.map((item)=>{
      return <Cartcomponent key={item.id} {...item} />

    });

    const total= 12;
    const delivery= 23;
    const finaltotal = 100

    
    //        <img src={empty} className=' h-[150px]' alt='empty cart'/>
    

    const auth = cartList === 0
  return (
    <div className='w-full h-full flex  justify-center items-center '>
      
      <div className=' w-full min-h-[70vh] mt-[16em]  '> 
      <div className='w-full flex flex-col gap-2 px-5 pb-3'>
     <p className='text-3xl font-semibold'> Your Cart</p>


     <div className=' w-full h-full   rounded-t-[2rem] flex flex-col'>
        <div className=' bg-[#f0f0f0] w-full h-[340px] md:h-[500px] lg:h-[300px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll no-scrollbar'>
        {!auth && <>  
       {data}
       </> }
       {
        auth && (
            <div className=' flex flex-col items-center justify-evenly w-full h-full'>

        <p className='text-white text-xl'>Empty Cart</p>
        </div>
        )
       }
   

                

    </div>

    
    
   </div>
</div>
<div className=' w-full min-h-[35vh]  flex-1 bg-[#353535] rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2 text-white'>
      <div className='w-full flex items-center justify-between'>
      
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
{
  (    <button 
  

    className= ' font-bold w-full h-[50px] lg:h-[35px] text-[black] rounded-[30px] bg-[#ccff01] hover:bg-[white] '>
      Check Out

</button>)
}


 


    </div>


    </div>
    </div>
  )
}
