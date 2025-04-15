import CardRow from "./CardRow"


const Ooduee = () => {
  return (
    <div className='flex flex-col '>
        {/* "Take a look at" section */}
        <div className=" md:w-[1200px] w-[92%] md:gap-[20px] text-urbanist md:flex md:items-center md:justify-center md:flex-col">
          <h2 className="text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">Take a Look at</h2>
          <div className="flex items-center">
            <span className="font-bold text-2xl mr-2 md:text-3xl lg:text-4xl">What</span>
            <img src="google-gemini-icon.svg" className="w-[15px] md:w-[30px]" alt="" />
            <span className="text-blue-500 flex items-center font-medium md:text-3xl lg:text-4xl">
              we offer
            </span>
          </div>
        </div>
      {/* cards section*/}
      <CardRow/>

    </div>
  )
}

export default Ooduee