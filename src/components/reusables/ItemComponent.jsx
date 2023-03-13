import React from 'react'
import CardContent from "@mui/material/CardContent";
import { FaShoppingBag} from 'react-icons/fa';


export default function ItemComponent({name,img,price}) {

    function addhandler(){

    }
  return (
    
          <div className=" w-full  h-[300px] md:h-[350px] bg-[#f1f2f1] " >
        <CardContent>
          <div className="abosolute">
            <img src={`../images2/${img}`} className=" w-full h-[200px] md:h-[250px] object-cover rounded-[1em]" alt={name}/>
        
          </div>
 

  
<div className=" pt-[1em] flex justify-between">
  <div>
          <div className=" text-xl ite font-medium  uppercase tracking-widest">{name}</div>
          < div className="">GHc {price}</div>
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
