import '../../../styles/tourCardBigDevice.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaCalendar } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaMobile } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { choosingBooking } from '../../../redux/features/bookingSlice';

const TourCardBigDevice = ({data}) => {
  const dispatch = useDispatch();
  const {type,service, title,pricing, preference} = data;
  const navigate = useNavigate(); 

  const handleClick = () => {
    const searchParams = new URLSearchParams()
    searchParams.set('service-name', data.service)
    searchParams.set('tourId', data.uid)
    const path = window.location.pathname + "date-select" +"?" + searchParams.toString();
    dispatch(choosingBooking({type, title, pricing, preference, service}))
    navigate(path)
  }

  return (
    <div className="tourCardBigDeviceMainContainer">
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
        <span>Ticket</span>
        <div className="tourCardDetailsWrapper">
          <h3>{data.title}</h3>
          <ul>
            {
              data.desc.map((d, index) => (
                <li key={index}>{d}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="tourCardPricingContainer">
          <button onClick={handleClick}>Book</button>
          <div className="tourCardHighlights">
            <p>Next available : Tomorrow</p>
            <div className="iconContainer">
              <div className="icon">
                <FaCalendar />
                <span>Extended validity</span>
              </div>
              <div className="icon">
                <AiFillThunderbolt />
                <span>Instant confirmation</span>
              </div>
              <div className="icon">
                <FaMobile />
                <span>Mobile ticket</span>
              </div>
              <div className="icon">
                <FaRegClock />
                <span>Flexible duration</span>
              </div>
              <div className="icon">
                <GiCancel />
                <span>No Cancellation</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TourCardBigDevice