import '../../../styles/tourHomeAdditionalInformation.scss';
import TourHomeQuestionContainer from './TourHomeQuestionContainer';

const TourHomeAdditionalInformation = ({quesData, title}) => {
  return (
    <section className='homeFAQMainContainer'>
            <h1>{title}</h1>
        <div className="questionMainContainer">
            {
                quesData.map((data) => {
                    return(
                        <TourHomeQuestionContainer key={data.id} data={data} />
                    )
                })
                
            }
        </div>
    </section>
  )
}

export default TourHomeAdditionalInformation