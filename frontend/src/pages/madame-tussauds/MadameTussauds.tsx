import TourHomeTopContainer from '../../components/TourHomeComponents/TourHomeTopContainer';
import '../../styles/home.scss';
import {Helmet} from "react-helmet";
import {
  madameTussaudsAdditionInfoData,
  madameTussaudsHighlightsData,
  madameTussaudsPlanVisitData,
  lostChambersTopThingsToDo,
  madameTussaudsTourHomeFAQ,
  madameTussaudsWhyVistData,
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
import coverVid from '../../assets/video/madametussaudsdubaivid.mp4'
import TourHomeThingToDo from '../../components/TourHomeComponents/TourHomeThingToDo';
import TourYoutubeVideo from '../../components/TourHomeComponents/TourYoutubeVideo';
import TourVisitPlan from '../../components/TourHomeComponents/TourVisitPlan';

const MadameTussauds = () => {
    const serviceName:string = "Madame Tussauds Dubai"
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
            <title>Book Madame Tussauds Dubai Tickets | Dubai Experience | Best Deals & Discounts</title>
            <meta name="description" content="Book your Madame Tussauds Dubai tickets and enjoy access to all the sections and exhibits of the museum. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
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
          title={"Madame Tussauds Dubai Ticket"} 
          paragraph={"Madame Tussauds Dubai offers an immersive experience where you can get up close with lifelike wax figures of your favorite celebrities, historical figures, and sports icons. Located at Bluewaters Island, the attraction features themed zones that celebrate global icons from film, music, sports, and more. Visitors can enjoy engaging activities, take memorable photos, and explore the art of wax sculpture. It's a perfect destination for families, friends, and anyone looking to enjoy a unique blend of art and entertainment in Dubai"} 
          youTubeLink={"https://www.youtube.com/watch?v=V1zKWrQgKpQ"}
          />

          {/* Why Visits*/}
          <TourWhyVisit serviceName={serviceName} whyVisitData={madameTussaudsWhyVistData}/>

          {/* Highlights */}
          <TourHomeHighlights serviceName={serviceName} highlightsData={madameTussaudsHighlightsData} />

          {/* Visit Plan */}
          <TourVisitPlan title={serviceName} tourVisitPlanData={madameTussaudsPlanVisitData} />

          {/* Additional Questions */}
          <TourHomeFaq quesData={madameTussaudsAdditionInfoData} title={"Additional Information"} />

          {/* MAP */}
          <TourHomeMap mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.673746074311!2d55.120516874466574!3d25.079044777787196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f15e1f2f66a3d%3A0x67e085a5b8fed426!2sMadame%20Tussauds%20Dubai!5e0!3m2!1sen!2sin!4v1727249465963!5m2!1sen!2sin"} serviceName={serviceName} />

          {/* FAQ Questions */}
          <TourHomeFaq quesData={madameTussaudsTourHomeFAQ} title={`Frequently Asked Questions About ${serviceName}`} />
        </section>
    </>
  )
}

export default MadameTussauds