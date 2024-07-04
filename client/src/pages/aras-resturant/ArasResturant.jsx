import { 
  TourHomeAdditionalInformation, 
  TourHomeCardContainer, 
  TourHomeHighlights, 
  TourHomeMap, 
  TourHomeTopContainer, 
  TourWhyVisit 
} from '../../components';

import { 
  arasResturantAdditionInfoData, 
  arasResturantCardData, 
  arasResturantHighlighhtsData, 
  arasResturantTourHomeFAQ, 
  arasResturantWhyVistData 
} from './data';

import '../../styles/tourHome.scss';
import {Helmet} from "react-helmet";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialRender } from '../../redux/features/bookingSlice';
import { useGetBookingPlanDataQuery } from '../../redux/api/bookingPlanApi';
import LoadingSpinner from '../../components/LoadingSpinner';

const ArasResturant = () => {
  const dispatch = useDispatch()
  const {data, isLoading, error, isSuccess} = useGetBookingPlanDataQuery({service:"aras-resturant"});

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
        <title>Book Aras Resturant Tickets | Malaysia Experience | Best Deals & Discounts</title>
        <meta name="description" content="ARAS Restaurant KL Tower Buffet ... Experience great food while enjoying the gorgeous view of the whole Kuala Lumpur on top of KL Tower.! ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Malaysia Experience" />
      </Helmet>
     <section className='tourHomeMainContainer'>
      <TourHomeTopContainer
          title={"Aras Resturant"}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          imgUrl={"https://i.postimg.cc/gcVBqRKf/17.jpg"}
          />
       <TourHomeCardContainer cardData={data?.bookingPlan}  />   

       <TourWhyVisit 
        whyVisitData={arasResturantWhyVistData}
        serviceName={"Aras Resturant"}
      />

      <TourHomeHighlights 
        serviceName={"Aras Resturant"} 
        highlightsData={arasResturantHighlighhtsData}
        title={"Aras Resturant"}
      />

      <TourHomeAdditionalInformation title={"Additional Information"} quesData={arasResturantAdditionInfoData} />
      <TourHomeMap serviceName={"Aras Resturant"} mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.780139229368!2d101.6988310720154!3d3.152600388630541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c20b18d81d%3A0x3bc50ed3fab4a4b0!2sARAS%20Restaurant%20KL%20Tower!5e0!3m2!1sen!2sin!4v1712253687142!5m2!1sen!2sin"} />

      {/*FAQ */}
      <TourHomeAdditionalInformation title={"Frequently Asked Questions About Aras Resturant"} quesData={arasResturantTourHomeFAQ} />
     </section>
    </>
  )
}

export default ArasResturant