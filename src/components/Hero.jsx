import React, { useState } from 'react'
import Logo from './nav/Logo'
import NavGrid from './nav/NavGrid'

export default function Hero() {

  return (
    <section className='min-h-screen flex flex-col p-6'>
        <Logo className='flex-auto'/>
        <NavGrid/>
    </section>
  )
}
