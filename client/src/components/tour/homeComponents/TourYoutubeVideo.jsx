import ReactPlayer from 'react-player/youtube';
import '../../../styles/tourYoutubeVideo.scss';

const TourYoutubeVideo = ({title, para}) => {
  return (
    <div className='tourToutubeVideoMainContainer'>
        <h1>{title}</h1>
        <p>{para}</p>
        <ReactPlayer 
            url={`https://www.youtube.com/watch?v=ennLZx3d6d0`} 
            width={"auto"} 
            height={"500px"}  
            className='react-player' 
            controls
        />
    </div>
  )
}

export default TourYoutubeVideo