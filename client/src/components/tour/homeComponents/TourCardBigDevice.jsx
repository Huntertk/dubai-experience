import '../../../styles/tourCardBigDevice.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaCalendar } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaMobile } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";

const TourCardBigDevice = () => {
  return (
    <div className="tourCardBigDeviceMainContainer">
      <div className="tourCardImgContainer">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
          >
          <div className="imgContainer">
            <img src={"https://cdn-imgix.headout.com/media/images/6c6519b8db7ddab3f5381d54ee30032a-Frame-banner.jpg?auto=format&w=552&h=412.8&q=90&ar=3%3A4&crop=faces%2Ccenter&fit=crop"} alt={"img title"} />
          </div>
          <div className="imgContainer">
            <img src={"https://cdn-imgix.headout.com/media/images/00a9a2e3d6347c1a187a2bf48f043ab4-8541-TicketstoDubaiFrame--1.jpg?auto=format&w=552&h=412.8&q=90&ar=3%3A4&crop=faces%2Ccenter&fit=crop"} alt={"img title"} />
          </div>
        </Carousel>
      </div>
      <div className="tourCardDetailsContainer">
        <span>Ticket</span>
        <div className="tourCardDetailsWrapper">
          <h3>Dubai Frame Tickets</h3>
          <ul>
            <li>Get yourself tickets to the award-winning Dubai Frame - the world's largest picture frame and admire unbeaten views of the city.</li>
            <li>On one side, you'll notice iconic landmarks of modern Dubai, and on the other, you'll see older parts of the city.</li>
            <li>Check out the Dubai Frame Museum where you can learn about the city's past, present, and future in a fun and interactive way.</li>
          </ul>
        </div>
      </div>
      <div className="tourCardPricingContainer">
          <button>Book</button>
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