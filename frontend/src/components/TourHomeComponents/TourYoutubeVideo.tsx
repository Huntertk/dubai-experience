import ReactPlayer from 'react-player/youtube';
import '../../styles/tourYoutubeVideo.scss';

type TypeTourYoutubeVideoComponentProps = {
    title:string;
    paragraph:string;
    youTubeLink:string;
}

const TourYoutubeVideo = ({title, paragraph, youTubeLink}:TypeTourYoutubeVideoComponentProps) => {
  return (
    <div className='tourToutubeVideoMainContainer'>
        <h1>{title}</h1>
        <p>{paragraph}</p>
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