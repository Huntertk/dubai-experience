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
  const {data, isLoading, error, isSuccess} = useGetBookingPlanDataQuery({service:"aras-resturant"});

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
        <meta name="description" content="ARAS Restaurant KL Tower Buffet ... Experience great food while enjoying the gorgeous view of the whole Kuala Lumpur on top of KL Tower.! ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Malaysia Experience" />
      </Helmet>
     <section className='tourHomeMainContainer'>
      <TourHomeTopContainer
          title={"Dubai Frame"}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          videoFile={videoFile}
          imgUrl={""}
          />
       <TourHomeCardContainer cardData={data?.bookingPlan}  />   
       <TourHomeThingToDo dubaiFrameTopThingsToDo={dubaiFrameTopThingsToDo} />
       
       <TourYoutubeVideo title={"Dubai Frame Ticket"} para={"Opened in 2018, the Dubai Frame is one of the newest additions to Dubai's glorious skyline. Built to resemble a giant picture frame, the Dubai Frame is a 150-meter tall architectural landmark in the city's lush Zabeel Park and offers spectacular views of Dubai and the gulf beyond. The Dubai Frame is open to visitors every day and tickets are available online."} />

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