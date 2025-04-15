import { useState, useEffect } from 'react';

const StaticTestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "Can't Say Enough! especially about our Increase in revenue since Subscribing",
      name: "Samuel Mclean Sr",
      role: "Owner, The Real Samuel's Restaurant"
    },
    {
      quote: "Outstanding service, we have seen an Increase in Online Visibility and Customer Base Advertising on the App",
      name: "Lorenzo Fulton",
      role: "Owner, Fully Catered Restaurant"
    },
    {
      quote: "This is an awesome Idea, I love the interactive map and Popup Advertisements! I can't wait until it goes viral",
      name: "Jonathan Dixson",
      role: "Customer, User"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrentIndex(prev => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  const goTo = (index) => setCurrentIndex(index);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8 relative">
        {/* Single testimonial displayed at a time */}
        <div className="text-center">
          <svg className="w-10 h-10 mx-auto mb-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          
          <p className="text-lg md:text-xl text-gray-800 italic mb-8">
            "{testimonials[currentIndex].quote}"
          </p>
          
          <div>
            <p className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
            <p className="text-gray-600">{testimonials[currentIndex].role}</p>
          </div>
        </div>

        {/* Navigation */}
        <button 
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        
        <button 
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-700' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticTestimonialCarousel;