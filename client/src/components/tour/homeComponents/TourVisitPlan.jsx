import '../../../styles/tourVisitPlan.scss';

const TourVisitPlan = ({title, tourVisitPlanData}) => {
  return (
    <section className="tourVisitPlanSection">
      <div className="titleContainer">
        <h1>Plan Your Visit to The Dubai Frame</h1>
        <p>Make the most of your visit to the Dubai Frame by being informed and prepared</p>
      </div>
      <div className="tourVisitPlanMainContainer">
        <div className="tourVisitPlanBtnContainer">
          <button className="btn active">
            Timing
          </button>
          <button className="btn">
            Getting There
          </button>
          <button className="btn">
            Visiting Rules
          </button>
          <button className="btn">
            Attractions Nearby
          </button>
          <button className="btn">
            Visitors Tips
          </button>
        </div>
        <div className="tourVisitPlanContainer">
        {
          tourVisitPlanData.map((data) => (
            <div className="tourVisitPlanWrapperContainer" key={data.id}>
              <div className="tourVisitPlanCardContainer">
                  <div className="tourVisitPlanImgContainer">
                    <img src={data.imgUrl} alt={data.title} />
                  </div>
              </div>
              <ul className="tourVisitPlanDetailsContainer">
                  {
                      data.descList.map((list) => (
                          <li key={list.id}>
                              <span>{list.title} : </span>
                              {list.desc}
                          </li>
                      ))
                  }
                  
              </ul>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourVisitPlan