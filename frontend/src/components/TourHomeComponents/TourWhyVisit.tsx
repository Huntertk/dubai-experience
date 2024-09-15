import '../../styles/tourHomeWhyVisit.scss';
import { TypeTourWhyVisitAndTourVisitPlan } from '../../utils/type';


type TypeTourWhyVisitProps = {
    whyVisitData:TypeTourWhyVisitAndTourVisitPlan[];
    serviceName:string;
}

const TourWhyVisit = ({whyVisitData, serviceName}:TypeTourWhyVisitProps) => {
  return (
    <section className='tourHomeWhyVisitMainComponents'>
        
        <h1>Why Visit {serviceName} ?</h1>
        {
            whyVisitData.map((data) => (
                <div className="tourHomeWhyVisitMainContainer" key={data.id}>
            <div className="tourHomeWhyVisitCardContainer">
                <div className="tourHomeWhyVisitImgContainer">
                    <img src={data.imgUrl} alt={data.title} />
                </div>
            </div>
            <ul className="tourHomeWhyVisitDetailsContainer">
                {
                    data.descriptions.map((list) => (
                        <li key={list.id}>
                            <span>{list.title} : </span>
                            {list.description}
                        </li>
                    ))
                }
                
            </ul>
        </div>
            ))
        }
        
        
    </section>
  )
}

export default TourWhyVisit