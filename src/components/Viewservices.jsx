import React from 'react'
import './css/Viewservices.css'
import { Carousel } from 'react-bootstrap'
import  v3 from './videos/v3.mp4'
import  video1 from './videos/video1.mp4'
import  video4 from './videos/video4.mp4'
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.css'
import { CarouselCaption } from 'react-bootstrap'


const Viewservices = () => {

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
    <section>
      <div className="section">
       <table>
        <thead>
          <tr>
            <th className='expand'>Service</th>
            <th className='expand'>Cost in ksh</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Just gel</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Builder + gel</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Tips + gel</td>
            <td>1000</td>
          </tr>
          <tr>
            <td> Tips Builder + gel</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>Gum gel</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>Aclyrics</td>
            <td>2500</td>
          </tr>
        </tbody>
      </table>
      </div>

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

    </section>
  )
}    

export default Viewservices
