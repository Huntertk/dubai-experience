import TourHomeTopContainer from '../../components/TourHomeComponents/TourHomeTopContainer';
import '../../styles/home.scss';
import {Helmet} from "react-helmet";
import {
  dubaiFrameAdditionInfoData,
  dubaiFrameHighlightsData,
  dubaiFramePlanVisitData,
  dubaiFrameTopThingsToDo,
  dubaiFrameTourHomeFAQ,
  dubaiFrameWhyVistData,
 } from './data';
import TourHomeCardContainer from '../../components/TourHomeComponents/TourHomeCardContainer';
import TourWhyVisit from '../../components/TourHomeComponents/TourWhyVisit';
import TourHomeHighlights from '../../components/TourHomeComponents/TourHomeHighlights';
import TourHomeFaq from '../../components/TourHomeComponents/TourHomeFaq';
import TourHomeMap from '../../components/TourHomeComponents/TourHomeMap';
import { useGetServiceTicketQuery } from '../../redux/api/ticketApi';
import LoadingSpinner from '../../components/Loader';
import { useAppDispatch } from '../../redux/hook';
import { useEffect } from 'react';
import { cancelBooking } from '../../redux/feature/bookingSlice';
import coverVid from '../../assets/video/dubaiframevid.mp4'
import TourHomeThingToDo from '../../components/TourHomeComponents/TourHomeThingToDo';
import TourYoutubeVideo from '../../components/TourHomeComponents/TourYoutubeVideo';
import TourVisitPlan from '../../components/TourHomeComponents/TourVisitPlan';

const DubaiFrame = () => {
    const serviceName:string = "Dubai Frame"
    const {data, isLoading} = useGetServiceTicketQuery({service:"dubai-frame"});

    const dispatch = useAppDispatch() 

    useEffect(() => {
      dispatch(cancelBooking())
    },[])
    
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
          title={serviceName}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          videoFile={coverVid}
          imgUrl={""}
          />
         { 
            data && <TourHomeCardContainer cardData={data}  />
         }

          {/* Top Things to do */}
          <TourHomeThingToDo topThingsToDo={dubaiFrameTopThingsToDo} />

          {/* Youtube */}
          <TourYoutubeVideo
          title={"Dubai Frame Ticket"} 
          paragraph={"The Dubai Frame symbolizes Dubai's rapid development and its ability to blend tradition with modernity. It captures the city's journey and its ambitions for the future, making it a significant cultural landmark.The Dubai Frame is built with sustainability in mind, using energy-efficient materials and technologies. It reflects Dubai's commitment to environmental responsibility and green building practices.As one of the most popular tourist attractions in Dubai, the Dubai Frame attracts millions of visitors each year. It offers a unique perspective of the city and has become a must-visit site for tourists and residents alike."} 
          youTubeLink={"https://www.youtube.com/watch?v=ennLZx3d6d0"}
          />

          {/* Why Visits*/}
          <TourWhyVisit serviceName={serviceName} whyVisitData={dubaiFrameWhyVistData}/>

          {/* Highlights */}
          <TourHomeHighlights serviceName={serviceName} highlightsData={dubaiFrameHighlightsData} />

          {/* Visit Plan */}
          <TourVisitPlan title={serviceName} tourVisitPlanData={dubaiFramePlanVisitData} />

          {/* Additional Questions */}
          <TourHomeFaq quesData={dubaiFrameAdditionInfoData} title={"Additional Information"} />

          {/* MAP */}
          <TourHomeMap mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231259.85845095658!2d55.0070779865871!3d25.087122422862826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42db20d99d41%3A0xf93035af01a85798!2sDubai%20Frame!5e0!3m2!1sen!2sin!4v1720260840948!5m2!1sen!2sin"} serviceName={serviceName} />

          {/* FAQ Questions */}
          <TourHomeFaq quesData={dubaiFrameTourHomeFAQ} title={`Frequently Asked Questions About ${serviceName}`} />
        </section>
    </>
  )
}

export default DubaiFrame