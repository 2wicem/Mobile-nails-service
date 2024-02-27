
import React, {useState} from 'react'

import './css/Bookservice.css'

const Bookservice = () => {

const [selects, setSelects] = useState ();

  return (
    <>
    <div className="intro">
      <h1>Loooking out for an indoor or outdoor manicure or pedicure...?</h1>
      <h2>Indulge and give in to your passion by making an appointment with one of <span>The perfect nail techs </span> within the country</h2>
    </div>
    
        <form className='book' action='booking.php' method='POST'>
      <div className="inputs">
        <div className="name">
        <label>Name</label>
          <input type='text' placeholder="what's your first name?" name='name' required/>
        </div>
        <div className="phone">
        <label>phone</label>
          <input type='integer'  placeholder="what's your
           phone no.?" name='phone' required/>
        </div>
        <div className="service">
          <label>select service</label>
          <select className="dropdown" placeholder="select service" name='service' value={selects} onChange={e=>setSelects(e.target.value)} required>
            <option></option>
            <option> <li>Gel</li> <li>500</li></option>
            <option> <li>Tips and Gel</li> <li>1000</li></option>
            <option> <li>Builder</li> <li>1000</li></option>
            <option> <li>Tips and Builder</li> <li>1500</li></option>
            <option> <li>Acrylics</li> <li>2500</li></option>
            <option> <li>Art</li> <li>50</li></option>
          </select>
        </div>
        <div className="location">
        <label>location</label>
          <input type='text' placeholder="what's your location?" name='location' required/>
        </div>
        <div className="date">
        <label>date</label>
          <input type='text' placeholder="which date?" name='date' required/>
        </div>
        <div className="time">
        <label>time</label>
          <input type='text' placeholder="at what time?" name='time' required/>
        </div>
      </div>
    </form>
    </>
      )
}


/*const dropdown = (props) => {
  return (
    <div className='dropdown'>
      {props.service}
      {props.price}
    </div>
  )
}*/

export default Bookservice