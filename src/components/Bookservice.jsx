
import React, {useState} from 'react'

import './css/Bookservice.css'

const Bookservice = () => {

const [selects, setSelects] = useState ();

  return (
    <>
    <div className="intro">
      <h1>Looking out for Manicure and pedicure services?</h1>
      <h2><u>Make an appointment</u> with one of <span>The perfect nails doc. </span> within the country</h2>
    </div>
        <form className='book' action='connect1.php' method='POST'>
      <div className="inputs">
        <div className="name">
        <label>Name</label>
          <input type='text' placeholder="what's your first name?" required/>
        </div>
        <div className="phone">
        <label>phone</label>
          <input type='integer'  placeholder="what's your
           phone no.?" required/>
        </div>
        <div className="service">
          <label>select service</label>
          <select className="dropdown" placeholder="select service" value={selects} onChange={e=>setSelects(e.target.value)} required>
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
          <input type='text' placeholder="what's your location?"required/>
        </div>
        <div className="date">
        <label>date</label>
          <input type='text' placeholder="which date?"required/>
        </div>
        <div className="time">
        <label>time</label>
          <input type='text' placeholder="at what time?" required/>
        </div>
      </div>
      <div className="submit">
        Book
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