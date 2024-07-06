import '../../../styles/tourCardSmallDevice.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const TourCardSmallDevice = ({data}) => {
  
  return (
    <div className="tourCardSmallDeviceMainContainer">
         <div className="tourCardImgContainer">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
          >
            {
              data.image.map((img, index) => (
                <div className="imgContainer" key={index}>
                  <img src={img} alt={data.title} />
                </div>
              ))
            }
          
        </Carousel>
      </div>
            <div className="tourCardDetailsContainer">
                <span>Tickets</span>
                <h3>{data.title}</h3>
                <p>{data.desc[0]}</p>
                <span>Next available : Tomorrow</span>
            </div>
            <div className="cardBtnContainer">
                <button>
                    Book Now
                </button>
            </div>
        </div>
  )
}

export default TourCardSmallDevice