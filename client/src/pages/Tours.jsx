import '../styles/tours.scss';
import { ToursGrid } from '../components';
import { availableToursData } from '../data';
import {Helmet} from "react-helmet";
const Tours = () => {
  return (
    <>
     {/*Dynamic Title */}
     <Helmet>
        <title>Malaysia Experience - Tours | Best Deals & Discounts</title>
      </Helmet>
      <section className='toursMainSection'>
        <ToursGrid data={availableToursData} title={"Tours Availabe"} />
      </section>
    </>
  )
}

export default Tours