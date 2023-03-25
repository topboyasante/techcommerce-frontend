import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

export default function Receipt() {
    const cartList= useSelector((state)=> state.cart.Itemslist);
    const dispatch = useDispatch();

  return (
    <div className=' p-3 flex flex-col items-center w-full h-screen justify-between gap-3'>
    <div className=' p-3 flex flex-col items-center'>
    <p className=' text-3xl font-[Oswald]'>Your Order has been placed</p>
    <p className='text-lg pb-[1em]'>Thank You!</p>

    <div className='w-full border p-2 md:w-[60%] lg:w-[50%]  '>
        <p className='text-center text-xl font-semibold md:text-2xl'>Receipt</p>
        
<div className=' w-full p-3 border-b border-black my-2 lg:my-1'></div>

        <table className="table-fixed w-full text-center gap-2">
<thead>
<tr className='font-[Oswald] font-semibold'>
  <th>Item</th>
  <th>Quantity</th>
  <th>price</th>
</tr>
</thead>
{ cartList.map((item)=>{
return (<tbody>
<tr>
  <td className='text-left'>{item.name}</td>
  <td>{item.quantity}</td>
  <td>Ghc {item.price}</td>
</tr>

<div className='  border-b border-white my-2 lg:my-1'></div>

</tbody>)})}
</table>


<div className=' w-full p-3 border-b border-black my-2 lg:my-1'></div>
<div className='w-full flex justify-between font-[Oswald]'>
<p>Total</p>
<p className='text-lg font-semibold'>Ghc{total}</p>
</div>







    </div>
    </div>

    <div className='pb-2'>
        <Button onClick={ Finalr} variant='contained'>
            Back to Shop
        </Button>
    </div>








</div>
  )
}
