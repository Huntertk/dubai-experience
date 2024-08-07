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
  ayaUniverseTopThingsToDo,
  ayaUniverseWhyVistData,
  ayaUniverseHighlighhtsData,
  ayaUniversePlanVisitData,
  ayaUniverseAdditionInfoData,
  ayaUniverseTourHomeFAQ
} from './data';
import videoFile from '../../assets/video/ayauniversevid.mp4'

import '../../styles/tourHome.scss';
import {Helmet} from "react-helmet";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialRender } from '../../redux/features/bookingSlice';
import { useGetBookingPlanDataQuery } from '../../redux/api/bookingPlanApi';
import LoadingSpinner from '../../components/LoadingSpinner';

const AyaUniverse = () => {
  const dispatch = useDispatch()
  const {data, isLoading, error, isSuccess} = useGetBookingPlanDataQuery({service:"aya-universe"});
  const serviceName = "Aya Universe"

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
        <title>Book Aya Universe Frame Tickets | Dubai Experience | Best Deals & Discounts</title>
        <meta name="description" content="Dubai Experince Welcome to AYA Universe an extraordinary and innovative entertainment park that transcends the ordinary. With 12 captivating space zones, AYA invites you to wander through wonder. Drift among the stars, observe celestial wonders, walk through blooming light gardens, and cross an infinite bridge over a mystical river. Discover art, technology, and nature converging in a breathtaking universe of beauty and discovery.Plan your cosmic adventure at AYA Universe today!. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
      </Helmet>
     <section className='tourHomeMainContainer'>
      <TourHomeTopContainer
          title={serviceName}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          videoFile={videoFile}
          imgUrl={""}
          />
       <TourHomeCardContainer cardData={data?.bookingPlan}  />   
       <TourHomeThingToDo topThingsToDo={ayaUniverseTopThingsToDo} />
       
       <TourYoutubeVideo 
       title={"Aya Universe Ticket"} 
       para={"AYA Universe is an otherworldly adventure in the heart of Dubai. Step into a mesmerizing realm where art, technology, and imagination collide. Wander through enchanting light gardens, traverse infinite bridges, and explore 12 captivating space zones. AYA Universe: Where Dubai meets the cosmos. AYA doesn't exist within our known universe; it's a sanctuary hidden beyond the far reaches of the stars. Built to commune with the natural beauty of a mysterious cosmos, AYA beckons intrepid travelers to step foot into its vibrant realms."} 
       youTubeLink={"https://www.youtube.com/watch?v=vRVG4nbCioU"}
       />

       <TourWhyVisit 
        whyVisitData={ayaUniverseWhyVistData}
        serviceName={serviceName}
      />

      <TourHomeHighlights 
        serviceName={serviceName} 
        highlightsData={ayaUniverseHighlighhtsData}
        title={serviceName}
      />

      <TourVisitPlan tourVisitPlanData={ayaUniversePlanVisitData} title={serviceName} />

      <TourHomeAdditionalInformation title={"Additional Information"} quesData={ayaUniverseAdditionInfoData} />
      <TourHomeMap serviceName={serviceName} mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.218066550781!2d55.31567457447259!3d25.229579177690102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dce5bea2dd1%3A0x88632981a972e88f!2sAYA!5e0!3m2!1sen!2sin!4v1723021140274!5m2!1sen!2sin"} />
      

      {/*FAQ */}
      <TourHomeAdditionalInformation title={"Frequently Asked Questions About Aya Universe"} quesData={ayaUniverseTourHomeFAQ} />
     </section>
    </>
  )
}

export default AyaUniverse