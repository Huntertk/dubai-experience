import '../../../styles/tourHomeHighlights.scss'
import TourHomeCardHighlightsDetails from './TourHomeCardHighlightsDetails'

const TourHomeHighlights = ({serviceName, highlightsData, title}) => {
  return (
    <section className='tourHomeHighlightsMainContainer'>
        <h1>Highlights {serviceName}</h1>
        <div className="cardMainContainer" 
        style={{
          gridTemplateColumns:`repeat(${highlightsData.length}, 350px)`
      }}
        >
            <TourHomeCardHighlightsDetails cardData={highlightsData}  title={title}/>
        </div>
    </section>
  )
}

export default TourHomeHighlights