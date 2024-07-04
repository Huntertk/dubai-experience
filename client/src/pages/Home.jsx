import { 
  ImageSlider, 
  ToursGrid, 
  ProductContainer,
  Award
} from '../components';
import { homeToursData } from '../data';

import '../styles/home.scss';


const Home = () => {
  return (
    <section className='homeMainSection'>
      <ImageSlider />
      <ToursGrid data={homeToursData} title={"Explore New Destination"} />
      <ProductContainer />
      <Award />
    </section>
  )
}

export default Home