import React from 'react'
import Hero from '../components/Hero'

function Home() {
  const images = [
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.webp',
];
  return (
    <div>
      <Hero images={images}/>
    </div>
  )
}

export default Home