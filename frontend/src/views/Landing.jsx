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
import Christiane from "../assets/Christiane.png";
import Arabian from "../assets/Arabian.jpg";
import Gordon from "../assets/gordonho1.jpg";

import OES from "../assets/OES.png";
import Prometheus from "../assets/Prometheus.png";
import RevSend from "../assets/RevSend.png";
import Underdose from "../assets/Underdose.png";
import Jargon from "../assets/Jargon.png";
import p220 from "../assets/220.png";

import USG from "../assets/USG.png";
import Greif from "../assets/Greif.png";
import Blackstone from "../assets/Blackstone.png";
import Apsy from "../assets/apsy.png";

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

const judgeData = [
  {
    id: 1,
    name: 'Blake Hatten',
    image: OES,
    alt: 'Blake Hatten',
  },
  {
    id: 2,
    name: 'Tim Li',
    image: Prometheus,
    alt: 'Tim Li',
  },
  {
    id: 3,
    name: 'Christiane Maertens',
    image: RevSend,
    alt: 'Christiane Maertens',
  },
  {
    id: 4,
    name: 'Judge 4',
    image: Underdose,
    alt: 'Judge 4',
  },
  {
    id: 5,
    name: 'Judge 5',
    image: Jargon,
    alt: 'Judge 5',
  },
  {
    id: 6,
    name: 'Judge 6',
    image: p220,
    alt: 'Judge 6',
  },
];

