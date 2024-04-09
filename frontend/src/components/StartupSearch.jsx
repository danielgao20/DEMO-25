import React, { useEffect, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons'


export default function StartupSearch({allStartupData, filter}) {
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('All');
  const [stage, setStage] = useState('All');
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);


    useEffect(() => {
    const filteredSearchData = allStartupData.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()) &&
      (industry === "All" || data.industries.includes(industry)) && 
      (stage === "All" || data.stage === stage));
    filter(filteredSearchData);
  }, [search, industry, stage])

  return (
      <div className={`flex  ${isMobile ? 'flex-col' : 'flex-row'} justify-between items-center ml-10 mr-10 text-white`}>
          <div className={`mb-4 md:mb-0 ${isMobile ? 'w-full' : 'w-[100%]'} flex flex-row flex-wrap gap-x-8 `}>
              <Sort title="Industry"
                    options={["All", "AI/ML", "Aerospace & Defense", "Climate", "Consumer Products", "Cybersecurity", "E-Commerce", "Education", "Enterprise", "Entertainment", "Fashion", "Finance & Insurance", "Food & Beverage", "Health & Wellness", "Hospitality", "Information Technology", "Manufacturing", "Media", "Non-Profit", "Real Estate", "SaaS", "Transportation"]}
                    filter={setIndustry}/> 
              <Sort title="Recruitment" options={["All", "Hiring"]} filter={setStage}/>
          </div>
          <div className={`relative left-0 mb-10 ${isMobile ? 'w-full' : 'w-[30%] ml-10 my-5 '}`}>
              <input
                  type="text"
                  required
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`w-[100%] bg-transparent border-x-0 border-b border-t-0 border-white pt-6 pb-2 px-0 text-lg text-white focus:outline-none pl-6 ${isMobile ? 'w-full' : ''}`}
              />
              <SearchIcon color="white" style={{position: 'absolute', left: 0, bottom: "15px"}}/>
          </div>
      </div>
  );
};

function Sort({title, options, filter}) {
    return (
        <div className="text-xs flex flex-row items-center pt-6 pb-2 border-x-0 border-b border-t-0 border-white">
            <p>{title}: </p>
            <select onChange={(e) => filter(e.target.value)} id={title} name={title}
                    className='bg-transparent text-xs w-full ml-4 px-0 text-lg text-white focus:outline-none'>
                {options.map(option => <option value={option}>{option}</option>)}
            </select>
        </div>
    )
}