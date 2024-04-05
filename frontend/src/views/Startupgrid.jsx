import React, { useState } from 'react'
import { ReactComponent as Startuppageblur1 } from "../assets/Startuppageblur1.svg";
import StartupCard from '../components/StartupCard';
import StartupSearch from '../components/StartupSearch';

const allStartupData = [
    {
        name: "Revsend",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
    },
    {
        name: "Annacopa",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
    },
    {
        name: "TL",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
    },
    {
        name: "TroyLabs",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
    },
    {
        name: "Biotech Beauty",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
    },
    {
        name: "Evryn",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
    },
    {
        name: "Test",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
    },
    {
        name: "Hello",
        sector: "AI",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
    }
  ]

const Startupgrid = () => {

    const [startupData, setStartupData] = useState(allStartupData)
    
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
        <StartupSearch allStartupData={allStartupData} filter={setStartupData} />
      
        <div className="grid grid-cols-4 gap-8 mt-6 ml-10 mr-10">
            {startupData.map((startup, index) => (
                <StartupCard key={index} name={startup.name} sector={startup.sector} logo={startup.logo} cardcolor={startup.cardcolor} description={startup.description} link={startup.link} industries={startup.industries}/>
            ))}
        </div>
        </span>
        </div>

    );
}

export default Startupgrid;


