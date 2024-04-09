import React, { useEffect, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons'


export default function StartupSearch({allStartupData, filter}) {
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('All');
  const [stage, setStage] = useState('All');

  useEffect(() => {
    const filteredSearchData = allStartupData.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()) &&
      (industry === "All" || data.industries.includes(industry)) && 
      (stage === "All" || data.stage === stage));
    console.log(filteredSearchData)
    filter(filteredSearchData);
  }, [search, industry, stage])

  return (
    <div className="flex flex-row justify-between items-center ml-10 mr-10 text-white">
      <div className="w-[25%] flex flex-row gap-x-8">
        <Sort title="Industry" options={["All", "AI/ML", "Aerospace & Defense", "BioTech", "Cannabis", "Climate", "CPG", "Cybersecurity", "E-Commerce", "Education", "Enterprise", "Entertainment", "Fashion", "Finance & Insurance", "Food", "Food & Beverage", "Healthcare", "Health & Wellness", "Hospitality", "Information Technology", "Manufacturing", "Media", "Non-Profit", "Real Estate", "Retail", "SaaS", "Transportation"
        ]} filter={setIndustry} />
        <Sort title="Recruitment" options={["All", "Hiring"]} filter={setStage} />
      </div>
      <div className="relative my-5 ml-10 left-0 mb-10 w-[20%]">
        <input
          type="text"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`bg-transparent border-x-0 border-b border-t-0 border-white pt-6 pb-2 px-0 text-lg text-white focus:outline-none pl-6`}
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
      <select onChange={(e) => filter(e.target.value)} id={title} name={title} className='bg-transparent text-xs w-full ml-4 px-0 text-lg text-white focus:outline-none'>
        {options.map(option => <option value={option}>{option}</option>)}
      </select>
    </div>
  )
}