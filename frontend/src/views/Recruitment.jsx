import React from "react";
import { ReactComponent as Startuppageblur1 } from "../assets/Startuppageblur1.svg";
import StartupData from "../components/startups.json";
import { useParams } from "react-router-dom";

import SEGraphic from "../assets/segraphic.png";
import DesignGraphic from "../assets/designgraphic.png";
import MarketGraphic from "../assets/marketgraphic.png";
import FinancialGraphic from "../assets/financialgraphic.png";
import PMGraphic from "../assets/pmgraphic.png";
import BusinessGraphic from "../assets/businessgraphic.png";

function Recruitment() {
  const { id } = useParams();

  const getColorAndGraphic = (position) => {
    switch (position) {
      case "Software Engineer":
        return { color: "rgba(15, 76, 130, 0.75)", graphic: SEGraphic };
      case "Marketer":
        return { color: "rgba(220, 65, 35, 0.75)", graphic: MarketGraphic };
      case "UI/UX Designer":
        return { color: "rgba(103, 104, 171, 0.75)", graphic: DesignGraphic };
      case "Financial Analyst":
        return { color: "rgba(0, 153, 123, 0.75)", graphic: FinancialGraphic };
      case "Business Operations":
        return { color: "rgba(148, 149, 151, 0.75)", graphic: BusinessGraphic };
      case "Product Manager":
        return { color: "rgba(181, 113, 112, 0.75)", graphic: PMGraphic };
      default:
        return { color: "rgba(0, 0, 0, 0)", graphic: null };
    }
  };

  if (!id) {
    return (
      <div className="w-full h-screen overflow-hidden relative flex flex-col items-center justify-center">
        <h1 className="text-6xl font-semibold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
          Recruitment
        </h1>

        <a
          href="https://airtable.com/appVvEREL3a24WCG5/pagr0939XXnYnsh4u/form"
          className="mt-4 HeroButton-Shadow text-sm cursor-pointer font-semibold text-[#DEE0E3] p-2 px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265] hover:bg-[#1F1F23] hover:shadow-inner active:bg-[#0C0C0D] transition-all hover:shadow-slate-700"
        >
          Recruitment Form
        </a>
        <Startuppageblur1 className="absolute pointer-events-none w-auto" />
      </div>
    );
  }

  const startupName = id.toLowerCase();

  const startup = StartupData.find(
    (startup) =>
      startup.name.replace(/[^\w]/gi, "").toLowerCase() ===
      startupName.replace(/[^\w]/gi, "").toLowerCase()
  );

  if (!startup) {
    return (
      <div className="w-full h-screen overflow-auto relative flex flex-col items-center justify-center">
        <h1 className="text-6xl font-semibold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
          Recruitment
        </h1>

        <a
          href="https://airtable.com/appVvEREL3a24WCG5/pagr0939XXnYnsh4u/form"
          className="mt-4 HeroButton-Shadow text-sm cursor-pointer font-semibold text-[#DEE0E3] p-2 px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265] hover:bg-[#1F1F23] hover:shadow-inner active:bg-[#0C0C0D] transition-all hover:shadow-slate-700"
        >
          Recruitment Form
        </a>
        <Startuppageblur1 className="absolute pointer-events-none w-auto" />
      </div>
    );
  }
  console.log(startup.recruiting);

  return (
    <div className="w-full h-screen overflow-hidden relative flex flex-col items-center justify-center">
      <h1 className="text-6xl font-semibold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
        Recruitment
      </h1>

      {startup.logo && startup.logo !== "" && (
        <img
          src={`${process.env.PUBLIC_URL}/${startup.logo}`}
          alt="Company logo"
          className="w-40 h-40 mt-8 object-contain"
        />
      )}

      <h1 className="text-3xl font-semibold text-white mt-2 mb-4">
        {startup.name}
      </h1>

      {startup.link && startup.link !== "" && (
        <a
          href={startup.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 HeroButton-Shadow text-sm cursor-pointer font-semibold text-[#DEE0E3] p-2 px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265] hover:bg-[#1F1F23] hover:shadow-inner active:bg-[#0C0C0D] transition-all hover:shadow-slate-700"
        >
          Startup Website
        </a>
      )}
      <a
        href="https://airtable.com/appVvEREL3a24WCG5/pagr0939XXnYnsh4u/form"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 HeroButton-Shadow text-sm cursor-pointer font-semibold text-[#DEE0E3] p-2 px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265] hover:bg-[#1F1F23] hover:shadow-inner active:bg-[#0C0C0D] transition-all hover:shadow-slate-700"
      >
        Recruitment Form
      </a>

      <div className="w-[60%] rounded-full h-1 mb-8 mt-8 bg-gray-500"></div>

      {startup.recruiting.length > 0 && (
        <>
          <p className="text-lg underline underline-offset-8 font-medium mb-2 text-[#C2C2CD]">
            Recruiting For:
          </p>
          {startup.recruiting.map((role, index) => {
            const { color, graphic } = getColorAndGraphic(role);
            console.log(color);
            const style = {
              color: color === "rgba(0, 0, 0, 0)" ? "#C2C2CD" : color,
            };
            return (
              <div
                key={index}
                className="flex flex-row items-center justify-center gap-2 p-2"
              >
                {graphic && (
                  <img
                    src={graphic}
                    alt={role}
                    className="w-4 h-4 object-contain"
                  />
                )}
                <p style={style} className="text-[#C2C2CD]">
                  {role}
                </p>
              </div>
            );
          })}
        </>
      )}
      <Startuppageblur1 className="absolute pointer-events-none w-auto" />
    </div>
  );
}

export default Recruitment;
