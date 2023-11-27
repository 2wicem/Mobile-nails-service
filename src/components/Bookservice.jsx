import './css/Bookservice.css'

const Bookservice = () => {
  return (
    <div  className='book'>
      <div className="inputs">
        <div className="name">
          <input type='text' placeholder='name'/>
        </div>
        <div className="phone">
          <input type='integer'  placeholder='phone'/>
        </div>
        <div className="service">
          <input type='text' placeholder='select service'/>
          <div className="sub-menu">
            <ul>
              <li>gel</li>
              <li>gel</li>
              <li>gel</li>
              <li>gel</li>
              <li>gel</li>
              <li>gel</li>
            </ul>
          </div>
        </div>
        <div className="location">
          <input type='text' placeholder='location'/>
        </div>
        <div className="date">
          <input type='text' placeholder='date eg 31'/>
        </div>
        <div className="time">
          <input type='text' placeholder='time'/>
        </div>
      </div>
      <div className="submit">
        
      </div>
    </div>
  )
}

export default Bookservice
