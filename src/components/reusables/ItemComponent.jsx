import React from 'react'
import CardContent from "@mui/material/CardContent";
import { FaShoppingBag} from 'react-icons/fa';


export default function ItemComponent({name,img,price}) {

    function addhandler(){

    }
  return (
    
          <div className=" w-full  h-[300px] md:h-[300px] p" >
        <CardContent>
          <div className="abosolute">
            <img src={`../images2/${img}`} className=" w-full h-[200px] object-cover rounded-[3em]" alt={name}/>
        
          </div>
 

  
<div className=" pt-[1em] flex justify-between">
  <div>
          <div className=" text-xl ite font-medium font-[Oswald]">{name}</div>
          < div className="font-[Roboto]">GHc {price}</div>
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
