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
  ayaUniverseAdditionInfoData,
  ayaUniverseTourHomeFAQ,
  burjKhalifaTopThingsToDo,
  burjKhalifaWhyVistData,
  burjKhalifaHighlighhtsData,
  burjKhalifaPlanVisitData
} from './data';
import videoFile from '../../assets/video/burjKhalifaVid.mp4'

import '../../styles/tourHome.scss';
import {Helmet} from "react-helmet";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialRender } from '../../redux/features/bookingSlice';
import { useGetBookingPlanDataQuery } from '../../redux/api/bookingPlanApi';
import LoadingSpinner from '../../components/LoadingSpinner';

const BurjKhalifa = () => {
  const dispatch = useDispatch()
  const {data, isLoading, error, isSuccess} = useGetBookingPlanDataQuery({service:"burj-khalifa"});
  const serviceName = "Burj Khalifa"
  
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
        <title>Book The Burj Khalifa Tickets | Dubai Experience | Best Deals & Discounts</title>
        <meta name="description" content="The Burj Khalifa is a towering skyscraper located in Dubai, United Arab Emirates. The observation decks on the 148th and 125th floors provide breathtaking 
      panoramic views of Dubai and beyond. On a clear day, you can see the vast desert, the Persian Gulf, and even neighboring countries. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
      </Helmet>
     <section className='tourHomeMainContainer'>
      <TourHomeTopContainer
          title={serviceName}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          videoFile={videoFile}
          imgUrl={""}
          />
       <TourHomeCardContainer cardData={data?.bookingPlan}  />   
       <TourHomeThingToDo topThingsToDo={burjKhalifaTopThingsToDo} />
       
       <TourYoutubeVideo 
       title={"Burj Khalifa Ticket"} 
       para={"Get exclusive access to Levels 124 and 125. Marvel at 360-degree panoramas while enjoying interactive features at your fingertips. Witness the mesmerizing Dubai Fountain show from the Burj Khalifa. Book your tickets to catch the water, music, and light spectacular during evening shows (6:00 PM to 11:00 PM) or daytime displays."} 
       youTubeLink={"https://www.youtube.com/watch?v=_XKdcYU9mhI"}
       />

       <TourWhyVisit 
        whyVisitData={burjKhalifaWhyVistData}
        serviceName={serviceName}
      />

      <TourHomeHighlights 
        serviceName={serviceName} 
        highlightsData={burjKhalifaHighlighhtsData}
        title={serviceName}
      />

      <TourVisitPlan tourVisitPlanData={burjKhalifaPlanVisitData} title={serviceName} />

      <TourHomeAdditionalInformation title={"Additional Information"} quesData={ayaUniverseAdditionInfoData} />
      <TourHomeMap serviceName={serviceName} mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.218066550781!2d55.31567457447259!3d25.229579177690102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dce5bea2dd1%3A0x88632981a972e88f!2sAYA!5e0!3m2!1sen!2sin!4v1723021140274!5m2!1sen!2sin"} />
      

      {/*FAQ */}
      <TourHomeAdditionalInformation title={"Frequently Asked Questions About Aya Universe"} quesData={ayaUniverseTourHomeFAQ} />
     </section>
    </>
  )
}

export default BurjKhalifa