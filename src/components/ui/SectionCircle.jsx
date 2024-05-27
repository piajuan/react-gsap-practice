import React, { Component } from 'react'
import { MoveDown } from 'lucide-react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import clsx from 'clsx';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SectionCircle({svg, variant}) {
    useGSAP(
        () => {
          gsap.to('.animate-service-circle', {
            scrollTrigger: {
              trigger: '.animate-service-circle',
              scrub: true,
            },
            rotate: 360,
            duration: 6,
          })
        },
      )

    return (
        <div className='absolute bottom-20 right-16'>
            <img className='animate-service-circle' src={svg} role="presentational" />
            <MoveDown className={
                clsx('absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                    variant === 'indigo' && 'text-indigo-400',
                    variant === 'yellow' && 'text-yellow-200'
                )
            }/>
        </div>
    )
}
