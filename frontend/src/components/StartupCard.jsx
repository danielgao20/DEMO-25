import React from 'react'
import { ReactComponent as StartupCardDesign } from "../assets/StartupCardDesign.svg";

const StartupCard = ({ name, sector, logo, cardcolor }) => {
    return (
        <div className="bg-gray-900 hover:bg-{cardcolor} transition duration-300 ease-in-out shadow-lg overflow-hidden w-full h-[100%] p-4 text-white my-8 cursor-pointer">
          <div className="flex justify-between items-center mb-4 ml-5 mr-5 mt-4">
            <div className="float-left">
              <h1 className="text-xl font-normal">{name}</h1>
            </div>
            <div className="float-right">
              <h2 className="text-xl font-extralight">{sector}</h2>
            </div>
          </div>
          <div className="flex justify-center items-center mb-4">
            {/* Insert logo here, you might use an img tag or inline svg */}
            <span className="text-lg mt-0 translate-y-32">{logo}</span>
          </div>
          <StartupCardDesign className="h-fit w-[110%] -ml-5 rotate-10 translate-y-20" />
          <div className="flex justify-center">
          
            {/* Insert rocket icon here, you might use an img tag or inline svg */}
          </div>
        </div>
      );
}

export default StartupCard;