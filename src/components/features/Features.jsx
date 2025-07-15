import React from 'react';
import './Features.css';

const Features = (props) => {
  return (
    <>
    <div className="feature">
      <div className="feature-img">
        <img src={props.path} alt='feature-image'/>
      </div>

      <div className="feature-content">
        <p className="f-c-main-para">
          {props.value}

        </p>
        <p className='sub-heading'> {props.heading}</p>
      </div>

    </div>
  
    </>
      
    
  )
}

export default Features
