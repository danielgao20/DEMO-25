import React from "react";

import { ReactComponent as HeroBlur } from "../assets/HeroBlur.svg";
import { ReactComponent as AboutBlur } from "../assets/AboutBlur.svg";
import { ReactComponent as AgendaBlur } from "../assets/AgendaBlur.svg";
import { ReactComponent as FooterBlur } from "../assets/FooterBlur.svg";
import { ReactComponent as PitchBlur } from "../assets/PitchBlur.svg";
import { ReactComponent as DEMORocket } from "../assets/DEMORocket.svg";

import HeroBottomImage from "../assets/HeroBottomImage.png";
import HeroTopImage from "../assets/HeroTopImage.png";

import AgendaCard from "../components/AgendaCard";

import KeynoteSpeaker from "../assets/Keynote.png";
import OpeningCeremony from "../assets/OpeningCeremony.png";
import PitchCompetition from "../assets/PitchCompetition.png";
import StartupExhibition from "../assets/StartupExhibition.png";
import DoorsOpen from "../assets/DoorsOpen.png";

import Tim from "../assets/Tim.png";
import Blake from "../assets/Blake.png";
import Christiane from "../assets/Christiane.png";
import Arabian from "../assets/Arabian.jpg";

import USG from "../assets/USG.png";
import Greif from "../assets/Greif.png";
import Blackstone from "../assets/Blackstone.png";

import Footer from "../assets/Footer.svg";
import { useNavigate } from "react-router-dom";

var aboutData = [
  {
    amount: 50,
    of: "Startups",
  },
  {
    amount: 100,
    of: "Investors",
  },
  {
    amount: 1000,
    of: "Attendees",
  },
];

var PrizeData = [
  {
    amount: "$4000",
    award: "First Place Prize",
  },
  {
    amount: "$2000",
    award: "Second Place Prize",
  },
];

var judges = [
  {
    name: "Arabian Prince",
    title: "Entrepreneurial industry leader & founder in music and tech ",
    picture: Arabian,
    linkedIn: "https://www.linkedin.com/in/ogarabianprincenwa/",
  },
  {
    name: "Tim Li",
    title: "CEO & Co-Founder of LendAPI",
    picture: Tim,
    linkedIn: "https://www.linkedin.com/in/timothytli/",
  },
  {
    name: "Christiane Maertens",
    title: "Founder of DoGoodery & Valor Bebidas",
    picture: Christiane,
    linkedIn: "https://www.linkedin.com/in/christiane-a-maertens-6bb2b74/",
  },
];

var sponsors = [
  {
    image: Greif,
  },
  {
    image: USG,
  },
  {
    image: Blackstone,
  },
];

