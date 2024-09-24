import TourHomeTopContainer from '../../components/TourHomeComponents/TourHomeTopContainer';
import '../../styles/home.scss';
import {Helmet} from "react-helmet";
import {
  dubaiFrameTopThingsToDo,
  dubaiAquariumAndUnderwaterZooAdditionInfoData,
  dubaiAquariumAndUnderwaterZooVisitData,
  dubaiAquariumAndUnderwaterZooTourHomeFAQ,
  dubaiAquariumAndUnderwaterZooWhyVistData,
  dubaiAquariumAndUnderwaterZooHighlightsData,
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
import coverImg from '/assets/images/dubaiZooAndAquariumTwo.jpg'
import TourHomeThingToDo from '../../components/TourHomeComponents/TourHomeThingToDo';
import TourYoutubeVideo from '../../components/TourHomeComponents/TourYoutubeVideo';
import TourVisitPlan from '../../components/TourHomeComponents/TourVisitPlan';

const DubaiAquariumAndUnderwaterZoo = () => {
    const serviceName:string = "Dubai Aquarium and Underwater Zoo"
    const {data, isLoading} = useGetServiceTicketQuery({service:"dubai-aquarium-and-underwater-zoo"});

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
            <title>Book Dubai Aquarium and Underwater Zoo Tickets | Dubai Experience | Best Deals & Discounts</title>
            <meta name="description" content="Book your Dubai Aquarium and Underwater Zoo tickets now. This impressive aquarium boasts a capacity of 10 million liters of water, making it one of the largest indoor aquariums globally. • Extended validity • Instant confirmation. ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Dubai Experience" />
        </Helmet>
        <section className='tourHomeMainContainer'>
        <TourHomeTopContainer
          title={serviceName}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          videoFile={undefined}
          imgUrl={coverImg}
          />
         { 
            data && <TourHomeCardContainer cardData={data}  />
         }

          {/* Top Things to do */}
          <TourHomeThingToDo topThingsToDo={dubaiFrameTopThingsToDo} />

          {/* Youtube */}
          <TourYoutubeVideo
          title={"Dubai Aquarium and Underwater Zoo"} 
          paragraph={"The Dubai Aquarium and Underwater Zoo, located in The Dubai Mall, is one of the largest suspended aquariums in the world. It features a massive 10-million-liter tank filled with a diverse range of marine life, including over 140 species, such as sharks, rays, and vibrant fish. Visitors can marvel at the massive glass viewing panel that allows for an immersive experience of the underwater world. The Underwater Zoo, situated above the aquarium, showcases various ecosystems, including rainforests and rocky shores. It houses creatures like otters, crocodiles, and even penguins. Interactive exhibits and daily feeding sessions provide a fascinating insight into marine biology and conservation efforts.The experience is enhanced by opportunities for activities like shark diving and glass-bottom boat rides, making it a must-visit for families and marine enthusiasts alike. "} 
          youTubeLink={"https://youtube.com/shorts/hj1WTNGIOo4?si=QLauzJsBEpKL986G"}
          />

          {/* Why Visits*/}
          <TourWhyVisit serviceName={serviceName} whyVisitData={dubaiAquariumAndUnderwaterZooWhyVistData}/>

          {/* Highlights */}
          <TourHomeHighlights serviceName={serviceName} highlightsData={dubaiAquariumAndUnderwaterZooHighlightsData} />

          {/* Visit Plan */}
          <TourVisitPlan title={serviceName} tourVisitPlanData={dubaiAquariumAndUnderwaterZooVisitData} />

          {/* Additional Questions */}
          <TourHomeFaq quesData={dubaiAquariumAndUnderwaterZooAdditionInfoData} title={"Additional Information"} />

          {/* MAP */}
          <TourHomeMap mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1692739795462!2d55.275925574471145!3d25.19751337771071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0x230b55e177a8dd29!2sDubai%20Aquarium%20%26%20Underwater%20Zoo!5e0!3m2!1sen!2sin!4v1727158245883!5m2!1sen!2sin"} serviceName={serviceName} />

          {/* FAQ Questions */}
          <TourHomeFaq quesData={dubaiAquariumAndUnderwaterZooTourHomeFAQ} title={`Frequently Asked Questions About ${serviceName}`} />
        </section>
    </>
  )
}

export default DubaiAquariumAndUnderwaterZoo;