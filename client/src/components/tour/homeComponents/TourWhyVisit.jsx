import '../../../styles/tourHomeWhyVisit.scss';

const TourWhyVisit = ({whyVisitData, serviceName}) => {
  return (
    <section className='tourHomeWhyVisitMainComponents'>
        
        <h1>Why You Need to Visit {serviceName} ?</h1>
        <div className="tourHomeWhyVisitCardContainer">
            <div className="listData" style={{
                gridTemplateColumns:`repeat(${whyVisitData.length}, 350px)`,
            }}>
                {
                    whyVisitData.map((data) => {
                        return <p key={data.id}>
                        <img src={data.imgUrl} alt={data.title} /><br />
                        <span>{data.title}</span>{data.desc}<br/>
                    </p>
                    })
                }
                     
            </div>
        </div>
    </section>
  )
}

export default TourWhyVisit