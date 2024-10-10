import TourHomeTopContainer from '../../components/TourHomeComponents/TourHomeTopContainer';
import '../../styles/home.scss';
import {Helmet} from "react-helmet";
import {
  dubaiMiracleGardenHighlightsData,
  lostChambersTopThingsToDo,
  dubaiMiracleGardenWhyVistData,
  dubaiMiracleGardenPlanVisitData,
  dubaiMiracleGardenTourHomeFAQ,
  dubaiMiracleGardenAdditionInfoData,
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
import coverVid from '../../assets/video/DubaiMiracleGardenVid.mp4'
import TourHomeThingToDo from '../../components/TourHomeComponents/TourHomeThingToDo';
import TourYoutubeVideo from '../../components/TourHomeComponents/TourYoutubeVideo';
import TourVisitPlan from '../../components/TourHomeComponents/TourVisitPlan';

const DubaiMiracleGarden = () => {
    const serviceName:string = "Dubai Miracle Garden"
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
            <title>Book Dubai Miracle Garden Tickets | Dubai Experience | Best Deals & Discounts</title>
            <meta name="description" content="Book your Dubai Miracle Garden tickets and enjoy 150 million flowers. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
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
          title={"Dubai Miracle Garden"} 
          paragraph={"Dubai Miracle Garden, opened in 2013, is a stunning floral wonder located in Dubai, UAE. Spanning over 72,000 square meters, it features more than 150 million flowers arranged in intricate designs. The garden boasts several themed areas, including the iconic Emirates A380, a life-sized flower-covered aircraft, and the whimsical Floral Castle. Visitors can stroll through vibrant pathways, enjoying a sensory experience filled with the scent of flowers and breathtaking views. Committed to sustainability, the garden employs a drip irrigation system to conserve water and promotes eco-friendly practices. With essential amenities like cafes and shops, Dubai Miracle Garden is not just a feast for the eyes but also a perfect destination for relaxation and exploration. It stands as a testament to creativity and the beauty of nature, making it a must-visit attraction in Dubai."} 
          youTubeLink={"https://www.youtube.com/watch?v=gVPe-zfsx5E"}
          />

          {/* Why Visits*/}
          <TourWhyVisit serviceName={serviceName} whyVisitData={dubaiMiracleGardenWhyVistData}/>

          {/* Highlights */}
          <TourHomeHighlights serviceName={serviceName} highlightsData={dubaiMiracleGardenHighlightsData} />

          {/* Visit Plan */}
          <TourVisitPlan title={serviceName} tourVisitPlanData={dubaiMiracleGardenPlanVisitData} />

          {/* Additional Questions */}
          <TourHomeFaq quesData={dubaiMiracleGardenAdditionInfoData} title={"Additional Information"} />

          {/* MAP */}
          <TourHomeMap mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2354741708864!2d55.241889774465804!3d25.06000687779947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c349030525f%3A0x6d282a232a35009b!2sDubai%20Miracle%20Garden!5e0!3m2!1sen!2sin!4v1728582244727!5m2!1sen!2sin"} serviceName={serviceName} />

          {/* FAQ Questions */}
          <TourHomeFaq quesData={dubaiMiracleGardenTourHomeFAQ} title={`Frequently Asked Questions About ${serviceName}`} />
        </section>
    </>
  )
}

export default DubaiMiracleGarden