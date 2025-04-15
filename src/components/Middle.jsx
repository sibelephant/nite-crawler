export default function Middletop() {
    return (
      <div className="max-w-7xl mx-auto p-6 font-urbanist flex flex-col">
        {/* Main heading section */}
        <div className="mb-16 md:flex md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-16">
          <div className="left md:w-1/2 lg:w-3/5">
            <h1 className="text-3xl font-bold text-center leading-tight md:text-[34px] md:text-left lg:text-4xl xl:text-5xl">
              We Help Customers Find Your Business & Best Experience in minutes
              with
            </h1>
            <div className="flex items-center justify-center mt-4 md:justify-start">
              <span className="text-blue-500 flex items-center font-medium text-xl md:text-[34px] lg:text-4xl">
                <img
                  src="/google-gemini-icon.svg"
                  className="md:w-[30px] w-[15px] mr-2"
                  alt=""
                />
                Geolocation Tracking
              </span>
            </div>
          </div>
  
          <div className="right hidden md:flex  lg:flex-row md:w-1/2 lg:w-2/5 md:flex-row md:gap-4 lg:gap-6">
            <div className="card1 font-urbanist bg-inherit p-4 rounded-lg shadow-md md:w-full lg:w-auto">
              <h1 className="text-[50px] w-[120px] h-[70] font-semibold">
                98%
              </h1>
              <p className="text-[18px] w-[120px] h-[50]">
                Client Satisfaction
              </p>
            </div>
  
            <div className="card1 font-urbanist bg-inherit p-4 rounded-lg shadow-md md:w-full lg:w-auto">
              <h1 className="text-[50px] w-[120px] h-[70] font-semibold">
              89%
              </h1>
              <p className="text-[18px] w-[120px] h-[50]">
              Revenue Increased
              </p>
            </div>
  
            <div className="card1 font-urbanist bg-inherit p-4 rounded-lg shadow-md md:w-full lg:w-auto">
              <h1 className="text-[50px] w-[120px] h-[70] font-semibold">
              5k+
              </h1>
              <p className="text-[18px] w-[120px] h-[50]">
              Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }