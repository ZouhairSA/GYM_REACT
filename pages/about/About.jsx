import Header from '../../components/Header'
import React from 'react'
// import HeaderImage from '../../images/header_bg_1.jpg'
import HeaderImage from '../../images/a9.jpg'

import StoryImage from '../../images/ab1.jpg'
import VisionImage from '../../images/a4.jpg'
import MissionImage from '../../images/a8.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        <p> A gym is a facility that is equipped with a variety of exercise equipment and resources, such as treadmills, stationary bikes, weight machines, and free weights, to help people improve their physical fitness and health. Gyms may also offer a range of fitness classes, personal training services, and other resources to support people in their fitness goals.</p>
      </Header>

      <section className='about_story'>
        <div className='container about_story-container'>
          <div className='about_section-image'>
            <img src={StoryImage} alt="Our story image" />
          </div>
          <div className='about_section-content'>
            <h1>Our Story</h1>
            <p>
              Another Gym Story From PushPress PushPress, the makers of your favorite gym management software, is working on a new series, Gym Stories. We’d like to feature gyms in the community (PushPress client or not). We would like to tell your story to the world. If you’re a gym who’d like to tell your story, let us know here! We recently had the opportunity to sit down and chat with the team at CrossFit Dana Point about building a CrossFit community on the coast of Southern California
            </p>
          </div>
        </div>

      </section>
      <section className='about_Vision'>
        <div className='container about_Vision-container'>

          <div className='about_section-content'>
            <h1>Our Vision</h1>
            <p>
              Our vision for sport is to create a world where everyone has the opportunity to participate in and enjoy the physical, social, and mental benefits of sports. We believe that sport has the power to bring people together, promote health and wellness, and foster a sense of community and belonging. Our goal is to use sport to build a more inclusive, healthy, and connected society.
            </p>
          </div>
          <div className='about_section-image'>
            <img src={VisionImage} alt="Our Vision image" />
          </div>
        </div>

      </section>
      <section className='about_mission'>
        <div className='container about_mission-container'>
          <div className='about_section-image'>
            <img src={MissionImage} alt="Our Mission image" />
          </div>
          <div className='about_section-content'>
            <h1>Our Mission</h1>
            <p>
              Our mission for sport is to promote and facilitate the development and growth of sports programs and opportunities for all individuals, regardless of their background or circumstances. We strive to create inclusive and accessible sports environments that foster physical, social, and mental well-being, and we work to promote the values of sportsmanship, fair play, and respect for all. Our ultimate goal is to use sport as a tool to bring people together, promote health and wellness, and build stronger, more connected communities.
            </p>
          </div>
        </div>

      </section>
    </>
  )
}

export default About
