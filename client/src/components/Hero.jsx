
import React, { useState, useEffect } from 'react';

export default function Hero({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 9000); 

        
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="relative w-full h-[100vh] overflow-hidden ">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                        index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                    } ${
                        index === currentIndex - 1 || (index === images.length - 1 && currentIndex === 0)
                            ? '-translate-x-full'
                            : ''
                    }`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

           
            <div className="absolute bottom-5 w-full flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? 'bg-white' : 'bg-gray-400'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
