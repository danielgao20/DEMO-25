import React, { useEffect, useState } from "react";

import { ReactComponent as HeroBlur } from "../assets/HeroBlur.svg";
import { ReactComponent as AboutBlur } from "../assets/AboutBlur.svg";
import { ReactComponent as AgendaBlur } from "../assets/AgendaBlur.svg";
import { ReactComponent as FooterBlur } from "../assets/FooterBlur.svg";
import { ReactComponent as PitchBlur } from "../assets/PitchBlur.svg";
import { ReactComponent as DEMORocket } from "../assets/DEMORocket.svg";
import { ReactComponent as WorkshopBlur } from "../assets/WorkshopBlur.svg";
import { ReactComponent as KeynoteBlur } from "../assets/KeynoteBlur.svg";
import { ReactComponent as KeynoteCircle } from "../assets/KeynoteCircle.svg";

import HeroBottomImage from "../assets/HeroBottomImage.png";
import HeroTopImage from "../assets/HeroTopImage.png";

import { ReactComponent as Star } from "../assets/Star.svg";

import AgendaCard from "../components/AgendaCard";

import KeynoteSpeaker from "../assets/Keynote.png";
import OpeningCeremony from "../assets/OpeningCeremony.png";
import PitchCompetition from "../assets/PitchCompetition.png";
import StartupExhibition from "../assets/StartupExhibition.png";
import DoorsOpen from "../assets/DoorsOpen.png";

import AshleyAlexander from "../assets/AshleyAlexander.png";
import AdamRyanGoldston from "../assets/AdamRyanGoldston.png";
import Mendocino from "../assets/Mendocino.png";
import FreshBrothers from "../assets/FreshBrothers.png";

import GlennFox from "../assets/GlennFox.png";
import MaryannXu from "../assets/MaryannXu.png";
import Carol from "../assets/Carol.jpg";

import Ali from "../assets/ali.png";
import Rachael from "../assets/rachael.png";
import Martin from "../assets/martin.png";
import Jai from "../assets/jai.png"

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

import Arushi from "../assets/Arushi.png";

import Footer from "../assets/Footer.svg";
import { useNavigate } from "react-router-dom";

