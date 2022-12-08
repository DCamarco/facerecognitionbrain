import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
    return (
      <div className='ma4 mt0'>
        <Tilt idName= "Tilt" className="br3 shadow-2 h4 w4" >
          <div className="pa2">
            <h1><img alt='logo' src={brain}/> </h1>
          </div>
        </Tilt>
      </div>
    );
}

export default Logo;
// style={{height: '5rem', width: '5rem'}}