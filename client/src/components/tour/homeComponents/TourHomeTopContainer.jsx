import '../../../styles/tourHomeTopContainer.scss';

const TourHomeTopContainer = ({title, desc,imgUrl,videoFile=false}) => {
  return (
    <section className='tourHomeTopContainer'>
        <div className="content">
            <h1>Book {title} Ticket</h1>
            <p>{desc}</p>
        </div>
        <div className="tourHomeTopImgContainer">
          {
            videoFile ? (
              <div className="videoWrapper">
                <video 
                  className='video'
                  src={videoFile}
                  loop
                  autoPlay
                  muted
                />
              </div>
            )  :  <img src={imgUrl} alt={title} />
          } 
        </div>
    </section>
  )
}

export default TourHomeTopContainer