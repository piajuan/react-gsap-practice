import React from 'react'
import NavBlock from './NavBlock';
import { navItems } from '../../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP);

export default function NavGrid() {
  useGSAP(() => {
    gsap.from('.nav__block', {
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      stagger: 0.1,
    })
  });

  return (
    <div className='nav__grid'>
        {
          navItems.map(item => {
            return (
                <NavBlock
                  key={item.cta}
                  styles={item.isMain ? 'nav__block--main' : ''}
                  mainTitle={item.mainTitle}
                  cta={item.cta}
                  ctaIcon={item.ctaIcon}
                  desc={item.desc}
                />
            )
          })
        }
    </div>
  )
}
