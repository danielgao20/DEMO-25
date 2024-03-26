import React from 'react'
import { ReactComponent as StartupCardDesign } from "../assets/StartupCardDesign.svg";
import { ReactComponent as Startuppageblur1 } from "../assets/Startuppageblur1.svg";
import StartupCard from '../components/StartupCard';
import StartupSearch from '../components/StartupSearch';


var startupData = [
    {
        name: "Revsend",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
    },
    {
        name: "Revsend2",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
    },
    {
        name: "Revsend3",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
    },
    {
        name: "Revsend",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
    },
    {
        name: "Revsend2",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
    },
    {
        name: "Revsend3",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
    },
    {
        name: "Revsend",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
    },
    {
        name: "Revsend2",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
    },
    {
        name: "Revsend3",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
    },
  ];
const Startupgrid = () => {
    return (
        <div className="w-screen min-h-screen bg-[#080808]">
      {/* Hero Section */}
      <div className="border-b border-solid min-w-full p-8 text-center mt-40 pb-40 w-full relative h-full flex flex-col items-center text-white justify-center">
      <Startuppageblur1 className="absolute pointer-events-none w-auto" />
        <h1
          id="DEMO-Shadow"
          className="text-9xl relative z-20 font-black mt-2 bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text"
        >
          Our Startups
        </h1>
        <h4 className="text-2xl  relative z-20 text-[#C2C2CD] font-medium mt-4">
        50 of the best startups from USC and across Southern California
        </h4>
        
      </div>
      <span>
        <StartupSearch />
      
        <div className="grid grid-cols-4 gap-8 mt-6 ml-10 mr-10">
            {startupData.map((startup, index) => (
                <StartupCard key={index} name={startup.name} sector={startup.sector} logo={startup.logo} cardcolor={startup.cardcolor} />
            ))}
        </div>
        </span>
        </div>

    );
}

export default Startupgrid;