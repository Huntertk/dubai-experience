import TourHomeTopContainer from '../../components/TourHomeComponents/TourHomeTopContainer';
import '../../styles/home.scss';
import {Helmet} from "react-helmet";
import {
  dubaiSkyViewPlanVisitData,
  burjKhalifaTopThingsToDo,
  dubaiSkyViewHighlightsData,
  dubaiSkyViewWhyVistData,
  dubaiSkyViewAdditionInfoData,
  dubaiSkyViewTourHomeFAQ,
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
import coverVid from '../../assets/video/DubaiSkyViewVid.mp4'
import TourHomeThingToDo from '../../components/TourHomeComponents/TourHomeThingToDo';
import TourYoutubeVideo from '../../components/TourHomeComponents/TourYoutubeVideo';
import TourVisitPlan from '../../components/TourHomeComponents/TourVisitPlan';

const DubaiSkyView = () => {
    const serviceName:string = "Dubai Sky View"
    const {data, isLoading} = useGetServiceTicketQuery({service:"dubai-sky-view"});

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
            <title>Book Dubai Sky Views Observatory Ticket | Dubai Experience | Best Deals & Discounts</title>
            <meta name="description" content="Book Dubai Sky Views Observatory Ticket and get access to the observatory, edge walk, glass slide. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
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
          <TourHomeThingToDo topThingsToDo={burjKhalifaTopThingsToDo} />

          {/* Youtube */}
          <TourYoutubeVideo
          title={"Dubai Sky Views Observatory Ticket"} 
          paragraph={"The Dubai Sky Views Observatory is a stunning attraction that offers breathtaking panoramic views of the city skyline, including iconic landmarks like the Burj Khalifa and the Dubai Mall. Located on the 52nd and 53rd floors of the Address Sky View Hotel, it features glass-floored observation decks that provide a unique perspective of the bustling city below. Visitors can experience the thrill of walking along the glass walkways, which offer a spine-tingling sensation while enjoying the expansive views. The observatory also includes an outdoor terrace for those who want to take in the fresh air and snap incredible photos."} 
          youTubeLink={"https://www.youtube.com/watch?v=NwDwpjaNHKw"}
          />

          {/* Why Visits*/}
          <TourWhyVisit serviceName={serviceName} whyVisitData={dubaiSkyViewWhyVistData}/>

          {/* Highlights */}
          <TourHomeHighlights serviceName={serviceName} highlightsData={dubaiSkyViewHighlightsData} />

          {/* Visit Plan */}
          <TourVisitPlan title={serviceName} tourVisitPlanData={dubaiSkyViewPlanVisitData} />

          {/* Additional Questions */}
          <TourHomeFaq quesData={dubaiSkyViewAdditionInfoData} title={"Additional Information"} />

          {/* MAP */}
          <TourHomeMap mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.067846509079!2d55.26786427447145!3d25.200934377708464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43ac4330594d%3A0x537d460e7839e48a!2sSky%20Views%20Observatory!5e0!3m2!1sen!2sin!4v1727711464258!5m2!1sen!2sin"} serviceName={serviceName} />

          {/* FAQ Questions */}
          <TourHomeFaq quesData={dubaiSkyViewTourHomeFAQ} title={`Frequently Asked Questions About ${serviceName}`} />
        </section>
    </>
  )
}

export default DubaiSkyView;