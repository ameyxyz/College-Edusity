import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Title from './Components/Title/Title.jsx';
import About from './Components/About/About.jsx';
import Campus from './Components/Campus/Campus.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx';

export const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      
      {/* 🔑 Add IDs to match Navbar links */}
      <section id="hero"><Hero/></section>

      <div className="container">
        <Title subTitle="Our Program" title="What We Offer"/>
        <section id="program"><Programs/></section>

        <section id="about"><About setPlayState={setPlayState} /></section>

        <Title subTitle="Gallery" title="Campus Photos"/>
        <section id="campus"><Campus/></section>

        <Title subTitle="TESTIMONIALS" title="What Students Say"/>
        <section id="testimonials"><Testimonials/></section>

        <Title subTitle="Contact Us" title="Get in Touch"/>
        <section id="contact"><Contact/></section>

        <Footer/>
      </div>

      {/* ✅ Correct prop name */}
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App;