var judges = [
  {
    name: "Tim Li",
    title: "CEO & CoFounder of LendAPI",
    picture: Tim,
    linkedIn: "https://www.linkedin.com/in/timothytli/",
  },
  {
    name: "Christiane Maertens",
    title: "Founder of DoGoodery & Valor Bebidas",
    picture: Christiane,
    linkedIn: "https://www.linkedin.com/in/christiane-a-maertens-6bb2b74/",
  },
  {
    name: "Arabian Prince",
    title: "Entrepreneurial Industry Leader & Founder in Music and Tech",
    picture: Arabian,
    linkedIn: "https://www.linkedin.com/in/ogarabianprincenwa/",
  },
  {
    name: "Gordon Ho",
    title: "President of Xpertainment",
    picture: Gordon,
    linkedIn: "https://www.linkedin.com/in/gordonkho/",
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
  {
    image: Apsy,
  },
];

let isMobile = window.innerWidth < 768;

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-[#080808]">
      {/* Hero Section */}
      <div className="p-4 md:p-8 text-center min-h-screen flex flex-col items-center text-white justify-center">
        <h3 className="text-xl md:text-2xl font-bold tracking-wider text-[#C1C1CD]">
          April 11th • 10:30AM - 8:00PM • USC Trojan Grand Ballroom
        </h3>
        <h1
          id="DEMO-Shadow"
          className="text-6xl md:text-9xl font-black mt-2 bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent bg-clip-text"
        >
          DEMO 2024
        </h1>
        <h4 className="text-xl md:text-2xl text-[#C2C2CD] font-medium mt-4">
          USC’s Largest Student Organized Entrepreneurship Conference
        </h4>
        <h5 className="text-lg md:text-xl text-[#f3f3f3] font-medium mt-6">
          Sponsored by the USC Lloyd Greif Center for Entrepreneurial Studies
        </h5>
        <div className="flex flex-col md:flex-row w-full items-center mt-8 md:mt-12 justify-center gap-4">
          <a
            href="https://www.worldlabs.org/event/demo-2024-entrepreneurship-conference"
            target="_blank"
            rel="noreferrer"
            className="HeroButton-Shadow text-md cursor-pointer font-semibold text-[#DEE0E3] p-2 px-4 md:px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265] hover:bg-[#1F1F23] hover:shadow-inner active:bg-[#0C0C0D] transition-all hover:shadow-slate-700"
          >
            RSVP for DEMO
          </a>
        </div>
        <HeroBlur className="absolute pointer-events-none bottom-0 w-auto" />
        <img src={HeroBottomImage} alt="Hero Bottom" className="hidden md:block w-[150px] md:w-[300px] h-auto absolute bottom-0 left-0" />
        <img src={HeroTopImage} alt="Hero Top" className="hidden md:block w-[175px] md:w-[350px] h-auto absolute top-0 right-0" />
      </div>

      {/* About DEMO */}
      <div className="min-w-full min-h-screen w-full relative flex flex-col text-white" style={{ padding: isMobile ? '2rem' : '6rem' }}>
        {/* Text content with higher z-index */}
        <div className="z-10 relative">
          <h3 className="text-lg md:text-[#747478] font-medium">What is DEMO?</h3>
          <h1 className="text-4xl md:text-5xl mt-2 font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent bg-clip-text">
            TroyLabs presents DEMO 2024
          </h1>
          <h2 className="text-md md:text-xl font-semibold mt-4">
            Empowering USC's Next Generation of Entrepreneurs
          </h2>
          <p className="text-sm md:text-base leading-normal mt-6 text-[#FEFEFE] max-w-[800px] min-w-[300px] w-full md:w-[50%]">
          DEMO is the largest student-run entrepreneurial conference sponsored by the USC Lloyd Greif Center for Entrepreneurial Studies. DEMO annually brings together startups, investors, students, and everyone interested in entrepreneurship for a day-long event. The event includes a Keynote Speaker, startup exhibition, pitch competition, networking opportunities, and workshops aimed at helping founders move from idea to launch.
          </p>
          <div className="mt-10">
            <a href="https://www.worldlabs.org/event/demo-2024-entrepreneurship-conference" target="_blank" rel="noreferrer" className="HeroButton-Shadow text-m cursor-pointer font-semibold text-[#DEE0E3] py-2 px-4 md:px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265] hover:bg-[#1F1F23] hover:shadow-inner active:bg-[#0C0C0D] transition-all hover:shadow-slate-700">
              Participate
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-evenly mt-16 gap-8">
            {aboutData.map((data, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent bg-clip-text">
                  {data.amount}
                </h1>
                <h3 className="font-medium text-md md:text-xl mt-2">{data.of}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Blue rocket figure with lower z-index */}
        {!isMobile && (
          <DEMORocket className="absolute pointer-events-none top-0 right-20 w-auto z-0" />
        )}
        <AboutBlur className="absolute pointer-events-none bottom-0 right-0 w-auto z-0" />
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
      <div className={`min-w-full min-h-screen w-full relative h-full flex flex-col ${isMobile ? "p-4" : "p-24"} text-white`}>
        <h3 className="text-lg md:text-[#747478] font-medium">April 11, 2024</h3>
        <h1 className="text-3xl md:text-5xl mt-2 font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
          DEMO Agenda
        </h1>
        <h2 className="text-md md:text-xl font-semibold mt-4">
          A day full of speakers, pitches, and exhibitions
        </h2>

        {/* Adjusting Agenda Items for Responsiveness */}
        {/* For each agenda item, we use a flex container that switches from row to column layout on smaller screens. */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          <AgendaCard
            time="10:30 AM"
            reverse={false}
            agenda="Doors Open"
            description="Doors for the Opening Ceremony will open at 10:30 AM"
          />
          <img
            src={DoorsOpen}
            alt="Doors Open"
            className="mt-4 md:mt-0 md:ml-4 w-full md:w-[40%] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Repeat the pattern for other agenda items */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          <img
            src={OpeningCeremony}
            alt="Opening Ceremony"
            className="mb-4 md:mb-0 md:mr-4 w-full md:w-[40%] object-cover rounded-lg shadow-lg"
          />
          <AgendaCard
            time="11:00 AM"
            reverse={true}
            agenda="Opening Ceremony"
            description="The Opening Ceremony will feature an introduction by TroyLabs, speeches from sponsors, and the Keynote Speech."
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          <AgendaCard
            time={"11:30 AM"}
            reverse={false}
            agenda="Keynote Speaker"
            description="Speaker information Coming Soon! Moderated by Glenn Fox."
          />
          <img
            src={KeynoteSpeaker}
            alt="Keynote Speaker"
            className="mb-4 md:mb-0 md:mr-4 w-full md:w-[40%] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          <img
            src={StartupExhibition}
            alt="Startup Exhibition"
            className="mb-4 md:mb-0 md:mr-4 w-full md:w-[40%] object-cover rounded-lg shadow-lg"
          />
          <AgendaCard
            time={"12:30 PM"}
            reverse={true}
            agenda="Startup Exhibition"
            description="The Startup Exhibition is the main event, and will be open to all guests. Attendees can walk around the exhibition to look at the startups, network with founders, meet investors, and enjoy free food and merchandise."
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
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
            alt="Pitch Competition"
            className="mb-4 md:mb-0 md:mr-4 w-full md:w-[40%] object-cover rounded-lg shadow-lg"
          />
        </div>
        <AgendaBlur className="absolute pointer-events-none bottom-0 right-0 w-auto opacity-65" />
      </div>















      {/* Pitch Competition */}
      <div className={`min-w-full min-h-screen w-full relative h-full flex flex-col ${isMobile ? "p-4" : "p-24"} text-white`}>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="md:w-8/12">
            <h3 className="text-lg md:text-[#747478] font-medium">Innovation in Action</h3>
            <h1 className="text-3xl md:text-5xl mt-2 font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent bg-clip-text">
              Pitch Competition
            </h1>
            <h2 className="text-md md:text-xl font-semibold mt-4">
              Emerging Startups, Expert Judges
            </h2>
            <p className="leading-normal mt-6 text-[#FEFEFE] text-sm md:text-base md:max-w-[800px] w-full">
              Pitch Competition for a selected six startups will last from 5:30 PM to 7 PM, and winners will receive tuition-deductible prizes as awarded by the Lloyd Greif Center for Entrepreneurial Studies.
            </p>
            <div className="mt-10">
              <a href="https://www.worldlabs.org/event/demo-2024-entrepreneurship-conference" target="_blank" rel="noreferrer" className="HeroButton-Shadow text-m cursor-pointer font-semibold text-[#DEE0E3] p-2 px-4 md:px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265] hover:bg-[#1F1F23] hover:shadow-inner active:bg-[#0C0C0D] transition-all hover:shadow-slate-700">
                DEMO 2024 Startups
              </a>
            </div>
          </div>

          <div className="md:w-4/12 grid grid-cols-2 grid-rows-3 gap-4 mt-8 md:mt-0">
            {judgeData.map((judge, index) => (
              <div key={index} className="w-full">
                <img src={judge.image} alt={judge.alt} className="w-full h-auto object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-md md:text-lg font-medium text-[#D3D3D8] mt-16">Our Judges</h2>
        <div className={`${isMobile ? "flex-col items-center gap-4" : "flex-row items-center gap-8"} w-full flex justify-center mt-4`}>
          {judges.map((judge, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2">
              <img src={judge.picture} alt={judge.name} className="w-24 h-24 bg-contain rounded-full shadow-inner border-2 border-[#333]" />
              <div className="text-center">
                <h3 className="font-medium text-[#3B88CC] text-xl">
                  {judge.name}
                </h3>
                <h4 className="text-sm font-light mt-2 text-[#A9A9AD]">
                  {judge.title}
                </h4>
              </div>
            </div>
          ))}
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
          <h2 className="font-semibold text-center mb-10 bg-gradient-to-t from-[#116AB8] to-[#91BCE1] leading-normal text-transparent inline-block bg-clip-text text-3xl">
            ADA Accommodation at the USC Trojan Grand Ballroom and TCC 227
          </h2>
          {/* line */}

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
