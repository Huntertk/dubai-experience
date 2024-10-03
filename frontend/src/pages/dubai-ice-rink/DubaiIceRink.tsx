import TourHomeTopContainer from '../../components/TourHomeComponents/TourHomeTopContainer';
import '../../styles/home.scss';
import {Helmet} from "react-helmet";
import {
  dubaiIceRinkHighlightsData,
  dubaiIceRinkPlanVisitData,
  lostChambersTopThingsToDo,
  dubaiIceRinkTourHomeFAQ,
  dubaiIceRinkWhyVistData,
  dubaiIceRinkAdditionInfoData,
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
import coverVid from '../../assets/video/dubaiIceRinkVid.mp4'
import TourHomeThingToDo from '../../components/TourHomeComponents/TourHomeThingToDo';
import TourYoutubeVideo from '../../components/TourHomeComponents/TourYoutubeVideo';
import TourVisitPlan from '../../components/TourHomeComponents/TourVisitPlan';

const DubaiIceRink = () => {
    const serviceName:string = "Dubai Ice Rink"
    const {data, isLoading} = useGetServiceTicketQuery({service:"dubai-ice-rink"});

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
            <title>Book Dubai Ice Rink Tickets | Dubai Experience | Best Deals & Discounts</title>
            <meta name="description" content="Book your Dubai Ice Rink tickets and spend your time at the largest ice skating rink in the city. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
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
          title={"Dubai Ice Rink"} 
          paragraph={"Dubai Ice Rink is a popular indoor ice skating venue located in The Dubai Mall, one of the world's largest shopping centers. The rink features a spacious Olympic-sized ice surface that can accommodate up to 1,500 guests, making it a great spot for both casual skaters and hockey enthusiasts.The rink offers a variety of activities, including public skating sessions, figure skating lessons, and hockey games. It also hosts special events, such as themed nights and competitions. The atmosphere is lively, with music playing and bright lights enhancing the experience.Whether you're looking for a fun family outing, a unique date idea, or just a break from shopping, Dubai Ice Rink offers a cool escape and a chance to enjoy ice skating in a stunning setting."} 
          youTubeLink={"https://www.youtube.com/watch?v=vUSxUJoZHIg"}
          />

          {/* Why Visits*/}
          <TourWhyVisit serviceName={serviceName} whyVisitData={dubaiIceRinkWhyVistData}/>

          {/* Highlights */}
          <TourHomeHighlights serviceName={serviceName} highlightsData={dubaiIceRinkHighlightsData} />

          {/* Visit Plan */}
          <TourVisitPlan title={serviceName} tourVisitPlanData={dubaiIceRinkPlanVisitData} />

          {/* Additional Questions */}
          <TourHomeFaq quesData={dubaiIceRinkAdditionInfoData} title={"Additional Information"} />

          {/* MAP */}
          <TourHomeMap mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1198.4499890025186!2d55.27920019450243!3d25.19647877357553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682819fd8bd1%3A0x7b34af216060dfe6!2sDubai%20Ice%20Rink!5e0!3m2!1sen!2sin!4v1727940120643!5m2!1sen!2sin"} serviceName={serviceName} />

          {/* FAQ Questions */}
          <TourHomeFaq quesData={dubaiIceRinkTourHomeFAQ} title={`Frequently Asked Questions About ${serviceName}`} />
        </section>
    </>
  )
}

export default DubaiIceRink