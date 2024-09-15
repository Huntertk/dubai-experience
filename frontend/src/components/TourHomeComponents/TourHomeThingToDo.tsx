import { useRef } from 'react';
import '../../styles/tourHomeThingsToDo.scss';
import { FaCircleChevronLeft, FaCircleChevronRight} from "react-icons/fa6";
import { TypeTopThingsToDo } from '../../utils/type';

type TypeTourHomeTopThingsToDo = {
    topThingsToDo:TypeTopThingsToDo[]
}

const TourHomeThingToDo = ({topThingsToDo}:TypeTourHomeTopThingsToDo) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if(containerRef.current){
        containerRef.current.scrollBy({left:-250}) // Adjust the scroll amount
    }
  };
  const scrollRight = () => {
    if(containerRef.current){
        containerRef.current.scrollBy({left:250}) // Adjust the scroll amount
    }
  };

  return (
    <section className='tourHomeThingsToDoMainContainer'>
        <h1>Top things you can do in Dubai</h1>
        <button className='scrollLeftBtn' onClick={scrollLeft}>
          <FaCircleChevronLeft />
        </button>
        <button className='scrollRightBtn' onClick={scrollRight}>
          <FaCircleChevronRight />
        </button>
          <div className="topThingstoDoContainer"
          ref={containerRef}
           style={{
              gridTemplateColumns:`repeat(${topThingsToDo.length}, 200px)`
          }}
          >
            {
              topThingsToDo.map((thingsToDo) => (
                <div className="topThingstoDoCard" key={thingsToDo.id}>
                <img src={thingsToDo.imageUrl} alt={thingsToDo.title} />
                <h3>{thingsToDo.title}</h3>
              </div>
              ))
            }
          </div>
    </section>
  )
}

export default TourHomeThingToDo