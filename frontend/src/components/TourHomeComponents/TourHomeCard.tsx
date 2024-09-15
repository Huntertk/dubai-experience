import '../../styles/tourHomeCard.scss'
import { TypeBookingTicket } from '../../utils/type'
import TourCardBigDevice from './TourCardBigDevice'
import TourCardSmallDevice from './TourCardSmallDevice'

type TypeTourHomeCardProps = {
    data:TypeBookingTicket
}

const TourHomeCard = ({data}:TypeTourHomeCardProps) => {
  return (
    <section className='tourCardMainSection'>
        <TourCardBigDevice data={data} />
        <TourCardSmallDevice data={data} />
    </section>
    
  )
}

export default TourHomeCard