import React from 'react'
import clsx from 'clsx'

export default function SectionText({children, variant}) {
  return (
    <span className={
        clsx('animate-section-text text-8xl',
            variant === 'yellow' && 'text-yellow-200',
            variant === 'indigo' && 'text-indigo-400'
        )}
    >
        {children}
    </span>
  )
}
