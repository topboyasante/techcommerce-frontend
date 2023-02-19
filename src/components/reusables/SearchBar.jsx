import React from 'react'
import {BsSearch} from 'react-icons/bs'

function SearchBar() {
  return (
    <section className='flex items-center justify-between gap-5 border rounded-3xl px-4 py-2'>
        <input type="search" className='outline-none' placeholder='Search Product'/>
        <BsSearch/>
    </section>
  )
}

export default SearchBar