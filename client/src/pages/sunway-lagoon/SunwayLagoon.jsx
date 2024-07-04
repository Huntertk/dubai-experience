import { 
  TourHomeAdditionalInformation,
  TourHomeCardContainer, 
  TourHomeHighlights, 
  TourHomeMap, 
  TourHomeThingToDo, 
  TourHomeTopContainer, 
  TourWhyVisit
} from '../../components';
import '../../styles/tourHome.scss';
import {Helmet} from "react-helmet";
import { sunwayLagoonAdditionInfoData,  sunwayLagoonCardData, sunwayLagoonHighlighhtsData, sunwayLagoonThingsToDoData, sunwayLagoonTourHomeFAQ, sunwayLagoonWhyVistData } from './data';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialRender } from '../../redux/features/bookingSlice';
import { useGetBookingPlanDataQuery } from '../../redux/api/bookingPlanApi';
import LoadingSpinner from '../../components/LoadingSpinner';
import toast from 'react-hot-toast';

const SunwayLagoon = () => {
  const dispatch = useDispatch()
  const {data, isLoading, error, isSuccess} = useGetBookingPlanDataQuery({service:"sunway-lagoon"});

  useEffect(() => {
    dispatch(initialRender());
    if(error){
      toast.error("Something went wrong try again!")
    }
  },[]);

  if(isLoading){
    return <LoadingSpinner />
  }
  return (
    <>
    {/*Dynamic Title */}
      <Helmet>
        <title>Book Sunway Lagoon tickets | Malaysia Experience | Best Deals & Discounts</title>
        <meta name="description" content="Sunway Lagoon is a leading theme park in Malaysia, offering a dynamic blendof water and amusement attractions across six themed zones. With a wave pool, wildlife encounters, and cultural shows, Sunway Lagoon provides a memorable experience for all ages. Convenient facilities, events, and eco-friendly initiatives make it a top destination for both locals and tourists.|  ✓Best Prices ✓Online Reservations ✓Ticket Discounts Malaysia Experience" />
      </Helmet>
     <section className='tourHomeMainContainer'>
      <TourHomeTopContainer
          title={"Sunway Lagoon"}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          imgUrl={"https://i.postimg.cc/SQ3jTkPk/1-1.jpg"}
          />
      <TourHomeCardContainer cardData={data?.bookingPlan}  />
      <TourWhyVisit 
        whyVisitData={sunwayLagoonWhyVistData}
        serviceName={"Sunway Lagoon"}
      />
      <TourHomeThingToDo thingsToDoData={sunwayLagoonThingsToDoData} serviceName={"Sunway Lagoon"} />

      <TourHomeHighlights 
        serviceName={"Sunway Lagoon"} 
        highlightsData={sunwayLagoonHighlighhtsData}
        title={"Sunway Lagoon"}
      />
      {/*Additional Information */}
      <TourHomeAdditionalInformation title={"Additional Information"} quesData={sunwayLagoonAdditionInfoData} />

      {/*MAP */}
      <TourHomeMap serviceName={"Sunway Lagoon"} mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7968.190543005144!2d101.60187678716905!3d3.0692108376259797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c88dded3125%3A0xdb654cc77af0cdbc!2sSunway%20Lagoon!5e0!3m2!1sen!2sin!4v1712901818607!5m2!1sen!2sin"} />

      {/*FAQ */}
      <TourHomeAdditionalInformation title={"Frequently Asked Questions About Sunway Lagoon"} quesData={sunwayLagoonTourHomeFAQ} />
     </section>
    </>
  )
}

export default SunwayLagoon