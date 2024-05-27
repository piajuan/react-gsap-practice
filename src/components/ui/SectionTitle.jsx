import React from 'react'
import clsx from 'clsx'

export default function SectionTitle({children, variant}) {
  return (
    <h2 className={
            clsx('text-xl uppercase font-medium tracking-wider',
                variant === 'yellow' && 'text-yellow-200',
                variant === 'indigo' && 'text-indigo-400'
            )}
    >
        {children}
    </h2>
  )
}
