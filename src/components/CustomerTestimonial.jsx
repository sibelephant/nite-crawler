

export default function CustomerTestimonial() {
  return (
    <div className="w-full bg-inherit p-6">
      <div className="max-w-6xl mx-auto">
        {/* Container that becomes column on small screens */}
        <div className="flex flex-col lg:flex-row items-center gap-6 rounded-xl overflow-hidden shadow-lg">
          
          {/* Left content section */}
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Customer Say Makes Us <span className="text-blue-500">✦ Special</span>
            </h2>
            
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10  rounded-lg flex items-center justify-center">
                  <img src="/eraser.svg"  className="h-6 w-6" alt="" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Never get to Miss out</h3>
                  <p className="text-gray-600 mt-1">Geolocation based advertising and customer directory anywhere in the world, free customer access, low cost business advertising</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10  rounded-lg flex items-center justify-center">
                  <img src="/wand.svg"  className="h-6 w-6" alt="" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Your Preference is Our Choice</h3>
                  <p className="text-gray-600 mt-1">Email, SMS, Phone, App notifications available to receive promotional information</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10  rounded-lg flex items-center justify-center">
                    <img src="/speedometer.svg"  className="h-6 w-6" alt="" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">We Never Stop Improving</h3>
                  <p className="text-gray-600 mt-1">Our mission is to deliver convenience "Mastered", we need your positive feedback and criticism! Contact us 24 hours a day @ contact@nite-crawlers.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right image section */}
          <div className="w-full lg:w-1/2 bg-amber-100 ">
            <div className="h-full w-full overflow-hidden">
              <img 
                src="/testfrens2.jpeg" 
                alt="Three people sitting in a yellow chair with an orange textured background"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}