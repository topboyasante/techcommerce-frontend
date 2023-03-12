import Image from 'next/image'
import React from 'react'
import HeroImg from '../../images/patternpad.svg'


function Hero() {


  return (
    <main className='  w-full lg:h-[40vh] pt-[14rem] bg-[#f3f4f4] md:pt-[17vh] lg:pt-[10vh] font-[Roboto]'>
        <section className='max-w-[1600px] mx-auto h-full rounded flex flex-col md:flex-row justify-between items-center'>
                <section className='p-5 lg
                :w-[40%] flex flex-col justify-center h-full place-items-center gap-3'>
                    <p className='lg:text-3xl'>Get Up to 50% off on selected items</p>
                    <button className='bg-green-600 text-white rounded-3xl px-4 py-2'>
                        <p>See Deals</p>
                    </button>
                </section>
                <Image src={HeroImg} width={500} height={500} alt={`ea`} className='lg:w-[60%] h-full rounded-r'/>
        </section>
    </main>
  )
}

export default Hero