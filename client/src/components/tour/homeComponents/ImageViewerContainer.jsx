import '../../../styles/imageViewer.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { IoClose } from "react-icons/io5";

const ImageViewerContainer = ({imgData, setImageViwer}) => {

  return (
    <div className="carouselContainer">
    <IoClose onClick={() => setImageViwer(false)} /> 
    <Carousel
     showThumbs={false}
     autoPlay={true}
     infiniteLoop={true}
    >
        {
            imgData.map((im, i) => (
                <div className="imgContainer" key={i}>
                <img src={im} alt={imgData.title} />
            </div>
            ))
        }
        </Carousel>
</div>
  )
}

export default ImageViewerContainer