let isMobile = window.innerWidth < 768;

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-[#080808]">
      {/* Hero Section */}
      <div className="min-w-full p-8 text-center min-h-screen w-full relative h-full flex flex-col items-center text-white justify-center">
        <h3 className="text-2xl relative z-20 font-bold tracking-wider text-[#C1C1CD]">
          April 11th • 10:30AM - 8:00PM • USC Trojan Grand Ballroom
        </h3>
        <h1
          id="DEMO-Shadow"
          className="text-9xl relative z-20 font-black mt-2 bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text"
        >
          DEMO 2024
        </h1>
        <h4 className="text-2xl  relative z-20 text-[#C2C2CD] font-medium mt-4">
          USC’s Largest Student Organized Entrepreneurship Conference
        </h4>
        <h5 className="text-xl relative z-20 text-[#f3f3f3] font-medium mt-6">
          Sponsored by the USC Lloyd Greif Center for Entrepreneurial Studies
        </h5>
        <div className="flex relative z-20 flex-row w-full items-center mt-12 justify-center gap-8">
          <a
            href="https://www.worldlabs.org/event/demo-2024-entrepreneurship-conference"
            target="_blank"
            rel="noreferrer"
            className="HeroButton-Shadow text-lg cursor-pointer font-semibold text-[#DEE0E3] p-2 px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265] hover:bg-[#1F1F23] hover:shadow-inner active:bg-[#0C0C0D] transition-all hover:shadow-slate-700"
          >
            RSVP for DEMO
          </a>
          {/* <button onClick={() => {navigate('/startups')}} className="HeroButton-Shadow text-lg cursor-pointer font-semibold text-[#DADEE2] p-2 px-6 rounded-lg bg-[#176EBA] border-2 border-[#131315]">
            DEMO 2024 Startups
          </button> */}
        </div>
        <HeroBlur className="absolute pointer-events-none bottom-0 w-auto" />
        <img
          src={HeroBottomImage}
          className={`image-contain w-[300px] h-[384px] bg-contain absolute bottom-0 left-0 ${
            isMobile ? "hidden" : ""
          }`}
        />
        <img
          src={HeroTopImage}
          className={`image-contain w-[350px] h-[300px] bg-contain absolute top-0 right-0 ${
            isMobile ? "hidden" : ""
          }`}
        />
      </div>

      {/* About DEMO */}
      <div
        className={`min-w-full min-h-screen w-full relative h-full flex flex-col ${
          isMobile ? "p-8" : "p-24"
        } text-white`}
      >
        <h3 className="text-[#747478] font-medium text-lg">What is DEMO?</h3>
        <h1 className="text-5xl mt-2 font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
          TroyLabs presents DEMO 2024
        </h1>
        <h2 className="text-xl font-semibold text-white mt-4">
          Empowering USC's Next Generation of Entrepreneurs
        </h2>
        <p className="leading-10 font-medium mt-6 text-[#FEFEFE] max-w-[800px] min-w-[300px] w-[50%]">
          DEMO is the largest student-run entrepreneurial conference sponsored
          by the USC Lloyd Greif Center for Entrepreneurial Studies. DEMO
          annually brings together startups, investors, students, and everyone
          interested in entrepreneurship for a day-long event. The event
          includes a Keynote Speaker, startup exhibition, pitch competition,
          networking opportunities, and workshops aimed at helping founders move
          from idea to launch.
        </p>
        <div className="mt-10">
          <a
            href="https://www.worldlabs.org/event/demo-2024-entrepreneurship-conference"
            target="_blank"
            rel="noreferrer"
            className="HeroButton-Shadow text-md cursor-pointer font-semibold text-[#DEE0E3] p-2 px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265] hover:bg-[#1F1F23] hover:shadow-inner active:bg-[#0C0C0D] transition-all hover:shadow-slate-700"
          >
            Participate
          </a>
        </div>
        <div
          className={`${
            isMobile ? "flex-col items-center" : "flex-row items-center"
          } w-full flex  text-center justify-evenly mt-16 gap-8`}
        >
          {aboutData.map((data) => {
            return (
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-7xl font-extrabold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
                  {data.amount}
                </h1>
                <h3 className="font-medium text-xl mt-2">{data.of}</h3>
              </div>
            );
          })}
        </div>
        {!isMobile && (
          <DEMORocket className="absolute pointer-events-none top-0 right-20 w-auto" />
        )}
        <AboutBlur className="absolute pointer-events-none bottom-0 right-0 w-auto" />
      </div>

      {/* [!!!!] Job Board & Startup Board should go in a separate page. */}

      {/* Job Board
      <div
        className={`min-w-full min-h-screen w-full relative h-full flex flex-col ${
          isMobile ? "p-8" : "p-24"
        } text-white`}
      >
        <h3 className="text-[#747478] font-medium text-lg">What startups are attending?</h3>
        <h1 className="text-5xl mt-2 font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text mb-6">
          DEMO 2024 Startups
        </h1>
<h2 className="text-xl font-semibold text-white mt-4">
          Empowering USC's Next Generation of Entrepreneurs
        </h2> 
        <StickyHeadTable />
      </div> */}

      {/* Agenda */}
      <div
        className={`min-w-full min-h-screen w-full relative h-full flex flex-col ${
          isMobile ? "p-8" : "p-24"
        } text-white`}
      >
        <h3 className="text-[#747478] font-medium text-lg">April 11, 2024</h3>
        <h1 className="text-5xl mt-2 font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
          DEMO Agenda
        </h1>
        <h2 className="text-xl font-semibold text-white mt-4">
          A day full of speakers, pitches, and exhibitions
        </h2>
        <div className="w-full h-auto py-4  mt-10 flex items-center justify-between">
          <AgendaCard
            time={"10:30 AM"}
            reverse={false}
            agenda={"Doors Open"}
            description={"Doors for the Opening Ceremony will open at 10:30 AM"}
          />
          <img
            src={DoorsOpen}
            className={`h-full bg-cover bg-center bg-no-repeat w-[40%] object-cover bg-white rounded-lg shadow-lg ${
              isMobile ? "hidden" : ""
            }`}
          />
        </div>
        <div className="w-full h-auto py-4  mt-2 flex items-center justify-between">
          <img
            src={OpeningCeremony}
            className={`h-full bg-cover bg-center bg-no-repeat w-[40%] object-cover bg-white rounded-lg shadow-lg ${
              isMobile ? "hidden" : ""
            }`}
          />

          <AgendaCard
            time={"11:00 AM"}
            reverse={true}
            agenda={"Opening Ceremony"}
            description={
              "The Opening Ceremony will feature an introduction by TroyLabs, speeches from sponsors, and the Keynote Speech."
            }
          />
        </div>
        <div className="w-full h-auto py-4 mt-2 flex items-center justify-between">
          <AgendaCard
            time={"11:45 AM"}
            reverse={false}
            agenda={"Keynote Speaker"}
            description={
              "Speaker information Coming Soon! Moderated by Glenn Fox."
            }
          />
          <img
            src={KeynoteSpeaker}
            className={`h-full bg-cover bg-center bg-no-repeat w-[40%] object-cover bg-white rounded-lg shadow-lg ${
              isMobile ? "hidden" : ""
            }`}
          />
        </div>
        <div className="w-full h-auto py-4 mt-2 flex items-center justify-between">
          <img
            src={StartupExhibition}
            className={`h-full bg-cover bg-center bg-no-repeat w-[40%] object-cover bg-white rounded-lg shadow-lg ${
              isMobile ? "hidden" : ""
            }`}
          />
          <AgendaCard
            time={"12:30 PM"}
            reverse={true}
            agenda={"Startup Exhibition"}
            description={
              "The Startup Exhibition is the main event, and will be open to all guests. Attendees can walk around the exhibition to look at the startups, network with founders, meet investors, and enjoy free food and merchandise."
            }
          />
        </div>
        <div className="w-full h-auto py-4 mt-2 flex items-center justify-between">
          <AgendaCard
            time={"5:30 PM"}
            reverse={false}
            agenda={"Pitch Competition"}
            description={
              "Pitch Competitions for a selected six companies will last from 5:30 PM to 7 PM, and winners will receive tuition-deductible prizes as awarded by the Lloyd Greif Center for Entrepreneurial Studies. "
            }
          />
          <img
            src={PitchCompetition}
            className={`h-full bg-cover bg-center bg-no-repeat w-[40%] object-cover bg-white rounded-lg shadow-lg ${
              isMobile ? "hidden" : ""
            }`}
          />
        </div>
        <AgendaBlur className="absolute pointer-events-none bottom-auto top-auto left-auto right-auto w-auto opacity-65" />
      </div>

      {/* Pitch Competition */}
      <div
        className={`min-w-full min-h-screen w-full relative h-full flex flex-col ${
          isMobile ? "p-8" : "p-24"
        } text-white`}
      >
        <h3 className="text-[#747478] font-medium text-lg">
          Innovation in Action
        </h3>
        <h1 className="text-5xl mt-2 font-bold  bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
          Pitch Competition
        </h1>
        <h2 className="text-xl font-semibold text-white mt-4">
          Emerging Startups, Expert Judges
        </h2>
        <p
          className={`leading-10 font-medium mt-6 text-[#FEFEFE] max-w-[800px] min-w-[200px] ${
            isMobile ? "w-[80%]" : "w-[50%]"
          }`}
        >
          Pitch Competition for a selected six startups will last from 5:30 PM
          to 7 PM, and winners will receive tuition-deductible prizes as awarded
          by the Lloyd Greif Center for Entrepreneurial Studies. 
        </p>
        <div className="mt-10">
          {/* <button className="HeroButton-Shadow text-md cursor-pointer font-semibold text-[#DEE0E3] p-2 px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265]">
            Pitching Startups
          </button> */}
        </div>
        <div
          className={`${
            isMobile ? "flex-col gap-16" : "gap-32"
          } w-full flex items-center text-center justify-start mt-8`}
        >
          {PrizeData.map((data) => {
            return (
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-7xl font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
                  {data.amount}
                </h1>
                <h3 className="font-medium text-xl mt-2">{data.award}</h3>
              </div>
            );
          })}
        </div>
        <h2 className="font-medium text-[#D3D3D8] text-lg mt-16">Our Judges</h2>
        <div
          className={`${
            isMobile
              ? "flex-col items-start gap-8 mt-8"
              : "items-center gap-4 mt-4"
          } w-full flex text-center justify-start`}
        >
          {judges.map((judge) => {
            return (
              <div className="flex items-center justify-center gap-6">
                <img
                  src={judge.picture}
                  className="w-24 h-24 bg-contain rounded-full shadow-inner border-2 border-[#333]"
                />
                <div className="flex flex-col text-left items-start justify-center">
                  <h3
                    className="font-medium text-[#3B88CC] text-xl hover:underline hover:underline-offset-4 cursor-pointer"
                    onClick={() => window.open(judge.linkedIn, "_blank")}
                  >
                    {judge.name}
                  </h3>
                  <h4 className="text-sm w-[80%] font-light mt-2 text-[#A9A9AD]">
                    {judge.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
        <PitchBlur className="absolute pointer-events-none bottom-0 w-auto" />
      </div>

      {/* ADA */}
      <div
        className={`${
          isMobile ? "p-8 pb-8" : "p-24"
        } min-w-full w-full justify-center items-center relative flex flex-col text-white`}
      >
        {/* <h1 className="text-5xl mt-2 font-bold  bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
          Interested in sponsoring DEMO?
        </h1> */}




        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-center  bg-gradient-to-t from-[#116AB8] to-[#91BCE1] leading-normal text-transparent inline-block bg-clip-text text-3xl">
            ADA Accommodation at the USC Trojan Grand Ballroom and TCC 227
          </h2>
          {/* line */}
          <div
            className={`${
              isMobile ? "w-[60%]" : "w-[50%]"
            } h-1 bg-gradient-to-t mt-6 mb-10 rounded-full from-[#116AB8] to-[#91BCE1]`}
          ></div>
          <p
            className={`${
              isMobile ? "w-[90%]" : "w-3/4"
            }text-white text-center leading-loose text-lg`}
          >
            Individuals with disabilities who need accommodations to attend this
            event may contact <b className="text-[#3B88CC]">troylabs@usc.edu</b>
            . It is requested that individuals requiring accommodations or
            auxiliary aids such as sign language interpreters and alternative
            format materials notify us at least 7 days prior to the event. Every
            reasonable effort will be made to provide reasonable accommodations
            in an effective and timely manner.
          </p>
        </div>
      </div>

      {/* Thank You */}
      <div
        className={`${
          isMobile ? "p-8 pb-8" : "p-24 pb-96"
        } min-w-full min-h-screen w-full justify-center items-center relative h-full flex flex-col text-white`}
      >
        <h1
          className={`${
            isMobile ? "text-4xl mb-4" : "text-8xl"
          } mt-2 font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] leading-normal text-transparent inline-block bg-clip-text`}
        >
          A Huge Thank You!
        </h1>
        <h2 className="text-lg text-center font-medium tracking-wider text-white">
          Thank you for the support of our sponsors to provide opportunities at
          DEMO 2024!
        </h2>
        <div
          className={`${
            isMobile ? "flex-col gap-2" : "flex-row gap-16"
          } w-full items-center flex justify-center mt-8`}
        >
          {sponsors.map((sponsor) => {
            return (
              <img
                src={sponsor.image}
                className="relative z-10 w-48 h-48 bg-contain"
              />
            );
          })}
        </div>
        <img
          src={Footer}
          className="w-full image-contain h-auto absolute bottom-0 z-4"
        />
        <FooterBlur className="absolute z-0 pointer-events-none bottom-0 w-auto" />
      </div>
    </div>
  );
}

export default Landing;
