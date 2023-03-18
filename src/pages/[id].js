import React from 'react'
import { useRouter } from 'next/router'
import data from '../dummy.js'


export default function DynamicR() {
    const router = useRouter()
   const itemid= router.query.id

  return (
    <div className='pt-[15em]'>Dynamic{itemid}</div>
  )
}
