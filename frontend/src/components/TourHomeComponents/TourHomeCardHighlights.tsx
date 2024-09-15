import { TypeTourHighlights } from "../../utils/type"

type TypeTourHighlightCardProps= {
    cardData:TypeTourHighlights[];
    title:string
}

const TourHomeCardHighlights = ({cardData, title}:TypeTourHighlightCardProps) => {
    return  (
        cardData.map((data) => {
            return <div className="card" key={data.id}>
                <img src={data.image} alt={title} />
                <div className="content">
                    <p>{data.description}</p>
                </div>
            </div>
        })
    )
}

export default TourHomeCardHighlights