import './css/slider.css'

const slider = () => {
    const videoProperties = [
        {
          id:1,
          title: 'v3',
          src: v3,
          credit: 'Video by mk'
        },
        {
          id:2,
          title: 'video1',
          src: video1,
          credit: 'Video by mk'
        },
        {
          id:3,
          title: 'video4',
          src: video4,
          credit: 'Video by mk'
        }
      ]
    
  return (
    <div className="videoslide">
    <Carousel>
      {videoProperties.map((videoObj) => {
        return (
          <Carousel.Item key={videoObj.id}>
            <ReactPlayer
            url= {videoObj.src}
            pip={true}
            controls={true}
            playing={''}
            />
            <CarouselCaption>
              <h3>{videoObj.title}</h3>
              <p>{videoObj.credit}</p>
            </CarouselCaption>
          </Carousel.Item>
        )
      })}
    </Carousel>
    </div>    
  )
}

export default slider
