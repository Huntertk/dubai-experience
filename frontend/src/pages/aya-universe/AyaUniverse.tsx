import TourHomeTopContainer from '../../components/TourHomeComponents/TourHomeTopContainer';
import '../../styles/home.scss';
import {Helmet} from "react-helmet";
import { 
  ayaUniverseAdditionInfoData,
  ayaUniverseHighlighhtsData,
  ayaUniversePlanVisitData,
  ayaUniverseTopThingsToDo,
  ayaUniverseTourHomeFAQ,
  ayaUniverseWhyVistData,
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
import coverVid from '../../assets/video/ayauniversevid.mp4'
import TourHomeThingToDo from '../../components/TourHomeComponents/TourHomeThingToDo';
import TourYoutubeVideo from '../../components/TourHomeComponents/TourYoutubeVideo';
import TourVisitPlan from '../../components/TourHomeComponents/TourVisitPlan';

const AyaUniverse = () => {
    const serviceName:string = "Aya Universe"
    const {data, isLoading} = useGetServiceTicketQuery({service:"aya-universe"});

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
            <title>Book Aya Universe Frame Tickets | Dubai Experience | Best Deals & Discounts</title>
            <meta name="description" content="Dubai Experince Welcome to AYA Universe an extraordinary and innovative entertainment park that transcends the ordinary. With 12 captivating space zones, AYA invites you to wander through wonder. Drift among the stars, observe celestial wonders, walk through blooming light gardens, and cross an infinite bridge over a mystical river. Discover art, technology, and nature converging in a breathtaking universe of beauty and discovery.Plan your cosmic adventure at AYA Universe today!. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
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
          <TourHomeThingToDo topThingsToDo={ayaUniverseTopThingsToDo} />

          {/* Youtube */}
          <TourYoutubeVideo
          title={"Aya Universe Ticket"} 
          paragraph={"AYA Universe is an otherworldly adventure in the heart of Dubai. Step into a mesmerizing realm where art, technology, and imagination collide. Wander through enchanting light gardens, traverse infinite bridges, and explore 12 captivating space zones. AYA Universe: Where Dubai meets the cosmos. AYA doesn't exist within our known universe; it's a sanctuary hidden beyond the far reaches of the stars. Built to commune with the natural beauty of a mysterious cosmos, AYA beckons intrepid travelers to step foot into its vibrant realms."} 
          youTubeLink={"https://www.youtube.com/watch?v=vRVG4nbCioU"}
          />

          {/* Why Visits*/}
          <TourWhyVisit serviceName={serviceName} whyVisitData={ayaUniverseWhyVistData}/>

          {/* Highlights */}
          <TourHomeHighlights serviceName={serviceName} highlightsData={ayaUniverseHighlighhtsData} />

          {/* Visit Plan */}
          <TourVisitPlan title={serviceName} tourVisitPlanData={ayaUniversePlanVisitData} />

          {/* Additional Questions */}
          <TourHomeFaq quesData={ayaUniverseAdditionInfoData} title={"Additional Information"} />

          {/* MAP */}
          <TourHomeMap mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.218066550781!2d55.31567457447259!3d25.229579177690102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dce5bea2dd1%3A0x88632981a972e88f!2sAYA!5e0!3m2!1sen!2sin!4v1723021140274!5m2!1sen!2sin"} serviceName={serviceName} />

          {/* FAQ Questions */}
          <TourHomeFaq quesData={ayaUniverseTourHomeFAQ} title={`Frequently Asked Questions About ${serviceName}`} />
        </section>
    </>
  )
}

export default AyaUniverse