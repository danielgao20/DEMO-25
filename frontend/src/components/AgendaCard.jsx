import React from "react";
import Star from "../assets/Star.svg";

function AgendaCard({ reverse, time, agenda, description }) {
  return (
    <div
      className={`flex w-[50%] flex-col ${
        reverse ? "justify-center items-end" : "justify-center items-start"
      } gap-2`}
    >
      <div
        className={`flex ${
          reverse ? "flex-row-reverse" : "flex-row"
        } justify-start items-center  gap-2`}
      >
        <img src={Star} className="w-[25px] h-[25px]" />
        <h2 className="text-2xl text-[#D2ECFF] font-bold">{agenda}</h2>
        <h3 className="text-md text-[#255D8E] font-bold mt-2 ml-2">{time}</h3>
      </div>
      <p
        className={`text-[#747478] w-[90%] ${
          reverse ? "text-right " : "text-left"
        } leading-8`}
      >
        {description}
      </p>
    </div>
  );
}

export default AgendaCard;
