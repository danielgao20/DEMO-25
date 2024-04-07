import React, { useState, useEffect } from "react";
import DEMOLogo from "../assets/DEMOLogo.png";
import SponsorshipPdf from "../assets/DEMOsponsorship.pdf";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

function Navbar() {
  const navigate = useNavigate();
  let location = useLocation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openSponsorPdf = () => {
    window.open(SponsorshipPdf, "_blank");
  };

  var links = [
    {
      text: "Home",
      url: "/",
      action: () => navigate("/"),
    },
    {
      text: "Map",
      url: "/map",
    },
    {
      text: "Startups",
      url: "/startups",
      action: () => navigate("/startups")
    },
    {
      text: "Sponsor Us",
      url: "", // Empty or '#' if you don't have a separate path for Sponsor Us
      action: openSponsorPdf, // This will be the function to open the PDF
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
        onClick={() => navigate("/")}
      />
      {!isMobile ? (
        // Desktop view
        <>
          <div className="flex flex-row h-full items-center justify-center gap-4">
            {links.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className={`p-4 font-semibold ${
                  location.pathname === link.url ? "text-[#2668A1] underline underline-offset-8" : "text-[#A2A2A5]"
                }`}
              >
                {link.text}
              </button>
            ))}
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
      ) : (
        // Mobile view
        <>
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
          {menuOpen && (
            <div className="absolute top-16 right-0 w-1/3 bg-[#131313]/90 backdrop-blur-md p-5 flex flex-col items-center justify-center">
              {links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    link.action();
                    toggleMenu();
                  }}
                  className={`p-3 font-semibold w-full text-center ${
                    location.pathname === link.url ? "text-[#2668A1]" : "text-[#A2A2A5]"
                  }`}
                >
                  {link.text}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </header>
  );
}

export default Navbar;
