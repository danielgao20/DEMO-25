import React, { useEffect, useState } from "react";
import { ReactComponent as Startuppageblur1 } from "../assets/Startuppageblur1.svg";
import StartupCard from "../components/StartupCard";
import StartupSearch from "../components/StartupSearch";
import startupsData from "../components/startups.json";

const Startupgrid = () => {
    const [startupData, setStartupData] = useState(startupsData);
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 768px)").matches
    );

    return (
        <div className="w-screen min-h-screen overflow-x-hidden bg-[#080808]">
            {/* Hero Section */}
            <div
                className="border-b border-solid min-w-full p-8 text-center mt-40 pb-40 w-full relative h-full flex flex-col items-center text-white justify-center">
                <Startuppageblur1 className="absolute pointer-events-none w-auto"/>
                <h1
                    id="DEMO-Shadow"
                    className={`${
                        isMobile ? "text-7xl" : "text-9xl"
                    } relative z-20 font-black mt-2 bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text`}
                >
                    Our Startups
                </h1>
                <h4 className="text-2xl  relative z-20 text-[#C2C2CD] font-medium mt-4">
                    50 of the best startups from USC and across Southern California
                </h4>
            </div>
            <span>
        <StartupSearch allStartupData={startupsData} filter={setStartupData}/>
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mt-6 ml-10 mr-10">
          {startupData.map((startup, index) => {
              return (
                  <StartupCard
                      key={index}
                      name={startup.name}
                      logo={startup.logo}
                      cardcolor={startup.cardcolor}
                      description={startup.description}
                      link={startup.link}
                      industries={startup.industries}
                      team={startup.team}
                      recruiting={startup.recruiting}
                  />
              );
          })}
        </div>
      </span>
        </div>
    );
};

export default Startupgrid;
