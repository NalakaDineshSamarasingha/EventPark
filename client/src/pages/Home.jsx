import React from 'react'
import Hero from '../components/Hero'
import EventList from '../components/EventList';
import Offer from '../components/Offer';

function Home() {
  const images = [
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.webp',
];
  return (
    <div>
      <Hero images={images}/>
      <EventList/>
      <Offer/>
    </div>
  )
}

export default Home