import '../../../styles/tourHomeTopContainer.scss';

const TourHomeTopContainer = ({title, desc,imgUrl}) => {
  return (
    <section className='tourHomeTopContainer'>
        <div className="content">
            <h1>Book {title} Ticket</h1> 
            {/* <p>Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction.</p> */}
            <p>{desc}</p>
        </div>
        <div className="tourHomeTopImgContainer">
            <img src={imgUrl} alt={title} />
        </div>
    </section>
  )
}

export default TourHomeTopContainer