import '../../../styles/tourHomeWhyVisit.scss';

const TourWhyVisit = ({whyVisitData, serviceName}) => {
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
                    data.descList.map((list) => (
                        <li key={list.id}>
                            <span>{list.title} : </span>
                            {list.desc}
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