import TourHomeTopContainer from '../../components/TourHomeComponents/TourHomeTopContainer';
import '../../styles/home.scss';
import {Helmet} from "react-helmet";
import {
  dubaiFrameTopThingsToDo,
  greenPlanerHighlightsData,
  greenPlanetAdditionInfoData,
  greenPlanetPlanVisitData,
  greenPlanetTourHomeFAQ,
  greenPlanetWhyVistData,
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
import coverVid from '../../assets/video/greenPlanetVid.mp4'
import TourHomeThingToDo from '../../components/TourHomeComponents/TourHomeThingToDo';
import TourYoutubeVideo from '../../components/TourHomeComponents/TourYoutubeVideo';
import TourVisitPlan from '../../components/TourHomeComponents/TourVisitPlan';

const GreenPlanet = () => {
    const serviceName:string = "Green Planet Dubai"
    const {data, isLoading} = useGetServiceTicketQuery({service:"green-planet"});

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
            <title>Book Green Planet Dubai Tickets | Dubai Experience | Best Deals & Discounts</title>
            <meta name="description" content="Book your Green Planet Dubai tickets now and explore Dubai's largest indoor rainforest. • Extended validity • Instant confirmation. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
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
          title={"Green Planet Dubai"} 
          paragraph={"The Green Planet is an indoor zoo and garden located in the City Walk area of Dubai, United Arab Emirates. It's essentially a captivating “bio-dome” designed to simulate a tropical rainforest environment."} 
          youTubeLink={"https://www.youtube.com/watch?v=uzjWa8AsBJc"}
          />

          {/* Why Visits*/}
          <TourWhyVisit serviceName={serviceName} whyVisitData={greenPlanetWhyVistData}/>

          {/* Highlights */}
          <TourHomeHighlights serviceName={serviceName} highlightsData={greenPlanerHighlightsData} />

          {/* Visit Plan */}
          <TourVisitPlan title={serviceName} tourVisitPlanData={greenPlanetPlanVisitData} />

          {/* Additional Questions */}
          <TourHomeFaq quesData={greenPlanetAdditionInfoData} title={"Additional Information"} />

          {/* MAP */}
          <TourHomeMap mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.913626008237!2d55.25790657447163!3d25.206135177705153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42659897a4f5%3A0xd8d16fd51a2b9040!2sThe%20Green%20Planet!5e0!3m2!1sen!2sin!4v1726224864920!5m2!1sen!2si"} serviceName={serviceName} />

          {/* FAQ Questions */}
          <TourHomeFaq quesData={greenPlanetTourHomeFAQ} title={`Frequently Asked Questions About ${serviceName}`} />
        </section>
    </>
  )
}

export default GreenPlanet