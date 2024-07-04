import '../../styles/product.scss';
import { CiStopwatch } from "react-icons/ci";
import {motion} from 'framer-motion';

const Product = ({data}) => {
  const easeScaleUp = {
    initial:{
      x:-100,
      opacity:0
    },
    whileInView:{
      x:0,
      opacity: 1
    },
  }
  return (
    <motion.div 
      className='productCardContainer'
      {...easeScaleUp}
    >
      <div className="productImgContainer">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="productContent">
        <h1>{data.title}</h1>
        <p>{data.tourPlace}</p>
        <div className="buttonContainer">
          <button>View Details</button>
        </div>
      </div>
    </motion.div>
  )
}

export default Product