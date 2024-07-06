import React, { useState } from 'react'
import TourHomeWhatsIncluded from './TourHomeWhatsIncluded';
import ImageViewerContainer from './ImageViewerContainer';
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { choosingBooking } from '../../../redux/features/bookingSlice';
import TourCardBigDevice from './TourCardBigDevice';
import TourCardSmallDevice from './TourCardSmallDevice';
import '../../../styles/tourHomeCard.scss'


const TourHomeCard = ({data}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [imgViewer, setImageViwer] = useState(false)
    const easeScaleUp = {
        initial:{
          scale:0,
          opacity:0
        },
        whileInView:{
          scale:1,
          opacity: 1
        },
      }
  return (
    <section className='tourCardMainSection'>
        <TourCardBigDevice data={data} />
        <TourCardSmallDevice data={data} />
    </section>
    
  )
}

export default TourHomeCard