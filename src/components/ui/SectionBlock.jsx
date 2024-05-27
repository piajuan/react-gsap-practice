import React, { useRef } from 'react'
import SectionTitle from './SectionTitle'
import SectionCircle from './SectionCircle';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SectionBlock({title, circleSvg, variant, children}) {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.animate-section',
            start: 'top 80%',
          }
        })
        .from('.animate-section', { opacity: 0, scale: 0.95, duration: 0.4})
        .from('.animate-section-text', {x: 20, opacity: 0, stagger: 0.2, ease: 'back'})
    },
    { scope: container }
  )

  return (
      <div ref={container}>
        <div className='animate-section h-full bg-neutral-900 p-12 rounded-[5rem]'>
          <SectionTitle variant={variant}>{title}</SectionTitle>
            {children}
          <SectionCircle svg={circleSvg} variant={variant}/>
          </div>
      </div>
  )
  
}
