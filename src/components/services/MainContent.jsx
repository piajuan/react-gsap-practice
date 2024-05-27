import React from 'react'
import { servicesItems } from '../../constants'
import { Icon } from 'lucide-react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MainContent() {
    useGSAP(() => {
        gsap.from('.animate-service-item-left', {
            scrollTrigger: {
                trigger: '.animate-service-item-left',
                start: 'top 80%',
                scrub: true,
                markers: true,
            },
            x: '40%',
            stagger: 1,
            duration: 2,
            ease: 'sine.out',
        })
        gsap.from('.animate-service-item-right', {
            scrollTrigger: {
                trigger: '.animate-service-item-right',
                start: 'top 80%',
                scrub: true,
            },
            x: '-40%',
            stagger: 1,
            duration: 2,
            ease: 'sine.out',
        })
    });
    return (
        <div className='flex flex-col gap-2 py-4'>
            {servicesItems.map((item) => {
                return (
                    <div className='animate-service-row flex' key={item.title}>
                        <div className="
                            animate-service-item-left
                            relative flex items-center gap-16 md:w-1/2 rounded-l-[5rem] 
                            p-14 bg-neutral-900 [&_*]:text-indigo-400 
                            after:content-[''] after:absolute after:w-16 after:h-full after:-right-16 after:bg-inherit after:-z-10
                        ">
                            { item.isCustomIcon ? <img className="w-[30px] h-[30px] object-contain" src={item.icon}/> : <Icon size={30} iconNode={item.icon}/> }
                            <div className='flex flex-col gap-12 md:w-4/5'>
                                <h3 className='font-medium text-2xl'>{item.title}</h3>
                                <p className='text-lg'>{item.desc}</p>
                            </div>
                        </div>
                        <div className='
                            animate-service-item-right
                            md:w-1/2 rounded-[5rem] bg-indigo-400 flex justify-center items-center
                        '>
                            <p className='text-neutral-900 text-xl text-center'>
                                {item.tagline.small}
                                {item.tagline.withImg ? 
                                    <img className="my-5 max-h-[40px]" src={item.tagline.large} /> : 
                                    <span className='block my-3 text-5xl font-medium italic'>{item.tagline.large}</span>
                                }
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
