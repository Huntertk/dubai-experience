import { useState } from 'react';
import '../../styles/tourVisitPlan.scss';
import { TypeTourWhyVisitAndTourVisitPlan } from '../../utils/type';

type TypeTourVisitPlanProps = {
    title:string;
    tourVisitPlanData:TypeTourWhyVisitAndTourVisitPlan[]
}

const TourVisitPlan = ({title, tourVisitPlanData}:TypeTourVisitPlanProps) => {

  const [tourPlan, setTourPlan] = useState<TypeTourWhyVisitAndTourVisitPlan>(tourVisitPlanData[0])
  
  return (
    <section className="tourVisitPlanSection">
      <div className="titleContainer">
        <h1>Plan Your Visit to The {title}</h1>
        <p>Make the most of your visit to the {title} by being informed and prepared</p>
      </div>
      <div className="tourVisitPlanMainContainer">
        <div className="tourVisitPlanBtnContainer">
          {
            ["Timing", "Getting There", "Visiting Rules", "Attractions Nearby", "Visitors Tips"].map((title, index) => (
                <button className={`btn ${tourPlan.title === title ? 'active' : ''}`} key={index} onClick={() => setTourPlan(tourVisitPlanData[index])}>
                  {title}
                </button>
            ))
          }
        </div>
        <div className="tourVisitPlanContainer">
        
            <div className="tourVisitPlanWrapperContainer" >
              <div className="tourVisitPlanCardContainer">
                  <div className="tourVisitPlanImgContainer">
                    <img src={tourPlan.imgUrl} alt={tourPlan.title} />
                  </div>
              </div>
              <ul className="tourVisitPlanDetailsContainer">
                  {
                      tourPlan.descriptions.map((list) => (
                          <li key={list.id}>
                              <span>{list.title} : </span>
                              {list.description}
                          </li>
                      ))
                  }
                  
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TourVisitPlan