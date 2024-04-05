import React, { useState } from 'react'
import { ReactComponent as Startuppageblur1 } from "../assets/Startuppageblur1.svg";
import StartupCard from '../components/StartupCard';
import StartupSearch from '../components/StartupSearch';
import cam from '../assets/cam.png'

const allStartupData = [
    {
        name: "Revsend",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
        team: [
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder of TroyLabs",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron1@example.com"
            },
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron@example.com"
            },
            //more possible founders
        ],
        stage: "Series A",
        recruiting: ["Software Engineer", "Marketer", "UI Designer", "Financial Analyst"],
    },
    {
        name: "Annacopa",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["Artificial Intelligence", "Environment Tech"],
        team: [
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder of TroyLabs",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron1@example.com"
            },
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron@example.com"
            },
            //more possible founders
        ],
        stage: "Series A",
        recruiting: ["Software Engineer", "Marketer", "UI Designer", "Financial Analyst"],
    },
    {
        name: "TL",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
        team: [
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder of TroyLabs",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron1@example.com"
            },
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron@example.com"
            },
            //more possible founders
        ],
        stage: "Pre-Seed",
        recruiting: ["Software Engineer", "Marketer", "UI Designer", "Financial Analyst"],
    },
    {
        name: "TroyLabs",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
        team: [
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder of TroyLabs",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron1@example.com"
            },
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron@example.com"
            },
            //more possible founders
        ],
        stage: "Series A",
        recruiting: ["Software Engineer", "Marketer", "UI Designer", "Financial Analyst"],
    },
    {
        name: "Biotech Beauty",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
        team: [
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder of TroyLabs",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron1@example.com"
            },
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron@example.com"
            },
            //more possible founders
        ],
        stage: "Seed",
        recruiting: ["Software Engineer", "Marketer", "UI Designer", "Financial Analyst"],
    },
    {
        name: "Evryn",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
        team: [
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder of TroyLabs",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron1@example.com"
            },
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron@example.com"
            },
            //more possible founders
        ],
        stage: "Pre-Seed",
        recruiting: ["Software Engineer", "Marketer", "UI Designer", "Financial Analyst"],
    },
    {
        name: "Test",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
        team: [
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder of TroyLabs",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron1@example.com"
            },
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron@example.com"
            },
            //more possible founders
        ],
        stage: "Series A",
        recruiting: ["Software Engineer", "Marketer", "UI Designer", "Financial Analyst"],
    },
    {
        name: "Hello",
        logo: "Revsend logo",
        cardcolor: "blue",
        description: "Lorem ipsum dolor sit amet consectetur. Risus orci sit velit feugiat egestas nibh lectus enim scelerisque.",
        link: "www.linkedin.com/company/troy-labs",
        industries: ["SAAS", "Artificial Intelligence", "Environment Tech"],
        team: [
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder of TroyLabs",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron1@example.com"
            },
            {
                "name": "Cameron Saidock",
                "role": "Co-Founder",
                "headshot": cam,
                "linkedin": "https://www.linkedin.com/in/cameronsaidock/",
                "email": "cameron@example.com"
            },
            //more possible founders
        ],
        stage: "Series A",
        recruiting: ["Software Engineer", "Marketer", "UI Designer", "Financial Analyst"],
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
                <StartupCard key={index} name={startup.name} sector={startup.sector} logo={startup.logo} cardcolor={startup.cardcolor} description={startup.description} link={startup.link} industries={startup.industries} team={startup.team} recruiting={startup.recruiting}/>
            ))}
        </div>
        </span>
        </div>

    );
}

export default Startupgrid;


