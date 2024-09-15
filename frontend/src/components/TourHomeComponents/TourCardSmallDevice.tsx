import '../../styles/tourCardSmallDevice.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import { TypeBookingTicket } from '../../utils/type';
import { useAppDispatch } from '../../redux/hook';
import { selectingTicket } from '../../redux/feature/bookingSlice';

type TypeTourHomeCardProps = {
    data:TypeBookingTicket
}

const TourCardSmallDevice = ({data}:TypeTourHomeCardProps) => { 

  const navigate = useNavigate(); 
  const dispatch = useAppDispatch();
  
  const handleClick = () => {

    dispatch(selectingTicket({
      service:data.service,
      ticketId:data._id,
      pricing:data.pricing,
      preferenceOption:data.preference,
      ticketTitle:data.title,
      timeSlots:data.timeSlots
    }))
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
              data.images.map((img, index) => (
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
                <p>{data.description[0]}</p>
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