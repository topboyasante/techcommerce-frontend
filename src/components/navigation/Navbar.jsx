import Link from 'next/link'
import React from 'react'
import SearchBar from '../reusables/SearchBar'

import {AiOutlineUser} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import CustomizedBadges from '../reusables/cartlogo'
import { useRouter } from 'next/router'


function Navbar() {
 // {<BsCart2 size={30}/>}



 

  const shopLinks =[
    {
      id:0,
      name:'About'
    },
    {
      id:1,
      name:'Deals'
    },
    {
      id:2,
      name:'Help'
    },
  ]

const router = useRouter()
const gotocart=()=>{
  router.push('/cartpage')

}


  
  return (
    <nav className='shadow p-5 fixed  w-full gap-3 lg:gap-0 lg:h-[10vh] bg-white flex flex-col lg:flex-row justify-center lg:justify-between items-center border z-[9999]'>
      {/* Logo */}
      <section className='lg:w-[20%]'>
      <Link href="/">
  <div className="bounce-top text-2xl font-bold">
    <span className="text-green-600">tech</span>commerce
  </div>
</Link>
      </section>
      {/* Shop */}
      <section className='flex flex-col lg:flex-row gap-3 lg:gap-8 justify-center items-center lg:w-[60%]'>
         <section className='flex gap-8'>
          {
            shopLinks.map((link)=>{
              return(
                <Link href={`#`} key={link.id}>
                  <p>{link.name}</p>
                </Link>
              )
            })
          }
         </section>

         {/* Search Bar */}
         <SearchBar/>
      </section>
      {/* Account and Cart */}
      <section className='lg:w-[20%] flex justify-center items-center gap-10'>
         <div className='flex items-center gap-3'>
            <AiOutlineUser size={30}/>
            <p>Account</p>
         </div>

         <div className='flex items-center gap-3 ' onClick={gotocart}>
          <CustomizedBadges/>
            <p>Cart</p>
         </div>
   
      </section>
    </nav>
  )
}

export default Navbar