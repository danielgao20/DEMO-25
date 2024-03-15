import React from "react";
import DEMOLogo from "../assets/DEMOLogo.png";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  let location = useLocation();


  var links = [
    {
      text: "Home",
      url: "/",
    },
    // {
    //   text: "Startups",
    //   url: "/startups",
    // },
    // {
    //   text: "Map",
    //   url: "/map",
    // },
  ];

  var current = location.pathname;
  console.log(current)

  return (
    <header className="w-full h-16 flex flex-row justify-between items-center px-8 p-4 fixed top-0 z-50">
      <img
        src={DEMOLogo}
        className="h-full w-auto cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="flex flex-row h-full items-center justify-center gap-4">
        {links.map((link) => {
          return (
            <button
              onClick={() => {
                navigate(link.url);
              }}
              className={`p-4 font-semibold ${
                current == link.url
                  ? "text-[#2668A1] underline underline-offset-8"
                  : "text-[#A2A2A5]"
              }`}
            >
              {link.text}
            </button>
          );
        })}
      </div>
      <button className="HeroButton-Shadow text-sm cursor-pointer font-semibold text-[#DEE0E3] p-2 px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265]">
        RSVP for DEMO
      </button>
    </header>
  );
}

export default Navbar;
