import { useState } from "react"

const Navbar = () => {
    const [open , setOpen] = useState(false);

  return (
    <div className="w-full h-[74px] md:h-20  md:p-8 flex items-center justify-between bg-[#ffff]">
       { /*LOGO */}
       <div className="flex items-center gap-4 text-2xl font-bold ">
        <img src="/favicon.png" className="w-8 h-8 rounded-full ml-5" alt="" />
        <span className="text-[24px] font-urbanist">Nitecrawlers</span>
       </div>

       {/*Mobile Menu */}
       <div className="md:hidden">
        {/* MOBILE BUTTON */} 
            <div className="cursor-pointer text-4xl mr-5 text-urbanist" onClick={()=>setOpen(!open)}>
                {open ? "x" : "= "}
            </div>
        {/* MOBILE LINK LIST */}
        <div className={`w-full h-[30%] flex flex-col items-start p-[20px] gap-8 font-medium text-lg justify-center absolute top-16 bg-[#e6e6ff] transition-all ease-in-out ${open ? "right-0" : "-right-[100%]"}`}>
        <a href="" className="hover:text-[#3975d8]">Home</a>
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Testimonials</a>
        <a href="">
            <button className="px-4 py-2 rounded-3xl flex flex-row bg-gradient-to-r from-[#5456ED] to-[#40BAFF] text-white">
                 Download 
             <img src="./angleright.svg" alt="" />
            </button>
        </a> 
        </div>
       </div>

        {/*Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="" className="hover:text-[#3975d8]">Home</a>
        <a href="" className="hover:text-[#3975d8]">About</a>
        <a href="">
        <button className="px-4 py-2 rounded-[10px] flex flex-row bg-gradient-to-r from-[#5456ED] to-[#40BAFF] text-white hover:text-[#3975d8]">
            Download 
             <img src="./anglerightwhite.svg" alt="" />
        </button>
        </a>
        </div>

    </div>
  )
}

export default Navbar