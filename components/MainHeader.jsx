import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'
// import Image from '../images/kik.jpg'


const MainHeader = () => {
  return (
    <div>
      <header className='main_header'>
        <div className='container main_header-container'>
          <div className="main_header-left">
            <h4>#100DsysOfWorkOut</h4>
            <h1>Join The Legends Of The Fitness World</h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse dicta autem nobis laborum totam.</p> */}
            <p>A gym is a facility that is equipped with various exercise machines and equipment, as well as trained staff, that is designed to help people improve their physical fitness through exercise and other physical activity. Gyms may offer a wide range of activities, including weight training, cardio exercise, group fitness classes, and personal training services. </p>
            <Link to='/plans' className='btn lg'>Get Started</Link>
          </div>
          <div className="main_header-right">
            <div className="main_header-circle"></div>
            <div className="main_header-image">
              <img src={Image} alt="Main Header Image" />
            </div>
          </div>

        </div>

      </header>
    </div>
  )
}

export default MainHeader
