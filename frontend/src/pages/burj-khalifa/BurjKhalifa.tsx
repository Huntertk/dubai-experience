import TourHomeTopContainer from '../../components/TourHomeComponents/TourHomeTopContainer';
import '../../styles/home.scss';
import {Helmet} from "react-helmet";
import {
  burjKhalifaAdditionInfoData,
  burjKhalifaHighlightsData,
  burjKhalifaPlanVisitData,
  burjKhalifaTopThingsToDo,
  burjKhalifaTourHomeFAQ,
  burjKhalifaWhyVistData,
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
import coverVid from '../../assets/video/burjKhalifaVid.mp4'
import TourHomeThingToDo from '../../components/TourHomeComponents/TourHomeThingToDo';
import TourYoutubeVideo from '../../components/TourHomeComponents/TourYoutubeVideo';
import TourVisitPlan from '../../components/TourHomeComponents/TourVisitPlan';

const BurjKhalifa = () => {
    const serviceName:string = "Burj Khalifa"
    const {data, isLoading} = useGetServiceTicketQuery({service:"burj-khalifa"});

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
            <title>Book The Burj Khalifa Tickets | Dubai Experience | Best Deals & Discounts</title>
            <meta name="description" content="The Burj Khalifa is a towering skyscraper located in Dubai, United Arab Emirates. The observation decks on the 148th and 125th floors provide breathtaking 
      panoramic views of Dubai and beyond. On a clear day, you can see the vast desert, the Persian Gulf, and even neighboring countries. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
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
          title={"Burj Khalifa Ticket"} 
          paragraph={"Get exclusive access to Levels 124 and 125. Marvel at 360-degree panoramas while enjoying interactive features at your fingertips. Witness the mesmerizing Dubai Fountain show from the Burj Khalifa. Book your tickets to catch the water, music, and light spectacular during evening shows (6:00 PM to 11:00 PM) or daytime displays."} 
          youTubeLink={"https://www.youtube.com/watch?v=_XKdcYU9mhI"}
          />

          {/* Why Visits*/}
          <TourWhyVisit serviceName={serviceName} whyVisitData={burjKhalifaWhyVistData}/>

          {/* Highlights */}
          <TourHomeHighlights serviceName={serviceName} highlightsData={burjKhalifaHighlightsData} />

          {/* Visit Plan */}
          <TourVisitPlan title={serviceName} tourVisitPlanData={burjKhalifaPlanVisitData} />

          {/* Additional Questions */}
          <TourHomeFaq quesData={burjKhalifaAdditionInfoData} title={"Additional Information"} />

          {/* MAP */}
          <TourHomeMap mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7220.500761019923!2d55.27005193919169!3d25.194777460849796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sin!4v1725866912035!5m2!1sen!2sin"} serviceName={serviceName} />

          {/* FAQ Questions */}
          <TourHomeFaq quesData={burjKhalifaTourHomeFAQ} title={`Frequently Asked Questions About ${serviceName}`} />
        </section>
    </>
  )
}

export default BurjKhalifa;