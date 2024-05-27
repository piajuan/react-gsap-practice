import React from 'react'
import SectionBlock from './ui/SectionBlock';
import MainContent from './services/MainContent';
import { servicesCircle } from '../assets';
import SectionText from './ui/SectionText';

export default function Services() {
  return (
    <section className='relative p-6'>
      <SectionBlock
        variant='indigo'
        title='What we do'
        circleSvg={servicesCircle}
      >
        <div className='flex flex-col my-8'>
          <SectionText variant='indigo'>We provide clients</SectionText>
          <SectionText variant='indigo'>We provide clients</SectionText>
          <SectionText variant='indigo'>with stunning <i>Crafty</i> web</SectionText>
          <SectionText variant='indigo'>solutions, developed</SectionText>
          <SectionText variant='indigo'>with <i>skill</i> & <i>passion</i>.</SectionText>
        </div>
      </ SectionBlock>
      <MainContent />
    </section>
  )
}
