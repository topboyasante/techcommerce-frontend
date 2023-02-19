import Hero from '@/components/page-sections/home/Hero'
import Head from 'next/head'
import React from 'react'

function index() {
  return (
    <>
      < Head>
        <title>TechCommerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero/>
      </main>
    </>
  )
}

export default index