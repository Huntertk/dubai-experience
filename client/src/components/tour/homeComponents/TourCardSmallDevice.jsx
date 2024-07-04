import '../../../styles/tourCardSmallDevice.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const TourCardSmallDevice = () => {
  return (
    <div className="tourCardSmallDeviceMainContainer">
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
                <span>Tickets</span>
                <h3>Dubai Frame Tickets</h3>
                <p>Get yourself tickets to the award-winning Dubai Frame.</p>
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