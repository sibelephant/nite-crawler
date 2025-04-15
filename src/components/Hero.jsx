import { Herobottom } from "./Herobottom";

const Hero = () => {
  return (
    <div className="md:pl-[50px] md:mt-24 m-[10px] bg-[#eeeefc] min-h-screen flex-col ">

      <div className="flex flex-col p-[10px] gap-[39px] md:flex-row md:gap-[100px] md:items-center">
        <div className="container-top-left flex flex-col items-start md:w-[693px] md:h-[263px]">
          <h1 className="text-[20px] md:text-[40px] font-bold ">
            Helping Small Businesses With{" "}
          </h1>
          <h1 className="text-[20px]  md:text-[40px] font-bold flex flex-row gap-3">
            Low Cost{"  "}
            <img src="/google-gemini-icon.svg" alt="" className="w-[15px]" />
            <span className="bg-gradient-to-tr from-[#5456ED] to-[#53A0ED] bg-clip-text text-transparent md:text-[40px]">
              Advertising
            </span>
          </h1>
          <p className="text-[18px] ">
            Whether you are a local, a tourist or just passing through,
            NiteCrawlers can help you find the best in food and entertainment
            featuring restaurant, food truck, bar, nightclubs, planner, and
            party promoter events and specials happening around your location
            with just the tap of a button!
          </p>
        </div>

        <div className="container-top-right order-1 w-[365px] md:order-none md:flex md:flex-col ">
          <div className="flex flex-row gap-4">
            <img
              src="/heroright.png"
              alt=""
              className="w-[160px] h-[42.66px]"
            />
            <span>Over 500+ Users & Advertisers Trust Us.</span>
          </div>

          <button className="hidden px-[25px] py-[8px] rounded-[10px] md:flex flex-row bg-gradient-to-r from-[#5456ED] to-[#40BAFF] text-white hover:text-[#3975d8] w-60 mt-9 ">
            <a href="#service">Explore Our Services</a>
            <img src="./anglerightwhite.svg" alt="" />
          </button>
        </div>
      </div>

<Herobottom />
    </div>
  );
};

export default Hero;
