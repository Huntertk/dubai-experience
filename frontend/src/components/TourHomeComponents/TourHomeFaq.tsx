import '../../styles/tourHomeFaq.scss';
import { TypeFAQAndAdditionQuestion } from '../../utils/type';
import TourHomeQuestionContainer from './TourHomeQuestionContainer';

type TypeTourHomeFaqProps = {
    quesData:TypeFAQAndAdditionQuestion[];
    title:string;
}

const TourHomeFaq = ({quesData, title}:TypeTourHomeFaqProps) => {
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

export default TourHomeFaq