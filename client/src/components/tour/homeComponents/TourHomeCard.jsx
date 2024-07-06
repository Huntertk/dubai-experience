import React, { useState } from 'react';
import {motion} from 'framer-motion';
import TourCardBigDevice from './TourCardBigDevice';
import TourCardSmallDevice from './TourCardSmallDevice';
import '../../../styles/tourHomeCard.scss'


const TourHomeCard = ({data}) => {
  return (
    <section className='tourCardMainSection'>
        <TourCardBigDevice data={data} />
        <TourCardSmallDevice data={data} />
    </section>
    
  )
}

export default TourHomeCard