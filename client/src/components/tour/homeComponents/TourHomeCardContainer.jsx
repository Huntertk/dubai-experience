import '../../../styles/tourHomeCardContainer.scss';
import TourHomeCard from './TourHomeCard';
import LoadingSpinner from '../../LoadingSpinner';

const TourHomeCardContainer = ({cardData}) => {
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