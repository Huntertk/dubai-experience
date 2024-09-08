import '../../../styles/tourCardSmallDevice.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { choosingBooking } from '../../../redux/features/bookingSlice';
const TourCardSmallDevice = ({data}) => { 
  const dispatch = useDispatch();
  const {type,service, title,pricing, preference, _id, timeSlots} = data;
  const navigate = useNavigate(); 

  const handleClick = () => {
    dispatch(choosingBooking({type, title, pricing, preference, service, bookingPlanId:_id, timeSlots}))
    return navigate("/date-select")
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