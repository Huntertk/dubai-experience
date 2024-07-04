
const TourHomeCardDetails = ({cardData}) => {
    return  (
        cardData.map((data) => {
            return <div className="card" key={data.id}>
                <img src={data.image} alt={data.title} />
                <div className="content">
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                </div>
            </div>
        })
    )
}

export default TourHomeCardDetails