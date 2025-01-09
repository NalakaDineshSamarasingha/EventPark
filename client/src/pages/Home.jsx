import React from 'react'
import Hero from '../components/Hero'
import EventList from '../components/EventList';
import Offer from '../components/Offer';
import Promotion from '../components/Promotion';
import Chill from '../components/Chill';
import Footer from '../components/Footer';

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
      <Promotion/>
      <Chill/>
    </div>
  )
}

export default Home