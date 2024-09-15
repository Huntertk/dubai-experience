import '../../styles/tourCardBigDevice.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaTicket } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { GiCancel } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { TypeBookingTicket } from '../../utils/type';
import { useAppDispatch } from '../../redux/hook';
import { selectingTicket } from '../../redux/feature/bookingSlice';

type TypeTourHomeCardProps = {
    data:TypeBookingTicket
}

const TourCardBigDevice = ({data}:TypeTourHomeCardProps) => {
  
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
    <div className="tourCardBigDeviceMainContainer">
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
        <span>Ticket</span>
        <div className="tourCardDetailsWrapper">
          <h3>{data.title}</h3>
          <ul>
            {
              data.description.map((d, index) => (
                <li key={index}>{d}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="tourCardPricingContainer">
          <button onClick={handleClick}>Book Now</button>
          <div className="tourCardHighlights">
            <p>Next available : Tomorrow</p>

            <div className="iconContainer">
                {
                    data.inclusionAndExclusion.inclusion.map((inclusion, i) => (
                        <div className="icon" key={i}>
                            <SiTicktick />
                            <span>{inclusion}</span>
                        </div>
                    ))
                }
             {
                data.inclusionAndExclusion.cancellationPolicy.map((cancellation,i) => (
                    <div className="icon" key={i}>
                    <FaTicket />
                    <span>{cancellation}</span>
                  </div>
                ))
             }
                {
                 data.inclusionAndExclusion.exclusion.map((exclusion, i) => (
                        <div className="icon" key={i}>
                            <GiCancel />
                            <span>{exclusion}</span>
                        </div>
                    ))
                }
            </div>
          </div>
      </div>
    </div>
  )
}

export default TourCardBigDevice