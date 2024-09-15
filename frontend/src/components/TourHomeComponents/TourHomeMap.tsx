
const TourHomeMap = ({serviceName, mapUrl}:{serviceName:string; mapUrl:string}) => {
  return (
    <div style={{margin:'2rem  auto', width: '100%', display:'flex', alignItems:'center', flexDirection:'column'}}>

      <h1 style={{margin:'1rem'}}>{serviceName}</h1>
      
      <iframe width="360" height="400" src={`${mapUrl}`}></iframe>
    </div>
  )
}

export default TourHomeMap