import React from 'react'
import Marquee from 'react-fast-marquee'
import { team } from '../constants'
import InfoCard from './about/InfoCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const middle = Math.floor(team.length / 2);
  const firstHalf = team.slice(0, middle);
  const secondHalf = team.slice(middle);

  useGSAP(() => {
    gsap.from('.animate-upper-row', {
      scrollTrigger: {
        trigger: '.animate-about-team',
        scrub: true,
      },
      x: '15%'
    })

    gsap.from('.animate-lower-row', {
      scrollTrigger: {
        trigger: '.animate-about-team',
        scrub: true,
      },
      x: '-15%'
    })
  })

  return (
    <section className='p-6'>
        <div className='rounded-[5rem] bg-neutral-900 py-12 overflow-hidden'>
            <Marquee className='text-[8rem] text-pink-300' autoFill='true' speed='160'> Who Are The Craftsmen? </Marquee>
            <p className='max-w-[660px] text-pink-300 text-2xl font-thin md:py-20 md:px-24'>
                We are web developers with numerous years of experience working with Craft CMS on divergent projects for (international) companies in both Europe and the United States.
            </p>
            <div className='animate-about-team flex flex-col rotate-[-25deg]'>
                <div className='animate-upper-row flex gap-4 my-2'> { firstHalf.map((member) => <InfoCard info={member} className='rotate-[25deg]'/> )} </div>
                <div className='animate-lower-row flex gap-4 my-2'> { secondHalf.map((member) => <InfoCard info={member} className='rotate-[25deg]'/> )} </div>
            </div>
        </div>
    </section>
  )
}
 