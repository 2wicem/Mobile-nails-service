import { useState } from 'react';
import './css/Signuplogin.css';

const Signuplogin = () => {

    const [action,setAction] = useState("Login")

  return (
          <form className="container" action='signup.php' method='POST'>
                 <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                 </div>
        <div className="inputs">
                 {action==="Login"?<div></div>:
            <div className="input">
                  <img src="" alt="User icon" />
                  <input type='text' name='name' id='name' placeholder='Name' required/>
            </div>}
            
            <div className="input">
                <img src="" alt="Email icon" />
                <input type='email' name='email' id='email' placeholder='Email Id' required/>
            </div>

            <div className="input">
                <img src="" alt="Password icon" />
                <input type='password' name='password' id='password' placeholder='Password'/>
            </div>

            
            {action==="Sign up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here</span></div>}
            
            <div className="submit-container">
                 <div className={action==="login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div> 
                <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
          </form>
      )
}

export default Signuplogin
