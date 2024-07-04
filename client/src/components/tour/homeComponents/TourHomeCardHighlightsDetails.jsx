
const TourHomeCardHighlightsDetails = ({cardData, title}) => {
    return  (
        cardData.map((data) => {
            return <div className="card" key={data.id}>
                <img src={data.image} alt={title} />
                <div className="content">
                    <p>{data.desc}</p>
                </div>
            </div>
        })
    )
}

export default TourHomeCardHighlightsDetails