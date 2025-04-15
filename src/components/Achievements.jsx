import React from 'react';

export default function Achievements() {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-1">What we have</h2>
          <h2 className="text-4xl font-bold">Achieved so far</h2>
        </div>
        
        {/* Image Gallery - Flex column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row  md:h-[460px] gap-6 mb-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
            <img 
              src="/frenssoccer.png" 
              alt="Group of young people playing soccer on the beach at sunset"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
            <img 
              src="/frenstoast.jpeg" 
              alt="People toasting with beer glasses at a barrel table, including a person in a wheelchair"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Stats Grid - 3 columns on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Stat 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
            <img src="/dot.svg" alt="Dot icon" className="h-10 w-10 mr-4 flex-shrink-0" />
            <p className="font-medium text-lg">Over 1k Happy Customers on Google Play and App Store</p>
          </div>
          
          {/* Stat 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
            <img src="/dot.svg" alt="Dot icon" className="h-10 w-10 mr-4 flex-shrink-0" />
            <p className="font-medium text-lg">210% Growth in Revenue</p>
          </div>
          
          {/* Stat 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
            <img src="/dot.svg" alt="Dot icon" className="h-10 w-10 mr-4 flex-shrink-0" />
            <p className="font-medium text-lg">New Business Subscriptions and Customer Growth Daily</p>
          </div>
          
          {/* Stat 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
            <img src="/dot.svg" alt="Dot icon" className="h-10 w-10 mr-4 flex-shrink-0" />
            <p className="font-medium text-lg">10yr+ of Expertise in Writing</p>
          </div>
          
          {/* Stat 5 */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
            <img src="/dot.svg" alt="Dot icon" className="h-10 w-10 mr-4 flex-shrink-0" />
            <p className="font-medium text-lg">172+ Website Ranked on Google</p>
          </div>
          
          {/* Stat 6 */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
            <img src="/dot.svg" alt="Dot icon" className="h-10 w-10 mr-4 flex-shrink-0" />
            <p className="font-medium text-lg">16+ Experts Copywriters</p>
          </div>
        </div>
      </div>
    </div>
  );
}