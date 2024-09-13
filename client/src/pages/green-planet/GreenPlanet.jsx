import { 
  TourHomeAdditionalInformation, 
  TourHomeCardContainer, 
  TourHomeHighlights, 
  TourHomeMap, 
  TourHomeThingToDo, 
  TourHomeTopContainer, 
  TourVisitPlan, 
  TourWhyVisit, 
  TourYoutubeVideo
} from '../../components';

import {
  dubaiFrameTopThingsToDo,
  greenPlanetWhyVistData,
  greenPlanetHighlighhtsData,
  greenPlanetPlanVisitData,
  greenPlanetAdditionInfoData,
  greenPlanetTourHomeFAQ
} from './data';
import videoFile from '../../assets/video/greenPlanetVid.mp4'

import '../../styles/tourHome.scss';
import {Helmet} from "react-helmet";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialRender } from '../../redux/features/bookingSlice';
import { useGetBookingPlanDataQuery } from '../../redux/api/bookingPlanApi';
import LoadingSpinner from '../../components/LoadingSpinner';

const GreenPlanet = () => {
  const dispatch = useDispatch()
  const {data, isLoading, error, isSuccess} = useGetBookingPlanDataQuery({service:"dubai-frame"});

  useEffect(() => {
    dispatch(initialRender());
    if(error){
      toast.error("Something went wrong try again!")
    }
  },[]);

  if(isLoading){
    return <LoadingSpinner />
  }
  return (
    <>
    {/*Dynamic Title */}
    <Helmet>
        <title>Book Green Planet Dubai Tickets | Dubai Experience | Best Deals & Discounts</title>
        <meta name="description" content="Book your Green Planet Dubai tickets now and explore Dubai's largest indoor rainforest. • Extended validity • Instant confirmation. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
      </Helmet>
     <section className='tourHomeMainContainer'>
      <TourHomeTopContainer
          title={"Green Planet Dubai"}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          videoFile={videoFile}
          imgUrl={""}
          />
       <TourHomeCardContainer cardData={data?.bookingPlan}  />   
       <TourHomeThingToDo topThingsToDo={dubaiFrameTopThingsToDo} />
       
       <TourYoutubeVideo 
       title={"Green Planet Dubai"} 
       para={"The Green Planet is an indoor zoo and garden located in the City Walk area of Dubai, United Arab Emirates. It's essentially a captivating “bio-dome” designed to simulate a tropical rainforest environment."} 
       youTubeLink={"https://www.youtube.com/watch?v=uzjWa8AsBJc&pp=ygUSR3JlZW4gUGxhbmV0IER1YmFp"}
       />

       <TourWhyVisit 
        whyVisitData={greenPlanetWhyVistData}
        serviceName={"Green Planet Dubai"}
      />

      <TourHomeHighlights 
        serviceName={"Green Planet Dubai"} 
        highlightsData={greenPlanetHighlighhtsData}
        title={"Green Planet Dubai"}
      />

      <TourVisitPlan tourVisitPlanData={greenPlanetPlanVisitData} title={"Green Planet Dubai"} />

      <TourHomeAdditionalInformation title={"Additional Information"} quesData={greenPlanetAdditionInfoData} />

      <TourHomeMap serviceName={"Green Planet Dubai"} mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.913626008237!2d55.25790657447163!3d25.206135177705153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42659897a4f5%3A0xd8d16fd51a2b9040!2sThe%20Green%20Planet!5e0!3m2!1sen!2sin!4v1726224864920!5m2!1sen!2sin"} />

      {/*FAQ */}
      <TourHomeAdditionalInformation title={"Frequently Asked Questions About Green Planet Dubai"} quesData={greenPlanetTourHomeFAQ} />
     </section>
    </>
  )
}

export default GreenPlanet