var aboutData = [
  {
    amount: "50",
    of: "Startups",
  },
  {
    amount: "100+",
    of: "Investors",
  },
  {
    amount: "1000+",
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

const pitchingStartups = [
  {
    name: "OES",
    logo: OES,
  },
  {
    name: "Prometheus",
    logo: Prometheus,
  },
  {
    name: "RevSend",
    logo: RevSend,
  },
  {
    name: "Underdose",
    logo: Underdose,
  },
  {
    name: "Jargon",
    logo: Jargon,
  },
  {
    name: "220",
    logo: p220,
  },
];

var judges = [
  {
    name: "Ali Mirzaei",
    title: "Founder and CEO of Dimension Studios",
    picture: Ali,
    linkedIn: "https://www.linkedin.com/in/ali-mirzaei-a411791b4/",
    description: `Ali Mirzaei is the founder and CEO of a social e-commerce incubator
    and accelerator specializing in the emerging TikTok Shop space. Before that, 
    he held executive roles in several companies, and even launched a creator-based 
    apparel brand which gained 500,000,000+ views and 500,000+ followers in less than a year.`,
  },
  {
    name: "Rachael McCrary",
    title: "CEO of Spice World",
    picture: Rachael,
    linkedIn: "https://www.linkedin.com/in/rachaelmccrary/",
    description: `Rachael McCrary is the CEO of a company redefining intimate apparel by 
    empowering women. She has designed for major brands, created the innovative RxBra 
    for post-surgical recovery, and founded Jewel Toned, the first female-founded 
    startup to raise $1 million in 2015. Rachael has won numerous awards, including being 
    named one of LA's "100 Worthy Women."`,
  },
  {
    name: "Dr. Martin Prescher",
    title: "Faculty in USC's Viterbi School of Engineering",
    picture: Martin,
    linkedIn: "https://www.linkedin.com/in/mprescher/",
    description: `Dr. Martin Prescher has a strong track record in tech entrepreneurship. 
    As a serial tech executive, he's co-founded AutoGravity, launching the first digital 
    car retail marketplace backed by Daimler and Volkswagen, and most recently serves as 
    CPO & CTO of Autonomy, raising over $75 million in venture funding.`,
  },
  {
    name: "Jai Bhavnani",
    title: "Co-founder and CEO of Waymont",
    picture: Jai,
    linkedIn: "https://www.linkedin.com/in/jaibhavnani/",
    description: `Jai Bhavnani is the co-founder and CEO of a company dedicated to building
    a better financial system, particularly in the realm of crypto-native wealth platforms.
    As a serial founder, he previously co-founded Rari Capital, a decentralized finance 
    protocol that reached over $1.5 billion AUM before being acquired for $375 million by Tribe
    moderators`,
  },
];

var keynoteSpeakers = [
  {
    name: "Adam and Ryan Goldston",
    photo: AdamRyanGoldston,
    title: "Co-Founders of Athletic Propulsion Labs",
    // company: FreshBrothers,
    // linkedIn: "https://www.linkedin.com/in/scott-goldberg-409321109/",
    description: `Adam and Ryan Goldston are the identical twin founders of APL (Athletic Propulsion Labs), the brand behind some of the most innovative footwear in the world. As former USC student-athletes, they built APL to bridge luxury and performance, launching the first shoe ever banned by the NBA for "providing an undue competitive advantage".
    \n\nSince then, they've turned APL into a globally recognized brand carried in over 300 luxury retailers, from Saks Fifth Avenue and Bergdorf to Le Bon Marché. They've partnered with big names like Lululemon and F1 champions Oracle Red Bull Racing.
    \n\nHonored at the White House, named to Forbes 30 Under 30, and inducted into the CFDA, Adam and Ryan know what takes to turn a college idea into global brand.`
  },
  {
    name: "Ashley Alexander",
    photo: AshleyAlexander,
    title: "Founder and CEO of Nami Matcha + YouTuber @urmomashley",
    // company: Mendocino,
    description: "Ashley Alexander is a powerhouse creator and founder and CEO of Nami Matcha. With over 1.8M YouTube subscribers and 230M views, she built her platform through raw, relatable content blending humor, lifestyle, and family. She's worked with brands like Dior and Sony, and cohosts the Beautiful Twin Sisters podcast with her sister Amber.\n\nIn 2024, Ashley launched Nami Matcha, selling out the first product in just 4 minutes. Less than a year later, Nami is available in 139 countries and is on track to become a multi-seven-figure brand without spending a cent on media. As a self taught, female AAPI entrepreneur, Ashley offers a clear perspective on building something meaningful. At this keynote with Shopify, she's sharing how she did it and what's next.",
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
  // {
  //   image: Apsy,
  // },
];



function Landing() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    mq.addListener(evt => setIsMobile(evt.matches));
  }, []);


  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `Dr. Carol Folt serves as the twelfth president of the University of Southern California. She is a highly experienced leader, internationally recognized life scientist, and award-winning teacher. In leading USC, Dr. Folt brings broad executive and leadership experience across the academy, including arts and sciences, professional schools, and academic medicine. Throughout her career, Dr. Folt has earned a reputation for always placing students at the center, advancing academic excellence and innovation, setting ambitious goals, prioritizing shared governance, and focusing on the future. Prior to her appointment at USC in July 2019, Dr. Folt led the University of North Carolina at Chapel Hill – 
  one of the nation's most distinguished and research-intensive universities – from 2013 to 2019. At UNC, she set a bold course for the university's future by spearheading a historic capital campaign, raising billions of dollars; building the school's first-ever strategic plan in collaboration with every school and department; fighting to make college education accessible and affordable; and inspiring thousands of Tar Heels to embrace the arts and sustainability. Under her leadership, UNC was repeatedly named the No. 1 value in public higher education, surpassed $1 billion in annual research expenditures for the first time in school history (No. 5 in the nation overall), and set admissions records every year. Prior to her tenure at UNC, Dr. Folt served in various leadership roles at Dartmouth College, including as interim president, provost, dean of faculty, and Dartmouth Professor of Biological Sciences. An Akron, Ohio, native, Dr. Folt earned her bachelor's degree in aquatic biology and a master's degree in biology from the University of California, Santa Barbara. She received her doctorate in ecology from the University of California, Davis, and did postdoctoral work at the W.K.
  Kellogg Biological Station of Michigan State University.`;

  // Split the full text approximately in half for the "Read More" functionality
  const halfTextIndex = Math.ceil(fullText.length / 2);
  const firstHalfText = fullText.substring(0, halfTextIndex);
  const secondHalfText = fullText.substring(halfTextIndex);

  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-[#080808]">
      {/* Hero Section */}
      <div
        className={`${
          isMobile ? "pt-20" : ""
        } min-w-full p-8 text-center min-h-screen w-full relative h-full flex flex-col items-center text-white justify-center`}
      >
        <h3 className="text-2xl relative z-20 font-bold tracking-wider text-[#C1C1CD]">
          April 23rd • 11AM to 8PM • USC TCC Ballroom
        </h3>
        <h1
          id="DEMO-Shadow"
          className={`${
            isMobile ? "text-6xl" : "text-8xl"
          } relative z-20 font-black mt-2 bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text`}
        >
          DEMO 2025
        </h1>
        <h4 className="text-2xl  relative z-20 text-[#C2C2CD] font-medium mt-4">
          USC's Largest Student Organized Entrepreneurship Conference
        </h4>
        <h5
          className={`${
            isMobile ? "text-md mt-2" : "text-xl"
          } relative z-20 text-gray-400 font-light mt-6`}
        >
          Sponsored by the USC Lloyd Greif Center for Entrepreneurial Studies
        </h5>
        <div className="flex relative z-20 flex-row w-full items-center mt-12 justify-center gap-8">
          <a
            href="https://www.eventbrite.com/e/demo-2025-entrepreneurship-conference-tickets-1257671050969?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
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
          TroyLabs presents DEMO 2025
        </h1>
        <h2 className="text-xl font-bold text-white mt-4">
          Empowering USC's Next Generation of Entrepreneurs
        </h2>
        <p className="leading-8 font-normal mt-8 text-gray-400 max-w-[800px] min-w-[300px] w-[50%]">
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
            href="https://www.eventbrite.com/e/809233237397"
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
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-7xl font-extrabold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
                50
              </h1>
              <h3 className="font-medium text-xl">Startups</h3>
            </div>
          </div>

          <Star />

          <div className="flex flex-row items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-7xl font-extrabold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
                100+
              </h1>
              <h3 className="font-medium text-xl">Investors</h3>
            </div>
          </div>

          <Star />

          <div className="flex flex-row items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-7xl font-extrabold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
                1000+
              </h1>
              <h3 className="font-medium text-xl">Attendees</h3>
            </div>
          </div>
        </div>
        {!isMobile && (
          <DEMORocket className="absolute pointer-events-none top-0 right-20 w-auto" />
        )}
        <AboutBlur className="absolute pointer-events-none bottom-0 right-0 w-auto" />
      </div>

      {/* Agenda */}
      <div
        className={`min-w-full min-h-screen w-full relative h-full flex flex-col ${
          isMobile ? "p-8" : "p-24"
        } text-white`}
      >
        <h3 className="text-[#747478] font-medium text-lg">April 23, 2025</h3>
        <h1 className="text-5xl mt-2 font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
          DEMO Agenda
        </h1>
        <h2 className="text-xl font-semibold text-white mt-4">
          A day full of speakers, pitches, and exhibitions
        </h2>
        <div className="w-full h-auto py-4  mt-10 flex items-center justify-between">
          <AgendaCard
            time={"11 AM"}
            reverse={false}
            agenda={"Doors Open"}
            description={"Doors for the Opening Ceremony will open at 11 AM and close at 11:45 AM."}
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
            time={"11:30 AM"}
            reverse={true}
            agenda={"Opening Ceremony"}
            description={
              "The Opening Ceremony with an opening speech from TroyLabs, the Lloyd Greif Center, and our sponsors."
            }
          />
        </div>
        <div className="w-full h-auto py-4 mt-2 flex items-center justify-between">
          <AgendaCard
            time={"12 PM"}
            reverse={false}
            agenda={"Keynote Panel"}
            description={
              "Adam and Ryan Goldston (Founders and CEOs of APL), Ashley Alexander (Founder of Nami Matcha, ur mom ashley on YT) and Shopify."
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
            time={"2 PM"}
            reverse={true}
            agenda={"Startup Exhibition"}
            description={
              "Doors reopen at 2 PM for the Startup Exhibition, the main event, which will be open to all guests. Attendees can walk around the exhibition to look at the startups, network with founders, meet investors, and enjoy free food and merchandise."
            }
          />
        </div>
        <div className="w-full h-auto py-4 mt-2 flex items-center justify-between">
          <AgendaCard
            time={"5:30 PM"}
            reverse={false}
            agenda={"Pitch Competition"}
            description={
              "Pitch Competitions for six companies will last from 5:30 PM to 7 PM, and winners will receive tuition-deductible prizes as awarded by the Lloyd Greif Center for Entrepreneurial Studies."
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

      {/* Keynote!! */}

      {/* <div
        className={`${
          isMobile ? "flex-col" : "flex-row"
        } w-full flex-start mt-10 gap-16 h-full flex`}
      >
        <div className="w-full justify-between h-full flex flex-col transition-all">
          <p className="text-4xl font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
            Opening Speech – Carol Folt, PhD
          </p>
          <p className="text-xl mt-2 font-semibold text-white">
            President of the University of Southern California
          </p>
          <p
            className={`${
              isMobile ? "w-full" : "w-3/4"
            } text-sm text-gray-300 mt-4 leading-loose font-light transition-all duration-700 ease-in-out `}
          >
            {isExpanded ? fullText : `${firstHalfText}...`}
          </p>
          <div className="w-full flex items-center">
            <button
              onClick={toggleExpanded}
              className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out mt-2"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
        <img
          src={Carol}
          className={`${
            isMobile ? "w-full" : "w-[27.5%] h-[100%]"
          } rounded-lg shadow-lg border border-blue-500 shadow-blue-500 object-contain`}
        />
      </div> */}

      <div
        className={`min-w-full min-h-screen w-full relative h-full flex flex-col ${
          isMobile ? "p-8" : "p-24"
        } text-white`}
      >
        <div className="flex flex-col w-8/12 mt-8">
          <h3 className="text-[#747478] font-medium text-lg">
            Inspiring Founder Stories
          </h3>
          <h1 className="text-5xl mt-2 font-bold  bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
            Keynote Panel
          </h1>
          <h2 className="text-xl font-semibold text-white mt-4">
            APL, Nami Matcha, Shopify
          </h2>
        </div>

        <div className="w-full relative z-20 h-auto py-4 gap-16 mt-12 flex flex-col items-center justify-between">
          {keynoteSpeakers.map((speaker, index) => {
            return (
              <div
                className={`${
                  isMobile ? "flex-col" : "flex-row"
                } w-full flex-start gap-16 h-full flex`}
              >
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-48 h-48 md:w-64 md:h-64 shadow-lg border border-blue-500 shadow-blue-500 object-cover rounded-lg flex-shrink-0"
                />
                <div
                  className={`${
                    isMobile ? "w-full" : "w-[60%]"
                  } h-full flex flex-col`}
                >
                  <p
                    onClick={() => window.open(speaker.linkedIn, "_blank")}
                    className="text-4xl cursor-pointer font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text"
                  >
                    {speaker.name}
                  </p>
                  <p className="text-xl mt-2 font-semibold text-white">
                    {speaker.title}
                  </p>
                  {speaker.description.split(/\n\n+/).map((para, idx) => (
                    <p key={idx} className="text-sm text-gray-300 mt-4 leading-loose font-light">
                      {para}
                    </p>
                  ))}
                  <img src={speaker.company} className="w-40 mt-8" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col w-8/12 mt-8">
          <h1 className="text-5xl mt-2 font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
            Our Moderators
          </h1>

          <h2 className="text-xl font-semibold text-white mt-4">
            Glenn Fox, Maryann Xu
          </h2>
        </div>

        <div
          className={`${
            isMobile ? "flex-col" : "flex-row"
          } w-full flex-start mt-10 gap-16 h-full flex`}
        >
          <div className="w-full justify-between h-full flex flex-col">
            <p 
              className="text-4xl font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text cursor-pointer"
              onClick={() => window.open("https://www.linkedin.com/in/glenn-r-fox-phd-2418bba1/", "_blank")}
            >
              Glenn Fox
            </p>
            <p className="text-xl mt-2 font-semibold text-white">
              Assistant Professor of Clinical Entrepreneurship
            </p>
            <p
              className={`${
                isMobile ? "w-full" : "w-3/4"
              } text-sm text-gray-300 mt-4 leading-loose font-light`}
            >
              Dr. Glenn Fox is a faculty member at the University of Southern
              California's Lloyd Greif Center for Entrepreneurial Studies, in
              the Marshall School of Business. His current projects focus on
              neural systems for emotion regulation, high stakes training, and
              developing entrepreneurial mindset skills in founders and
              business leaders.Glenn received his Ph.D. in Neuroscience from
              USC, where he focused on the neural correlates of gratitude,
              empathy, and neuroplasticity. Currently, Glenn is the Director
              and Founder of the USC Found Well Initiative which aims to
              understand and promote entrepreneurial mindset in founders and
              business leaders.
            </p>
          </div>
          
          <img
            src={GlennFox}
            className={`${
              isMobile ? "w-full" : "w-1/4"
            } rounded-lg shadow-lg border border-blue-500 shadow-blue-500 object-cover h-[500px]`}
            />
        </div>

        <br></br> <br></br>

        <div
          className={`${
            isMobile ? "flex-col" : "flex-row"
          } w-full flex-start mt-10 gap-16 h-full flex`}
        >
          <div className="w-full justify-between h-full flex flex-col">
            <p 
              className="text-4xl font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text cursor-pointer"
              onClick={() => window.open("https://www.linkedin.com/in/maryannxu/", "_blank")}
            >
               Maryann Xu
            </p>
            <p className="text-xl mt-2 font-semibold text-white">
              Incoming Software Engineering at Meta
            </p>
            <p
              className={`${
                isMobile ? "w-full" : "w-3/4"
              } text-sm text-gray-300 mt-4 leading-loose font-light`}
            >
              Maryann Xu is a CS student at USC and an incoming software engineering intern at Meta.
              She's built startups, published scientific research in biomedical engineering, and 
              developed digital twins of microsatellites at Booz Allen Hamilton. Right now, she's 
              co-president of TroyLabs and loves supporting USC's entrepreneurship community.
            </p>
          </div>
          
          <img
            src={MaryannXu}
            className={`${
              isMobile ? "w-full" : "w-1/4"
            } rounded-lg shadow-lg border border-blue-500 shadow-blue-500 object-cover h-[500px]`}
            />
        </div>
      </div>

      <KeynoteBlur className="absolute pointer-events-none bottom-0 w-auto" />
      <KeynoteCircle className="absolute pointer-events-none right-0 bottom-1/4 w-auto" />

      {/* Pitch Competition */}

      <div
        className={`min-w-full min-h-screen w-full relative h-full flex flex-col ${
          isMobile ? "p-8" : "p-24"
        } text-white`}
      >
        {/* <div className={`${isMobile ? "flex-col" : "flex-row"} flex mt-8`}>
          <div className={`${isMobile ? "w-full" : "w-8/12"} flex flex-col`}>
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
                isMobile ? "w-[100%]" : "w-[60%]"
              }`}
            >
              Pitch Competition for six startups will last from 5:30 PM to 7 PM,
              and winners will receive tuition-deductible prizes as awarded by
              the Lloyd Greif Center for Entrepreneurial Studies, and credits to
              be used on Apsy's AI-Driven App Builder platform.
            </p>
            <div className="mt-5">
            </div>
            <div className="flex relative z-20 flex-row w-full items-left mt-12 justify-left gap-8">
              <a
                href="/startups"
                rel="noreferrer"
                className="HeroButton-Shadow text-lg cursor-pointer font-normal text-[#DEE0E3] p-2 px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265] hover:bg-[#1F1F23] hover:shadow-inner active:bg-[#0C0C0D] transition-all hover:shadow-slate-700"
              >
                DEMO 2025 Startups
              </a>
            </div>
          </div>
          <div
            className={`${isMobile ? "mt-8 w-full" : "w-4/12"} flex flex-col`}
          >
            <div
              className={`w-full flex flex-col items-center text-center justify-start mt-8`}
            >
              <h2 className="text-3xl font-semibold text-gray-400">
                {" "}
                Greif Sponsored Prizes
              </h2>
              {PrizeData.map((data) => {
                return (
                  <div className="flex mt-8 flex-col items-center justify-center gap-2">
                    <h1 className="text-7xl font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
                      {data.amount}
                    </h1>
                    <h3 className="font-medium text-xl">{data.award}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <h1 className="text-3xl mt-24 font-semibold text-gray-400">
          Pitching Startups
        </h1>

        <div
          className={`${
            isMobile ? "grid-cols-2" : "grid-cols-3"
          } grid gap-8 w-full h-full mt-6 justify-center`}
        >
          {pitchingStartups.map((startup) => (
            <div key={startup.id} className="flex flex-col items-center">
              <img
                src={startup.logo}
                className="w-64 h-64 object-contain rounded-3xl"
                alt={startup.name}
              />
            </div>
          ))}
        </div>

        <h1 className="text-2xl mt-24 font-semibold text-gray-400">
          Apsy Sponsored Prizes
        </h1>
        <h1 className="text-lg mt-2 font-medium text-gray-500">
          Credits to be used on{" "}
          <p
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.apsy.io/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            className="inline cursor-pointer text-green-500 hover:text-green-600 "
          >
            {" "}
            Apsy's innovative AI-Driven App Builder platform{" "}
          </p>
        </h1>

        <div
          className={`${
            isMobile ? "grid-cols-1" : "grid-cols-4"
          } grid gap-4 w-full h-full mt-6 justify-center`}
        >
          {[
            { place: "First Place", amount: "20k" },
            { place: "Second Place", amount: "10k" },
            { place: "Third Place", amount: "5k" },
            { place: "All Pitching Startups", amount: "2k" },
          ].map((i) => (
            <div
              className="w-full text-center gap-2 flex-col p-8 flex items-center justify-center"
              key={i}
            >
              <h2 className="text-xl font-medium text-gray-300">{i.place}</h2>
              <h1 className="text-7xl font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
                ${i.amount}
              </h1>
            </div>
          ))}
        </div> */}

        <h1 className="text-3xl mt-24 font-semibold text-gray-400">
          Pitch Competition Judges
        </h1>

        <div className="w-full h-full flex flex-col items-start mt-12 gap-12">
          {judges.map((judge) => (
            <div className={`${isMobile ? "flex-col" : "flex-row"} flex`}>
              <img
                src={judge.picture}
                className="w-64 h-64 object-cover rounded-3xl shadow-lg shadow-blue-500 border-blue-500 border-[1px]"
                alt={judge.name}
              />
              <div
                className={`${
                  isMobile ? "mt-12" : "ml-12"
                } flex w-full items-start h-full justify-start flex-col`}
              >
                <h1
                  onClick={() => window.open(judge.linkedIn, "_blank")}
                  className="font-bold cursor-pointer bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text text-3xl"
                >
                  {judge.name}
                </h1>
                <h3 className="text-lg font-medium mt-2">{judge.title}</h3>
                <p className="text-[13.5px] text-gray-300 leading-6 font-thin mt-2">
                  {judge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <PitchBlur className="absolute pointer-events-none bottom-1/4 w-auto" />
      </div>

      {/* Event */}

      {/* <div
        className={`min-w-full min-h-screen w-full relative h-full flex flex-col ${
          isMobile ? "p-8" : "p-24"
        } text-white`}
      >
        <h3 className="text-[#747478] font-medium text-lg">
          Future of Entrepreneurship with Generative AI
        </h3>
        <h1 className="text-5xl mt-2 font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text">
          Gen AI 101 for Entrepreneurs: Opportunities & Risks
        </h1>
        <h2 className="text-xl font-semibold text-white mt-4">
          TCC 227, 2:30 PM to 3:30 PM{" "}
          <p className="text-gray-300 inline text-lg">
            • First Come, First Served for Seating!
          </p>
        </h2>

        <div
          className={`${
            isMobile ? "flex-col" : "flex-row"
          } relative z-20 w-full mt-16 gap-8 justify-evenly items-center flex`}
        >
          <div
            className={`${
              isMobile ? "w-full" : "w-1/4"
            } items-center text-center justify-center h-full flex flex-col`}
          >
            <img
              src={Arushi}
              className="shadow-lg shadow-blue-500 w-72 h-72 rounded-full mb-6 object-cover"
            />
            <h3 className="text-gray-300 mb-2 mt-2 font-light">
              Our Workshop Lead
            </h3>
            <h2 
              className="text-3xl font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] leading-normal text-transparent inline-block bg-clip-text cursor-pointer" 
              onClick={() => window.open("https://www.linkedin.com/in/arushisaxena/", "_blank")}
            >
              Arushi Saxena
            </h2>
            <h3 className="text-white mt-2 text-lg font-medium">
              Head of Trust & Safety at DynamoFL
            </h3>
          </div>
          <div className={`${isMobile ? "w-full text-sm" : "w-2/3"}`}>
            <p className="text-gray-300 text-md font-light leading-loose mt-2">
              Join Us in learning more about utilizing Generative AI tools for
              our entrepreneurial ventures! Arushi Saxena has prepared her great
              insights on the basics Gen AI tools usage for opportunities &
              risks to be aware of with AI.
              <br /> <br /> Arushi is the Head of Trust & Safety at DynamoFL, an
              AI privacy startup helping organizations develop
              regulatory-compliant AI. Previously, she led the global
              go-to-market strategy for Twitter's Trust & Safety team, focusing
              on features and policies to prevent misinformation and election
              interference on the platform. Arushi has over 10 years of
              experience across technology, academia, and civil society work and
              has been invited to speak by the US Department of Defense, UC
              Berkeley, Harvard University, All Tech is Human, Mozilla, and
              more. Outside of her industry involvement, she has served as a
              Visiting Fellow at the Integrity Institute, an Affiliate of All
              Tech is Human, and a Research Fellow at Harvard University's
              Berkman Klein Center for Internet & Society. She received her
              Masters in Design Engineering with Distinction from Harvard
              University and a B.S. in Business Administration from UC Berkeley.
            </p>
          </div>
        </div>
        <WorkshopBlur className="absolute pointer-events-none bottom-0 w-auto" />
      </div> */}

      {/* ADA */}
      <div
        className={`${
          isMobile ? "p-8 pb-8" : "p-24"
        } min-w-full w-full justify-center items-center relative flex flex-col text-white`}
      >
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-center mb-10 bg-gradient-to-t from-[#116AB8] to-[#91BCE1] leading-normal text-transparent inline-block bg-clip-text text-3xl">
            ADA Accommodation at the USC Trojan Grand Ballroom and TCC 227
          </h2>
          {/* line */}

          <div className={`${isMobile ? "w-[70%]" : "w-3/4"} text-center`}>
            <p className="text-gray-400 leading-loose text-lg mb-6">
              This program is open to all eligible individuals. TroyLabs operates all of its programs and activities consistent with the University's Notice of Non-Discrimination.
              Eligibility is not determined based on race, sex, ethnicity, sexual orientation, or any other prohibited factor.
            </p>
            
            <p className="text-gray-400 leading-loose text-lg">
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
          DEMO 2025!
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
