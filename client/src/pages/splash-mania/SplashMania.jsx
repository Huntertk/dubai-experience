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
import { splashManiaAdditionInfoData, splashManiaCardData, splashManiaHighlighhtsData, splashManiaThingsToDoData, splashManiaTourHomeFAQ, splashmaniaWhyVistData } from './data';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialRender } from '../../redux/features/bookingSlice';
import { useGetBookingPlanDataQuery } from '../../redux/api/bookingPlanApi';
import LoadingSpinner from '../../components/LoadingSpinner';

const SplashMania = () => {
  const dispatch = useDispatch()
  const {data, isLoading, error, isSuccess} = useGetBookingPlanDataQuery({service:"splash-mania"});

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
        <title>Book Splash Mania Waterpark Tickets | Malaysia Experience | Best Deals & Discounts</title>
        <meta name="description" content="Learn about all your Splash Mania ticket options and book now to spend a day of family fun at one of Malaysia's most popular waterparks! ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Malaysia Experience" />
      </Helmet>
     <section className='tourHomeMainContainer'>
      <TourHomeTopContainer
          title={"Splash Mania"}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          imgUrl={"https://i.postimg.cc/BnSswGw4/splashmania-newtagline-2022-2.png"}
          />
      <TourHomeCardContainer cardData={data?.bookingPlan}  />
      <TourWhyVisit 
        whyVisitData={splashmaniaWhyVistData}
        serviceName={"Splash Mania"}
      />
      <TourHomeThingToDo thingsToDoData={splashManiaThingsToDoData} serviceName={"Splash Mania"} />

      <TourHomeHighlights 
        serviceName={"Splash Mania"} 
        highlightsData={splashManiaHighlighhtsData}
        title={"Splash Mania Waterpark"}
      />
      {/*Additional Information */}
      <TourHomeAdditionalInformation title={"Additional Information"} quesData={splashManiaAdditionInfoData} />

      {/*MAP */}
      <TourHomeMap serviceName={"Splash Mania"} mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.7480956078257!2d101.61384167396514!3d2.8888212970876856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb7057b2f621d%3A0xa82fe8b07ff5bb59!2sSplashMania%20WaterPark!5e0!3m2!1sen!2sin!4v1712253780966!5m2!1sen!2sin"} />

      {/*FAQ */}
      <TourHomeAdditionalInformation title={"Frequently Asked Questions About Splash Mania Waterpark"} quesData={splashManiaTourHomeFAQ} />
     </section>
    </>
  )
}

export default SplashMania