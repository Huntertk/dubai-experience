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
  dubaiFrameHighlighhtsData,
  dubaiFrameWhyVistData,
  dubaiFrameTopThingsToDo,
  dubaiFramePlanVisitData,
  dubaiFrameAdditionInfoData,
  dubaiFrameTourHomeFAQ
} from './data';
import videoFile from '../../assets/video/dubaiframevid.mp4'

import '../../styles/tourHome.scss';
import {Helmet} from "react-helmet";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialRender } from '../../redux/features/bookingSlice';
import { useGetBookingPlanDataQuery } from '../../redux/api/bookingPlanApi';
import LoadingSpinner from '../../components/LoadingSpinner';

const DubaiFrame = () => {
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
        <title>Book Dubai Frame Tickets | Dubai Experience | Best Deals & Discounts</title>
        <meta name="description" content="Grab Dubai Frame tickets • Extended validity • Instant confirmation. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
      </Helmet>
     <section className='tourHomeMainContainer'>
      <TourHomeTopContainer
          title={"Dubai Frame"}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          videoFile={videoFile}
          imgUrl={""}
          />
       <TourHomeCardContainer cardData={data?.bookingPlan}  />   
       <TourHomeThingToDo topThingsToDo={dubaiFrameTopThingsToDo} />
       
       <TourYoutubeVideo 
       title={"Dubai Frame Ticket"} 
       para={"The Dubai Frame symbolizes Dubai's rapid development and its ability to blend tradition with modernity. It captures the city's journey and its ambitions for the future, making it a significant cultural landmark.The Dubai Frame is built with sustainability in mind, using energy-efficient materials and technologies. It reflects Dubai's commitment to environmental responsibility and green building practices.As one of the most popular tourist attractions in Dubai, the Dubai Frame attracts millions of visitors each year. It offers a unique perspective of the city and has become a must-visit site for tourists and residents alike."} 
       youTubeLink={"https://www.youtube.com/watch?v=ennLZx3d6d0"}
       />

       <TourWhyVisit 
        whyVisitData={dubaiFrameWhyVistData}
        serviceName={"Dubai Frame"}
      />

      <TourHomeHighlights 
        serviceName={"Dubai Frame"} 
        highlightsData={dubaiFrameHighlighhtsData}
        title={"Dubai Frame"}
      />

      <TourVisitPlan tourVisitPlanData={dubaiFramePlanVisitData} />

      <TourHomeAdditionalInformation title={"Additional Information"} quesData={dubaiFrameAdditionInfoData} />
      <TourHomeMap serviceName={"Dubai Frame"} mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231259.85845095658!2d55.0070779865871!3d25.087122422862826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42db20d99d41%3A0xf93035af01a85798!2sDubai%20Frame!5e0!3m2!1sen!2sin!4v1720260840948!5m2!1sen!2sin"} />

      {/*FAQ */}
      <TourHomeAdditionalInformation title={"Frequently Asked Questions About Dubai Frame"} quesData={dubaiFrameTourHomeFAQ} />
     </section>
    </>
  )
}

export default DubaiFrame