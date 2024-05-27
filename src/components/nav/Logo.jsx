import React from 'react'
import { logo } from '../../assets'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Logo({className}) {
  useGSAP(() => {
    // gsap.from('.animate-logo', {
    //   opacity: 0,
    //   y: -40,
    //   delay: 0.7,
    // });

    gsap.to('.animate-logo', {
      scrollTrigger: {
        trigger: '.animate-logo',
        start: 'top 10%',
        // markers: true,
        scrub: 1,
      },
      scale: 0.7,
      opacity: 0
    })
  })
  return (
    <nav className={`flex justify-center items-center py-20 ${className}`}>
        <img className='animate-logo w-full max-w-[300px] object-contain' src={logo} alt="logo" />
    </nav>
  )
}
