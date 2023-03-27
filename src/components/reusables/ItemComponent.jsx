import React from 'react'
import Link from 'next/link'
import CardContent from "@mui/material/CardContent";
import { FaShoppingBag} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/reduc/Cart';



export default function ItemComponent({name,img,price,id}) {
const dispatch = useDispatch();

    function addhandler(){
        dispatch(cartActions.Add({id,name,img,price}))

    }
  return (
    
          <div className=" w-full  h-[300px] md:h-[350px] bg-[#f3f5f3] rounded-xl " data-aos="fade-in"  >
        <CardContent>
          <div className="abosolute">
            <img src={`../images2/${img}`} className=" w-full h-[200px] md:h-[250px] object-cover rounded-[1em]" alt={name}/>
        
          </div>
 

  
<div className=" pt-[1em] flex justify-between">
  <div>
  <Link href={`/products/${id}`}>
          <div className=" lg:text-xl font-medium  uppercase tracking-widest">{name}</div>
          </Link>
            <div className="">GHc {price}</div>
          </div>
          <button onClick={addhandler}>
            <FaShoppingBag size={22}/>
          </button>
          </div>
          </CardContent>
        <div>
    </div>
    </div>
  )
}
