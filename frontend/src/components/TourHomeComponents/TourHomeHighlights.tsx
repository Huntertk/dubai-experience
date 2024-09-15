import { useRef } from 'react';
import '../../styles/tourHomeHighlights.scss'
import { TypeTourHighlights } from '../../utils/type';
import TourHomeCardHighlights from './TourHomeCardHighlights'
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

type TypeTourHomeHighlightsProps = {
    serviceName:string;
    highlightsData:TypeTourHighlights[]
}

const TourHomeHighlights = ({serviceName, highlightsData}:TypeTourHomeHighlightsProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
      if(containerRef.current){
          containerRef.current.scrollBy({left:-353}) // Adjust the scroll amount
      }
    };
    const scrollRight = () => {
      if(containerRef.current){
          containerRef.current.scrollBy({left:353}) // Adjust the scroll amount
      }
    };
  
  return (
    <section className='tourHomeHighlightsMainContainer'>
        <h1>Highlights {serviceName}</h1>
        <button className='scrollLeftBtn' onClick={scrollLeft}>
          <FaCircleChevronLeft />
        </button>
        <button className='scrollRightBtn' onClick={scrollRight}>
          <FaCircleChevronRight />
        </button>
        <div className="cardMainContainer" 
         ref={containerRef}
        style={{
          gridTemplateColumns:`repeat(${highlightsData.length}, 350px)`
      }}
        >
            <TourHomeCardHighlights cardData={highlightsData}  title={serviceName}/>
        </div>
    </section>
  )
}

export default TourHomeHighlights