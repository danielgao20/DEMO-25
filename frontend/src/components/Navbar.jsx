import React from "react";
import DEMOLogo from "../assets/DEMOLogo.png";
import SponsorshipPdf from '../assets/DEMOsponsorship.pdf';
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  let location = useLocation();

  let isMobile = window.innerWidth < 768;

  const openSponsorPdf = () => {
    window.open(SponsorshipPdf, '_blank');
  };


  var links = [
    {
      text: "Home",
      url: "/",
      action: () => navigate("/")
    },
    // { /test
    //   text: "Startups",
    //   url: "/startups",
    //   action: () => navigate("/startups")
    // },
    {
      text: "Sponsor Us",
      url: "", // Empty or '#' if you don't have a separate path for Sponsor Us
      action: openSponsorPdf // This will be the function to open the PDF
    },
    // {
    //   text: "Map",
    //   url: "/map",
    //   action: () => navigate("/map")
    // },
  ];

  var current = location.pathname;
  console.log(current);

  return (
    <header className="w-full h-16 flex flex-row justify-between items-center px-8 p-4 fixed top-0 z-50 bg-[#131313]/20 backdrop-blur">
      <img
        alt="Demo 2024 Logo — Presented by TroyLabs"
        src={DEMOLogo}
        className="h-full w-auto cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />
      {!isMobile && (
        <>
          <div className="flex flex-row h-full items-center justify-center gap-4">
            {links.map((link, index) => {
              return (
                <button
                  key={index} // Added a key here for best practices
                  onClick={link.action} // Changed to use the action specified in the links array
                  className={`p-4 font-semibold ${
                    current === link.url
                      ? "text-[#2668A1] underline underline-offset-8"
                      : "text-[#A2A2A5]"
                  }`}
                >
                  {link.text}
                </button>
              );
            })}
          </div>
          <a
            href="https://www.worldlabs.org/event/demo-2024-entrepreneurship-conference"
            target="_blank"
            rel="noreferrer"
            className="HeroButton-Shadow text-sm cursor-pointer font-semibold text-[#DEE0E3] p-2 px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265] hover:bg-[#1F1F23] hover:shadow-inner active:bg-[#0C0C0D] transition-all hover:shadow-slate-700"
          >
            RSVP for DEMO
          </a>
        </>
      )}
    </header>
  );
}

export default Navbar;
