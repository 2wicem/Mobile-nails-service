import { Component } from 'react';
import './css/Navbar.css';
import  logo from './images/logo.png';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  state = { clicked: false};
   handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
     }
  render () {
    return (
      <nav className="nav">
        <div className='logo'>
            <Link to='/'>
            <img className='label'  width="10%" src={logo} alt='Russiun Manicure'/>
            </Link>         
        </div>
        
         <h1><u>T. Urban 'nails' flex</u></h1>
         
         <div className='navlinks'>
                <ul id="links" className={this.state.clicked ? "#links active" : "#links"}>
                <li><Link to='/' className= 'active'>Home</Link></li>
                <li><Link to='/Viewservices'>View services</Link></li>
                <li><Link to='/Bookservice'> Book service</Link></li>
                <div className="account">    
                <li><Link to='/Signuplogin'>Create account</Link> </li>
                </div>
              </ul>
         </div>

            <div id="mobile" onClick={this.handleClick}>
            <i id='bars' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

      </nav>
          
        )
  } 
}

export default Navbar
