import React from 'react'
import SectionBlock from './ui/SectionBlock';
import { servicesCircle } from '../assets';
import SectionText from './ui/SectionText';

export default function Services() {
  return (
    <section className='relative p-6'>
      <SectionBlock
        variant='yellow'
        title='get in touch!'
        circleSvg={servicesCircle}
      >
        <div className='flex flex-col my-8'>
          <SectionText variant='yellow'>We provide clients</SectionText>
          <SectionText variant='yellow'>We provide clients</SectionText>
          <SectionText variant='yellow'>with stunning <i>Crafty</i> web</SectionText>
          <SectionText variant='yellow'>solutions, developed</SectionText>
          <SectionText variant='yellow'>with <i>skill</i> & <i>passion</i>.</SectionText>
        </div>
      </ SectionBlock>
    </section>
  )
}
