import TourHomeTopContainer from '../../components/TourHomeComponents/TourHomeTopContainer';
import '../../styles/home.scss';
import {Helmet} from "react-helmet";
import {
  atlantisAquaventureAdditionInfoData,
  atlantisAquaventureHighlightsData,
  atlantisAquaventurePlanVisitData,
  lostChambersTopThingsToDo,
  atlantisAquaventureTourHomeFAQ,
  atlantisAquaventureWhyVistData,
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
import coverVid from '../../assets/video/AtlantisAquaventureVid.mp4'
import TourHomeThingToDo from '../../components/TourHomeComponents/TourHomeThingToDo';
import TourYoutubeVideo from '../../components/TourHomeComponents/TourYoutubeVideo';
import TourVisitPlan from '../../components/TourHomeComponents/TourVisitPlan';

const AtlantisAquaventure = () => {
    const serviceName:string = "Atlantis Aquaventure Waterpark"
    const {data, isLoading} = useGetServiceTicketQuery({service:"atlantis-aquaventure"});

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
            <title>Book Atlantis Aquaventure Waterpark Tickets | Dubai Experience | Best Deals & Discounts</title>
            <meta name="description" content="Book your Atlantis Aquaventure Waterpark Tickets.Atlantis Water Park, located at Atlantis, The Palm in Dubai, provides guests of all ages with an exhilarating and immersive water park experience. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
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
          <TourHomeThingToDo topThingsToDo={lostChambersTopThingsToDo} />

          {/* Youtube */}
          <TourYoutubeVideo
          title={"Atlantis Aquaventure Waterpark Ticket"} 
          paragraph={"Atlantis Aquaventure Waterpark, located at the Atlantis, The Palm resort in Dubai, is one of the largest and most exciting waterparks in the world. Featuring a variety of thrilling water rides and attractions, it offers something for everyone—from adrenaline junkies to families seeking fun. Atlantis Aquaventure is not just a waterpark; it's an all-encompassing experience combining adventure, relaxation, and marine exploration, making it a must-visit for families and thrill-seekers alike!"} 
          youTubeLink={"https://www.youtube.com/watch?v=VJzT5-CGnWA"}
          />

          {/* Why Visits*/}
          <TourWhyVisit serviceName={serviceName} whyVisitData={atlantisAquaventureWhyVistData}/>

          {/* Highlights */}
          <TourHomeHighlights serviceName={serviceName} highlightsData={atlantisAquaventureHighlightsData} />

          {/* Visit Plan */}
          <TourVisitPlan title={serviceName} tourVisitPlanData={atlantisAquaventurePlanVisitData} />

          {/* Additional Questions */}
          <TourHomeFaq quesData={atlantisAquaventureAdditionInfoData} title={"Additional Information"} />

          {/* MAP */}
          <TourHomeMap mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1199.0654593268966!2d55.121365768747594!3d25.133865716882653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xb78f1e79bffcf25d!2sAquaventure%20Waterpark!5e0!3m2!1sen!2sin!4v1727337787802!5m2!1sen!2sin"} serviceName={serviceName} />

          {/* FAQ Questions */}
          <TourHomeFaq quesData={atlantisAquaventureTourHomeFAQ} title={`Frequently Asked Questions About ${serviceName}`} />
        </section>
    </>
  )
}

export default AtlantisAquaventure