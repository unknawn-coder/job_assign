import React from 'react'
import './Courses.css';

const Courses = (props) => {
  return (
    <>
    <div className="course">
     
      
      <img className='course-main-img' src={props.path} alt='course-image'/>

      <div className="course-text">
        <p className="course-name">Modern Psychology</p>
        <p className="course-sub-heading">Designation</p>
      </div>

      <button>Buy Course</button>

      <div className="course-additional-detail">
        <div className="starting-details">
          <img src='/images/calendar-outline1.png' alt='date-logo'/>
          <p>Start 20 April,2021</p>
          
        </div>

        <div className="course-seats">
          <img src='/images/people-outline1.png' alt='seat-logo'/>
          <p>60 seats</p>


        </div>
      </div>

     
    </div>
      
    </>
  )
}

export default Courses
