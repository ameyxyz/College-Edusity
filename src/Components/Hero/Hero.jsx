import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We believe education is the pillar of world </h1>
        <p>Our modern curriculum helps students gain the knowledge, skills, and practical experience they need to succeed in today’s changing world of education.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt=""/></button>
      </div>

    </div>
  )
}

export default Hero