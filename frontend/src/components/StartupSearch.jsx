import React, { useState, useRef } from 'react';

const StartupSearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  // Function to determine if the input has a value
  const hasValue = () => {
    return inputRef.current && inputRef.current.value.length > 0;
  };

  // Letter transition delays
  const delays = [0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <div className="relative my-5 ml-10 left-0 mb-10 w-[12%]">
      <input
        ref={inputRef}
        type="text"
        required
        className={`bg-transparent border-x-0 border-b border-t-0 border-white w-full pt-6 pb-2 px-0 text-lg text-white focus:outline-none ${
          isFocused || hasValue() ? 'focus:border-light-blue-500' : ''
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label className="absolute top-6 left-0 pointer-events-none">
        {'Search'.split('').map((char, index) => (
          <span
            key={index}
            style={{ transitionDelay: `${delays[index]}ms` }}
            className={`inline-block text-lg min-w-1.5 text-white transition-all duration-300 ease-out ${
              isFocused || hasValue() ? 'transform -translate-y-8 text-light-blue-500' : ''
            }`}
          >
            {char}
          </span>
        ))}
      </label>
    </div>
  );
};

export default StartupSearch;
