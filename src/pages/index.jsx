import Hero from '@/components/page-sections/home/Hero'
import Items from '@/components/page-sections/home/items'
import store from '@/reduc/store'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'

function index() {
  return (

    <>
      < Head>
        <title>TechCommerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
        
        
        
      </Head>
      <main>
        <Hero/>



        <Items/>
        
      </main>
    </>

  )
}

export default index