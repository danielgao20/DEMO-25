import React, { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons'


export default function StartupSearch({allStartupData, filter}) {
  const [search, setSearch] = useState('');

  const applySearch = (value) => {
    setSearch(value);
    const filteredData = allStartupData.filter((data) => data.name.toLowerCase().includes(value.toLowerCase()));
    filter(filteredData);
  }

  return (
    <div className="relative my-5 ml-10 left-0 mb-10 w-[12%]">
      <input
        type="text"
        required
        value={search}
        onChange={(e) => applySearch(e.target.value)}
        className={`bg-transparent border-x-0 border-b border-t-0 border-white w-full pt-6 pb-2 px-0 text-lg text-white focus:outline-none pl-6`}
      />
      <SearchIcon color="white" style={{position: 'absolute', left: 0, bottom: "15px"}}/> 
    </div>
  );
};