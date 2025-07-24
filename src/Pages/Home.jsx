import React from 'react'
import LandingPage from '../Sections/LandingPage'

import OurStory from '../Sections/OurStory'
import Footer from '../Sections/Footer'


const Home = () => {
  return (
    <>
        <LandingPage />
         <section id="about">
        <OurStory />
      </section>
      <Footer />
    </>
  )
}

export default Home