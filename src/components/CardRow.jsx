

const CardRow = () => {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Card 1 - Trending Spots */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 flex-1 min-w-0 
                       transform transition duration-500 hover:scale-105 hover:shadow-lg
                    animate-fadeInDelay1">
          <div className="w-12 h-12 bg-indigo-100 rounded mb-4 flex items-center justify-center text-indigo-600">
          <img src="/trending.svg" className="h-6 w-6" alt="" />
          </div>
          <h3 className="font-bold text-xl mb-3 font-urbanist">Trending Spots</h3>
          <p className="text-gray-600 font-urbanist">
            As a customer you get to see events and specials in real time on an interactive map,
            also view events and specials happening days even months ahead.
          </p>
        </div>

        {/* Card 2 - Get To Advertise */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 flex-1 min-w-0 
                       transform transition duration-500 hover:scale-105 hover:shadow-lg
                        animate-fadeInDelay2">
          <div className="w-12 h-12 bg-indigo-100 rounded mb-4 flex items-center justify-center text-indigo-600">
          <img src="/advertise.svg" className="h-6 w-6" alt="" />
          </div>
          <h3 className="font-bold text-xl mb-3 font-urbanist">Get To Advertise</h3>
          <p className="text-gray-600 font-urbanist">
            As a small business owner, planner or promoter, and for less than a cup of coffee
            you get to show customers what you're offering daily, even hourly with just a few steps.
          </p>
        </div>

        {/* Card 3 - Rating & Feedback */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 flex-1 min-w-0 
                       transform transition duration-500 hover:scale-105 hover:shadow-lg
                        animate-fadeInDelay3">
          <div className="w-12 h-12 bg-indigo-100 rounded mb-4 flex items-center justify-center text-indigo-600">
          <img src="/rating.svg" className="h-6 w-6" alt="" />
          </div>
          <h3 className="font-bold text-xl mb-3 font-urbanist">Rating & Feedback</h3>
          <p className="text-gray-600 font-urbanist">
            You can now post your events, in-house specials and promotions, track your traffic,
            monitor customer interest and review customer comments and ratings. With NiteCrawlers
            you can offer your customers a direct line of advertising in real time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardRow;