import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <>
     <div className="testimonial-container">
      <h1>Testimonial</h1>
      <div className="customer-review">
        <img src='/images/Ellipse5.png' alt='customer-image'/>
        <div className="paras">
        <p>There are many variations of passages of Lorem Ipsum available, but the</p>
            <p>majority have suffered alteration in some form, by injected humour,</p>
            <p>or randomised words which don't look even slightly believable.
        </p>
        </div>
        
      </div>
    </div>
      
    </>
  )
}

export default Testimonial
