import React from 'react'
import { projects } from '../constants'
import { MoveUpRight } from 'lucide-react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Works() {
    useGSAP(()=> {
        gsap.from('.animate-projects-card', {
            scrollTrigger: {
                trigger: '.animate-projects-card',
                scrub: true,
            },
            scale: 0.7,
        })
    });

  return (
    <section className='p-6'>
        <ul className='grid grid-cols-2 gap-2'>
            {projects.map(project => {
                return (
                    <li 
                        key={project.id}
                        className={`animate-projects-card projects__card ${project.category === 'featured' && 'projects__card--featured'}`}
                    >
                        <a href="#" className='projects__card-content'>
                            <div className='flex justify-between'>
                                <span>{project.id}</span>
                                <h4 className='capitalize'>{project.category}</h4>
                            </div>
                            <img src={project.logo} alt={project.name} className='flex-auto h-[120px] w-auto max-w-[300px] object-contain mx-auto my-5 transition-all duration-300' />
                            <div className='flex justify-between'>
                                <span>{project.ctaText}</span>
                                <MoveUpRight />
                            </div>
                        </a>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}
