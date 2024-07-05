import '../../../styles/tourHomeThingsToDo.scss'

const TourHomeThingToDo = ({dubaiFrameTopThingsToDo}) => {
  return (
    <section className='tourHomeThingsToDoMainContainer'>
        <h1>Top things you can do in Dubai</h1>
          <div className="topThingstoDoContainer"
           style={{
              gridTemplateColumns:`repeat(${dubaiFrameTopThingsToDo.length}, 200px)`
          }}
          >
            {
              dubaiFrameTopThingsToDo.map((thingsToDo) => (
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