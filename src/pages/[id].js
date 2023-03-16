import React from 'react'
import { useRouter } from 'next/router'

export default function DynamicR() {
    const router = useRouter()
   const itemid= router.query.id
  return (
    <div className='pt-[20vh]'>Dynamic{itemid}</div>
  )
}
