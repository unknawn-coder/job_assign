import React from 'react';
import './App.css'
import Navigation from './components/navigation/Navigation.jsx';
import Features from './components/features/Features.jsx';
import Courses from './components/courses/Courses.jsx';
import Testimonial from './components/testimonial/Testimonial.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <div className="cons">
    <Features path='/images/image1.png' value='1500+ Topic' heading='Learn Anything'/>
    <Features path='/images/image4.png' value='1800+ Students' heading='Learn Anything'/>
    <Features path='/images/image2.png' value='9K+ Test Token' heading='Learn Anything'/>
    <Features path='/images/image3.png' value='2000+ Student' heading='Learn Anything'/>
    
    
    </div>

    <div className="courses-info">
      <h1>Online Courses</h1>
      <div className="all-courses">
        <Courses path='/images/Rectangle6.png'/>
        <Courses path='/images/Rectangle13.png'/>
        <Courses path='/images/Rectangle15.png'/>
      </div>
    </div>

    <Testimonial/>
    <Footer/>


   
      
    </>
  )
}

export default App
