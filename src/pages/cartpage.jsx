import Cartcomponent from '@/components/reusables/cartcomponent';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function Cartpage() {

    const cartList = useSelector((state)=> state.cart.Itemslist);
    const data = cartList.map((item)=>{
      return <Cartcomponent key={item.id} {...item} />

    });
    
    //        <img src={empty} className=' h-[150px]' alt='empty cart'/>
    

    const auth = cartList === 0
  return (
    <div className='w-full h-full flex  justify-center items-center p-5'>
      
      <div className='bord w-full min-h-[70vh] mt-[16em] '> 
      <div className='w-full flex flex-col '>
     <p className='text-3xl font-semibold'> Your Cart</p>


     <div className=' w-full h-full   rounded-t-[2rem] flex flex-col'>
        <div className='bord w-full h-[340px] md:h-[500px] lg:h-[300px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll no-scrollbar'>
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
</div>
    </div>
  )
}
