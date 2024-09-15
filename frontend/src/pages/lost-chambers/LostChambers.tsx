import TourHomeTopContainer from '../../components/TourHomeComponents/TourHomeTopContainer';
import '../../styles/home.scss';
import {Helmet} from "react-helmet";
import {
  lostChambersAdditionInfoData,
  lostChambersHighlightsData,
  lostChambersPlanVisitData,
  lostChambersTopThingsToDo,
  lostChambersTourHomeFAQ,
  lostChambersWhyVistData,
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
import coverVid from '../../assets/video/lostchambersvid.mp4'
import TourHomeThingToDo from '../../components/TourHomeComponents/TourHomeThingToDo';
import TourYoutubeVideo from '../../components/TourHomeComponents/TourYoutubeVideo';
import TourVisitPlan from '../../components/TourHomeComponents/TourVisitPlan';

const LostChambers = () => {
    const serviceName:string = "Lost Chambers"
    const {data, isLoading} = useGetServiceTicketQuery({service:"lost-chambers"});

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
            <title>Book Lost Chambers Aquarium Tickets | Dubai Experience | Best Deals & Discounts</title>
            <meta name="description" content="The Lost Chambers Aquarium in Dubai is a fascinating attraction that immerses visitors in the mythical world of Atlantis. Located within the Atlantis The Palm resort on Palm Jumeirah, this aquarium offers an experience that combines stunning marine life exhibits with a narrative inspired by the legend of the lost city of Atlantis. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
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
          title={"Lost Chambers Aquarium Ticket"} 
          paragraph={"The Lost Chambers Aquarium, nestled within the iconic Atlantis, The Palm in Dubai, is a mesmerizing underwater wonderland that transports visitors to the mythical city of Atlantis. Imagine a lost city hidden beneath the sea for thousands of years. Well, the ancient ruins of Atlantis have finally been uncovered!. Home to over 65,000 marine animals, this aquarium is a true marvel. Sharks, rays, jellyfish, seahorses, and piranhas—all coexist in this captivating underwater realm. Delight in the groundbreaking AI aquarium, where experts guide you through an immersive marine life adventure."} 
          youTubeLink={"https://www.youtube.com/watch?v=0seS17_dhGM"}
          />

          {/* Why Visits*/}
          <TourWhyVisit serviceName={serviceName} whyVisitData={lostChambersWhyVistData}/>

          {/* Highlights */}
          <TourHomeHighlights serviceName={serviceName} highlightsData={lostChambersHighlightsData} />

          {/* Visit Plan */}
          <TourVisitPlan title={serviceName} tourVisitPlanData={lostChambersPlanVisitData} />

          {/* Additional Questions */}
          <TourHomeFaq quesData={lostChambersAdditionInfoData} title={"Additional Information"} />

          {/* MAP */}
          <TourHomeMap mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.1214426930505!2d55.1158284753797!3d25.131584777753325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f153faa386ad1%3A0x17ae2b10f488e39a!2sThe%20Lost%20Chambers%20Aquarium%20at%20Aquaventure%20World!5e0!3m2!1sen!2sin!4v1724780013124!5m2!1sen!2sin"} serviceName={serviceName} />

          {/* FAQ Questions */}
          <TourHomeFaq quesData={lostChambersTourHomeFAQ} title={`Frequently Asked Questions About ${serviceName}`} />
        </section>
    </>
  )
}

export default LostChambers