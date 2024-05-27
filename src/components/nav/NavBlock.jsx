import React from 'react'
import Marquee from 'react-fast-marquee'
import { Icon } from 'lucide-react'


export default function NavBlock({styles, mainTitle, cta, ctaIcon, desc}) {
  return (
    <div className={`nav__block ${styles}`}>
      <div className='group'>
            <h3 className='text-2xl font-medium'>{mainTitle}</h3>
            <div className='flex justify-between text-lg'>
              <span>{cta}</span> 
              <Icon iconNode={ctaIcon}/>
            </div>
            <Marquee
              className='nav__desc'
              autoFill='true'
              speed='120'
            >
              {desc}
            </Marquee>
        </div>
    </div>
  )
}
