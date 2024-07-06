import '../../../styles/tourCardSmallDevice.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const TourCardSmallDevice = ({data}) => { 
  const dispatch = useDispatch();
  const {type,service, title,pricing, preference} = data;
  const navigate = useNavigate(); 

  const handleClick = () => {
    const searchParams = new URLSearchParams();
    searchParams.set('service-name', data.service);
    searchParams.set('tourId', data._id);
    const path = window.location.pathname + "date-select" +"?" + searchParams.toString();
    dispatch(choosingBooking({type, title, pricing, preference, service}))
    navigate(path)
  }

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
                <button
                  onClick={handleClick}
                >
                    Book Now
                </button>
            </div>
        </div>
  )
}

export default TourCardSmallDevice