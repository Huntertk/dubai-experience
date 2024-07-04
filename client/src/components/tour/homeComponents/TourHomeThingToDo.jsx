import TourHomeCardDetails from './TourHomeCardDetails'
import '../../../styles/tourHomeThingsToDo.scss'

const TourHomeThingToDo = ({serviceName, thingsToDoData}) => {
  return (
    <section className='tourHomeThingsToDoMainContainer'>
        <h1>Things you must try at {serviceName}</h1>
        <div className="cardMainContainer" 
        style={{
          gridTemplateColumns:`repeat(${thingsToDoData.length}, 350px)`
      }}
        >
            <TourHomeCardDetails cardData={thingsToDoData} />
        </div>
    </section>
  )
}

export default TourHomeThingToDo