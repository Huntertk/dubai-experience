import { useState } from 'react';
import '../../../styles/tourVisitPlan.scss';

const TourVisitPlan = ({title, tourVisitPlanData}) => {
  const [tourPlan, setTourPlan] = useState(tourVisitPlanData[0])
  return (
    <section className="tourVisitPlanSection">
      <div className="titleContainer">
        <h1>Plan Your Visit to The Dubai Frame</h1>
        <p>Make the most of your visit to the Dubai Frame by being informed and prepared</p>
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
                      tourPlan.descList.map((list) => (
                          <li key={list.id}>
                              <span>{list.title} : </span>
                              {list.desc}
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