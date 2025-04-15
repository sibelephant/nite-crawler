import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialCarousel1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredTestimonials = [
    {
      stars: 5,
      quote:
        "This is an awesome Idea, I love the interactive map and Popup Advertisements! I can't wait until it goes viral",
      name: "Jonathan Dixson",
      role: "Customer, User",
      image: true,
    },
    {
      stars: 5,
      quote:
        "The marketing approach completely transformed our online presence and sales funnel",
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: true,
    },
    {
      stars: 5,
      quote:
        "We've seen a 200% increase in qualified leads since implementing this strategy",
      name: "Michael Chen",
      role: "Business Owner",
      image: true,
    },
  ];

  const regularTestimonials = [
    {
      stars: 5,
      title: "Love their Marketing Strategy",
      company: "Fulton's Catering Co, NC",
    },
    {
      stars: 5,
      title: "A True Advertisement Game Changer",
      company: "Snapped By Nas, NY",
    },
    {
      stars: 5,
      title: "Love When New Customers Just Drop In Off An Ad",
      company: "Global Affairs & Events, TX",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredTestimonials.length - 1 : prevIndex - 1
    );
  };

  // Display all three regular testimonials in a row with hover effects
  const renderRegularTestimonials = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {regularTestimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          >
            <div className="flex text-orange-500 mb-2">
              {Array(testimonial.stars)
                .fill()
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
            </div>
            <h3 className="text-lg font-semibold mb-2">{testimonial.title}</h3>
            <p className="text-gray-600">{testimonial.company}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            Client Experiences, Unfiltered:
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-blue-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.5 8.5 2 9.8l5 4.9-1.2 7.3L12 18l6.2 4-1.2-7.3 5-4.9-7.5-1.3z" />
              </svg>
            </span>
            <h3 className="text-3xl text-blue-500 font-semibold">
              Raving Testimonials
            </h3>
          </div>
        </div>

        {/* Regular testimonials with star ratings that pop up on hover */}
        {renderRegularTestimonials()}

        {/* Featured testimonial carousel with navigation */}
        <div className="relative ">
          <div className="overflow-hidden mx-auto relative flex w-full">
            {featuredTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4 transition-all duration-500 w-full flex-1 ${
                  currentIndex === index
                    ? "opacity-100 translate-x-0 z-10"
                    : index < currentIndex
                      ? "opacity-0 -translate-x-full z-0"
                      : "opacity-0 translate-x-full z-0"
                } ${
                    index === 0 ? 'relative' : 'absolute left-0 top-0'
                }`}
                style={{
                  transform:
                    currentIndex === index
                      ? "translateX(0)"
                      : index < currentIndex
                        ? "translateX(-100%)"
                        : "translateX(100%)",
                  opacity: currentIndex === index ? 1 : 0,
                  // position: "relative",
                }}
              >
                <div className="w-full md:w-1/2 bg-blue-500 rounded-lg">
                  <div className="rounded-lg overflow-hidden bg-blue-500 aspect-square flex items-center justify-center p-4">
                    <div className="bg-blue-500 w-full h-full flex items-center justify-center">
                      <img
                        src="/api/placeholder/400/400"
                        alt="Client"
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="text-gray-800">
                    <p className="text-2xl font-bold mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center mt-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src="/api/placeholder/48/48"
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                        </p>
                      </div>

                      <div className="flex justify-center items-end mt-2 space-x-2">
                        <button
                          onClick={prevSlide}
                          className="bg-red-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors duration-300"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors duration-300"
                          aria-label="Next slide"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>  
      </div>
    </div>
  );
}
