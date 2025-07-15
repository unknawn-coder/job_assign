import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <>
    <div className="main-container">
    <div className="nav-container">
        <div className="school-logo">
            <img src='/images/Group1.png' alt='school-logo'/>
        </div>
        <div className="navigation-bar">
            <ul>
                <li>Books</li>
                <li>Courses</li>
                <li>Others</li>
                <li>Blog</li>
                <li><button>sign in</button></li>
            </ul>
        </div>
    </div>


    <div className="main-content">

        <div className="main-text">
            <p className='main-text-first-para'>Are you ready to learn?</p>

            <div className="main-headings">
            <h1 className='first-head'>Learn with fun</h1>
            <h1 className='second-head'>on&nbsp;</h1>
            <h1 className='third-head'>any Schedule</h1>
            </div>

            <p className='main-text-second-para'>Lorem ipsum, dolor sit amet consectetur </p>
            <p className='main-text-third-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button>Get Started</button>
            
        </div>

        <div className="main-img">
            <img src='/images/Frame.png' alt="main-img"/>

        </div>
    </div>
    </div>
    
      
    </>
  )
}

export default Navigation
