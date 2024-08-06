import ReactPlayer from 'react-player/youtube';
import '../../../styles/tourYoutubeVideo.scss';

const TourYoutubeVideo = ({title, para, youTubeLink}) => {
  return (
    <div className='tourToutubeVideoMainContainer'>
        <h1>{title}</h1>
        <p>{para}</p>
        <ReactPlayer 
            url={`${youTubeLink}`} 
            width={"auto"} 
            height={"500px"}  
            className='react-player' 
            controls
        />
    </div>
  )
}

export default TourYoutubeVideo