import '../../styles/toursGrid.scss';
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';

const ToursGrid = ({data, title}) => {
  const navigate = useNavigate()
    const easeScaleUp = {
        initial:{
          scale:0,
          opacity:0
        },
        whileInView:{
          scale:1,
          opacity: 1
        },
      }
  return (
    <section className='toursGridMainSection'>
        <h1>{title}</h1>
        <div className="toursGridContainer">
            {
                data.map((tour) => (
                    <motion.div 
                        className="gridItem" 
                        key={tour.id}
                        {...easeScaleUp}
                        onClick={() => navigate(`/${tour.slug}`)}
                    >
                        <img src={tour.img} alt={tour.title} />
                        <h1>{tour.title}</h1>
                    </motion.div>
                ))
            }
        </div>
    </section>
  )
}

export default ToursGrid