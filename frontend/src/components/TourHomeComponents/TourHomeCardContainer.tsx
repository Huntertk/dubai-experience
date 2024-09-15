import '../../styles/tourHomeCardContainer.scss';
import TourHomeCard from './TourHomeCard';
import LoadingSpinner from '../Loader';
import { TypeBookingTicket } from '../../utils/type';

type TypeTourHomeCardContainerProps = {
  cardData:TypeBookingTicket[]
}

const TourHomeCardContainer = ({cardData}:TypeTourHomeCardContainerProps) => {
    if(!cardData){
      return <LoadingSpinner />
    }
    
  return (
    <section className='tourHomeCardMainContainer'>
    {cardData.map((data) => {
        return <TourHomeCard key={data._id} data={data} />
    })}
</section>
  )
}

export default TourHomeCardContainer