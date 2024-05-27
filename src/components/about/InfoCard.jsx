import React from 'react'

export default function InfoCard({info, className}) {
  return (
    <div
        key={info.name}
        className={`relative w-52 h-52 rounded-full border-2 solid border-pink-300 overflow-hidden shrink-0 ${className}`}
    >
        <img src={info.thumbnail} alt={info.name} className='absolute top-0 left-0 w-full h-full' />
        <div className='absolute top-0 left-0 w-full h-full p-4 flex flex-col items-center justify-end text-center text-pink-200'>
            <span className='uppercase text-shadow-pink text-xs'>{info.role}</span>
            <span className='text-shadow-pink'>{info.name}</span>
        </div>
    </div>
  )
}
