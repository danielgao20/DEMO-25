import React, {useEffect, useState} from 'react'
import { ReactComponent as Startuppageblur1 } from "../assets/Startuppageblur1.svg";
import StartupCard from '../components/StartupCard';
import StartupSearch from '../components/StartupSearch';
import startupsData from "../components/startups.json"
import Serena_Allen from "../assets/headshots/Serena_Allen.png"
import Default_Profile from "../assets/headshots/profile.png"
import Adam_Yang from "../assets/headshots/Adam_Yang.jpg"
import Jenna_Jiaying_Wu from "../assets/headshots/Jenna_Jiaying_Wu.jpg"
import Cameron_Joshua_Wong from "../assets/headshots/Cameron_Joshua_Wong.jpg"
import Adam_Asfaha from "../assets/headshots/Adam_Asfaha.jpeg"
import Rylan_Pozniak_Daniels from "../assets/headshots/Rylan_Pozniak_Daniels.jpeg"
import Aaron_Nazarian from "../assets/headshots/Aaron_Nazarian.JPG"
import Noah_Nazarian from "../assets/headshots/Noah_Nazarian.JPG"
import Kawser_Khan from "../assets/headshots/Kawser_Khan.png"
import Bobby_Ntoya from "../assets/headshots/Bobby_Ntoya.png"
import Ezra_Bird from "../assets/headshots/Ezra_Bird.png"
import Samson_Taxon from "../assets/headshots/Samson_Taxon.jpg"
import Detravious_Jamari_Brinkley from "../assets/headshots/Detravious_Jamari_Brinkley.JPG"
import Bella_Nava from "../assets/headshots/Bella_Nava.jpeg"
import Yuxing_Zhou from "../assets/headshots/Yuxing_Zhou.png"
import Danny_Pugh from "../assets/headshots/Danny_Pugh.jpeg"
import Garrett_Sanderson from "../assets/headshots/Garrett_Sanderson.jpeg"
import Darcell_Edwards from "../assets/headshots/Darcell_Edwards.jpeg"
import Ketana_Chadalavada from "../assets/headshots/Ketana_Chadalavada.png"
import Ellie_Cai from "../assets/headshots/Ellie_Cai.jpg"
import Riya_Daga from "../assets/headshots/Riya_Daga.png"
import Alex_Duong from "../assets/headshots/Alex_Duong.jpg"
import Bo_Ying_Liu from "../assets/headshots/Bo_Ying_Liu.jpg"
import Dylan_Lewis from "../assets/headshots/Dylan_Lewis.jpg"
import Alex_Forgosh from "../assets/headshots/Alex_Forgosh.png"
import Yusuf_Ansari from "../assets/headshots/Yusuf_Ansari.png"
import Arif_Ansari from "../assets/headshots/Arif_Ansari.jpeg"
import Sheila_Wang from "../assets/headshots/Sheila_Wang.jpeg"
import Jason_Wiemels from "../assets/headshots/Jason_Wiemels.png"
import Danial_Gondal from "../assets/headshots/Danial_Gondal.png"
import Lakshya_Bothra from "../assets/headshots/Lakshya_Bothra.png"
import Srishti_Chopra from "../assets/headshots/Srishti_Chopra.png"
import Kevin_Park from "../assets/headshots/Kevin_Park.png"
import Moses_Liu from "../assets/headshots/Moses_Liu.jpeg"
import Natalie_Felikian from "../assets/headshots/Natalie_Felikian.jpeg"
import Navya_Singh from "../assets/headshots/Navya_Singh.jpeg"
import Tyler_Shooshani from "../assets/headshots/Tyler_Shooshani.jpeg"
import Saurabh_Ghanekar from "../assets/headshots/Saurabh_Ghanekar.jpeg"
import Yihan_Luo from "../assets/headshots/Yihan_Luo.jpg"
import Yixin_Sun from "../assets/headshots/Yixin_Sun.png"
import Yechen_Wang from "../assets/headshots/Yechen_Wang.png"
import Yishu_Huang from "../assets/headshots/Yishu_Huang.jpg"
import Anna_Shaposhnik from "../assets/headshots/Anna_Shaposhnik.jpg"
import Luc_Hosy from "../assets/headshots/Luc_Hosy.jpeg"
import Samuel_Cheng from "../assets/headshots/Samuel_Cheng.jpeg"
import Yu_Zhang from "../assets/headshots/Yu_Zhang.jpg"
import Julian_Lopez_Birlain from "../assets/headshots/Julian_Lopez_Birlain.JPG"
import Miguel_Gutierrez_Elizondo from "../assets/headshots/Miguel_Gutierrez_Elizondo.jpg"
import Joshua_McCampbell from "../assets/headshots/Joshua_McCampbell.jpeg"
import Mohammed_Alamgir from "../assets/headshots/Mohammed_Alamgir.jpeg"
import Jonathan_Nahin from "../assets/headshots/Jonathan_Nahin.jpg"
import Jonathan_Liu from "../assets/headshots/Jonathan_Liu.jpg"
import Tony_Xin from "../assets/headshots/Tony_Xin.jpeg"
import Phillip_Lau from "../assets/headshots/Phillip_Lau.jpg"
import Mahkameh_Rasouli from "../assets/headshots/Mahkameh_Rasouli.jpg"
import Pooyan_Mobtahej from "../assets/headshots/Pooyan_Mobtahej.JPG"
import Aryan_Barik from "../assets/headshots/Aryan_Barik.jpg"
import Xichen_Gao from "../assets/headshots/Xichen_Gao.jpg"
import Mario_Apuzzo from "../assets/headshots/Mario_Apuzzo.png"
import Sky_Xiang from "../assets/headshots/Sky_Xiang.jpg"
import Robert_Luo from "../assets/headshots/Robert_Luo.png"
import Jun_Matsuo from "../assets/headshots/Jun_Matsuo.jpg"
import Plato_Bougas from "../assets/headshots/Plato_Bougas.jpg"
import Alex_Nimrod from "../assets/headshots/Alex_Nimrod.jpeg"
import Maximus_Jenkins_Kaleb_Manske from "../assets/headshots/Maximus_Jenkins _Kaleb_Manske.png"
import Ryan_Yeung from "../assets/headshots/Ryan_Yeung.jpeg"
import Nick_Chetwood from "../assets/headshots/Nick_Chetwood.png"
import Tatum_Verona from "../assets/headshots/Tatum_Verona.jpg"
import Matthew_Grant from "../assets/headshots/Matthew_Grant.JPG"
import Gil_Travish from "../assets/headshots/Gil_Travish.png"
import Omar_Abdullateef from "../assets/headshots/Omar_Abdullateef.jpg"
import Anees_Abdullateef from "../assets/headshots/Anees_Abdullatee.jpeg"

import AirVitalize_Innovations from "../assets/logos/AirVitalize_Innovations.png"
import AiStudy from "../assets/logos/AiStudy.png"
import Amino_Avenue from "../assets/logos/Amino_Avenue.png"
import ARLingo from "../assets/logos/ARLingo.png"
import Bahamii from "../assets/logos/Bahamii.png"
import Beige from "../assets/logos/Beige.png"
import Buzzwa_Core from "../assets/logos/Buzzwa_Core.png"
import Catalyst_Robotics from "../assets/logos/Catalyst_Robotics.png"
import Convoice from "../assets/logos/Convoice.png"
import Degreely from "../assets/logos/Degreely.png"
import Digistone from "../assets/logos/Digistone.png"
import Dual_X_Studio from "../assets/logos/Dual-X_Studio.jpg"
import EVRYN from "../assets/logos/EVRYN.png"
import Fair_Square from "../assets/logos/Fair_&_Square.png"
import Guard_ProStamp_Inc from "../assets/logos/Guard_ProStamp_Inc..png"
import Hatchet from "../assets/logos/Hatchet.png"
import Intuition_Intelligence_Inc from "../assets/logos/Intuition_Intelligence_Inc..png"
import Jargon from "../assets/logos/Jargon.png"
import Joja_Entertainment_LLC from "../assets/logos/Joja_Entertainment_LLC.png"
import Kadak from "../assets/logos/Kadak.png"
import Laminar_Copilot from "../assets/logos/Laminar_Copilot.png"
import Lionistic from "../assets/logos/Lionistic.png"
import Maplehouse from "../assets/logos/Maplehouse.png"
import Nexus from "../assets/logos/Nexus.png"
import OfSpectrum from "../assets/logos/OfSpectrum.png"
import Orbital_Entertainment_Supply from "../assets/logos/Orbital_Entertainment_Supply.png"
import Packa_Design from "../assets/logos/Packa.Design.png"
import Prometheus_Data from "../assets/logos/Prometheus_Data.png"
import Quinta from "../assets/logos/Quinta.png"
import Recei from "../assets/logos/Recei.png"
import Schej from "../assets/logos/Schej.png"
import SeekEatsLA from "../assets/logos/SeekEatsLA.PNG"
import ShapeShift from "../assets/logos/ShapeShift.jpg"
import Skyguard from "../assets/logos/skyguard.png"
import Stellace from "../assets/logos/Stellace.png"
import Tanbii from "../assets/logos/Tanbii.png"
import TERRATOKES from "../assets/logos/TERRATOKES.png"
import The_Indiestry from "../assets/logos/The_Indiestry.png"
import ThirdPlace from "../assets/logos/ThirdPlace.png"
import TwoTwenty_Hard_Seltzer from "../assets/logos/TwoTwenty_Hard_Seltzer.png"
import underdose from "../assets/logos/underdose.png"
import UpDonor from "../assets/logos/UpDonor.png"
import WellTraAI from "../assets/logos/WellTra.AI.png"

import Anacapa from "../assets/logos/Anacapa.png"
import Biomed from "../assets/logos/Biomed.png"
import Lav from "../assets/logos/Lav.png"
import Nutrimind from "../assets/logos/Nutrimind.png"
import RevSend from "../assets/logos/RevSend.png"
import SentiMind from "../assets/logos/SentiMind.png"
import ViBo_Health from "../assets/logos/ViBo_Health.png"



const getLogo = (logoName) => {
    switch(logoName){
        case "AirVitalize_Innovations":
            return AirVitalize_Innovations;
        case "ViBo_Health":
            return ViBo_Health;
        case "Anacapa":
            return Anacapa;
        case "Biomed":
            return Biomed;
        case "Lav":
            return Lav;
        case "NutriMind":
            return Nutrimind;
        case "RevSend":
            return RevSend;
        case "SentiMind":
            return SentiMind;
        case "AiStudy":
            return AiStudy;
        case "Amino_Avenue":
            return Amino_Avenue;
        case "ARLingo":
            return ARLingo;
        case "Bahamii":
            return Bahamii;
        case "Beige":
            return Beige;
        case "Buzzwa_Core":
            return Buzzwa_Core;
        case "Catalyst_Robotics":
            return Catalyst_Robotics;
        case "Convoice":
            return Convoice;
        case "Degreely":
            return Degreely;
        case "Digistone":
            return Digistone;
        case "Dual_X_Studio":
            return Dual_X_Studio;
        case "EVRYN":
            return EVRYN;
        case "Fair_Square":
            return Fair_Square;
        case "Guard_ProStamp_Inc":
            return Guard_ProStamp_Inc;
        case "Hatchet":
            return Hatchet;
        case "Intuition_Intelligence_Inc":
            return Intuition_Intelligence_Inc;
        case "Jargon":
            return Jargon;
        case "Joja_Entertainment_LLC":
            return Joja_Entertainment_LLC;
        case "Kadak":
            return Kadak;
        case "Laminar_Copilot":
            return Laminar_Copilot;
        case "Lionistic":
            return Lionistic;
        case "Maplehouse":
            return Maplehouse;
        case "Nexus":
            return Nexus;
        case "OfSpectrum":
            return OfSpectrum;
        case "Orbital_Entertainment_Supply":
            return Orbital_Entertainment_Supply;
        case "Packa_Design":
            return Packa_Design;
        case "Prometheus_Data":
            return Prometheus_Data;
        case "Quinta":
            return Quinta;
        case "Recei":
            return Recei;
        case "Schej":
            return Schej;
        case "SeekEatsLA":
            return SeekEatsLA;
        case "ShapeShift":
            return ShapeShift;
        case "Skyguard":
            return Skyguard;
        case "Stellace":
            return Stellace;
        case "Tanbii":
            return Tanbii;
        case "TERRATOKES":
            return TERRATOKES;
        case "The_Indiestry":
            return The_Indiestry;
        case "ThirdPlace":
            return ThirdPlace;
        case "TwoTwenty_Hard_Seltzer":
            return TwoTwenty_Hard_Seltzer;
        case "underdose":
            return underdose;
        case "UpDonor":
            return UpDonor;
        case "WellTraAI":
            return WellTraAI;

        default:
            return null;
    }
};

const getHeadshot = (headshotName) => {
    switch (headshotName) {
        case "Serena_Allen":
            return Serena_Allen;
        case "Adam_Yang":
            return Adam_Yang;
        case "Jenna_Jiaying_Wu":
            return Jenna_Jiaying_Wu;
        case "Cameron_Joshua_Wong":
            return Cameron_Joshua_Wong;
        case "Adam_Asfaha":
            return Adam_Asfaha;
        case "Rylan_Pozniak_Daniels":
            return Rylan_Pozniak_Daniels;
        case "Aaron_Nazarian":
            return Aaron_Nazarian;
        case "Noah_Nazarian":
            return Noah_Nazarian;
        case "Kawser_Khan":
            return Kawser_Khan;
        case "Bobby_Ntoya":
            return Bobby_Ntoya;
        case "Ezra_Bird":
            return Ezra_Bird;
        case "Samson_Taxon":
            return Samson_Taxon;
        case "Detravious_Jamari_Brinkley":
            return Detravious_Jamari_Brinkley;
        case "Bella_Nava":
            return Bella_Nava;
        case "Yuxing_Zhou":
            return Yuxing_Zhou;
        case "Danny_Pugh":
            return Danny_Pugh;
        case "Garrett_Sanderson":
            return Garrett_Sanderson;
        case "Darcell_Edwards":
            return Darcell_Edwards;
        case "Ketana_Chadalavada":
            return Ketana_Chadalavada;
        case "Ellie_Cai":
            return Ellie_Cai;
        case "Riya_Daga":
            return Riya_Daga;
        case "Alex_Duong":
            return Alex_Duong;
        case "Bo_Ying_Liu":
            return Bo_Ying_Liu;
        case "Dylan_Lewis":
            return Dylan_Lewis;
        case "Alex_Forgosh":
            return Alex_Forgosh;
        case "Yusuf_Ansari":
            return Yusuf_Ansari;
        case "Arif_Ansari":
            return Arif_Ansari;
        case "Sheila_Wang":
            return Sheila_Wang;
        case "Jason_Wiemels":
            return Jason_Wiemels;
        case "Danial_Gondal":
            return Danial_Gondal;
        case "Lakshya_Bothra":
            return Lakshya_Bothra;
        case "Srishti_Chopra":
            return Srishti_Chopra;
        case "Kevin_Park":
            return Kevin_Park;
        case "Moses_Liu":
            return Moses_Liu;
        case "Natalie_Felikian":
            return Natalie_Felikian;
        case "Navya_Singh":
            return Navya_Singh;
        case "Tyler_Shooshani":
            return Tyler_Shooshani;
        case "Saurabh_Ghanekar":
            return Saurabh_Ghanekar;
        case "Yihan_Luo":
            return Yihan_Luo;
        case "Yixin_Sun":
            return Yixin_Sun;
        case "Yechen_Wang":
            return Yechen_Wang;
        case "Yishu_Huang":
            return Yishu_Huang;
        case "Anna_Shaposhnik":
            return Anna_Shaposhnik;
        case "Luc_Hosy":
            return Luc_Hosy;
        case "Samuel_Cheng":
            return Samuel_Cheng;
        case "Yu_Zhang":
            return Yu_Zhang;
        case "Julian_Lopez_Birlain":
            return Julian_Lopez_Birlain;
        case "Miguel_Gutierrez_Elizondo":
            return Miguel_Gutierrez_Elizondo;
        case "Joshua_McCampbell":
            return Joshua_McCampbell;
        case "Mohammed_Alamgir":
            return Mohammed_Alamgir;
        case "Jonathan_Nahin":
            return Jonathan_Nahin;
        case "Jonathan_Liu":
            return Jonathan_Liu;
        case "Tony_Xin":
            return Tony_Xin;
        case "Phillip_Lau":
            return Phillip_Lau;
        case "Mahkameh_Rasouli":
            return Mahkameh_Rasouli;
        case "Pooyan_Mobtahej":
            return Pooyan_Mobtahej;
        case "Aryan_Barik":
            return Aryan_Barik;
        case "Xichen_Gao":
            return Xichen_Gao;
        case "Mario_Apuzzo":
            return Mario_Apuzzo;
        case "Sky_Xiang":
            return Sky_Xiang;
        case "Robert_Luo":
            return Robert_Luo;
        case "Jun_Matsuo":
            return Jun_Matsuo;
        case "Plato_Bougas":
            return Plato_Bougas;
        case "Alex_Nimrod":
            return Alex_Nimrod;
        case "Maximus_Jenkins_Kaleb_Manske":
            return Maximus_Jenkins_Kaleb_Manske;
        case "Ryan_Yeung":
            return Ryan_Yeung;
        case "Nick_Chetwood":
            return Nick_Chetwood;
        case "Tatum_Verona":
            return Tatum_Verona;
        case "Matthew_Grant":
            return Matthew_Grant;
        case "Gil_Travish":
            return Gil_Travish;
        case "Omar_Abdullateef":
            return Omar_Abdullateef;
        case "Anees_Abdullateef":
            return Anees_Abdullateef;
        default:
            return Default_Profile;
    }
};


const Startupgrid = () => {

    const [startupData, setStartupData] = useState([]);

    useEffect(() => {
        //from startups.json
        setStartupData(startupsData);
    }, []);

    return (
        <div className="w-screen min-h-screen bg-[#080808]">
      {/* Hero Section */}
      <div className="border-b border-solid min-w-full p-8 text-center mt-40 pb-40 w-full relative h-full flex flex-col items-center text-white justify-center">
      <Startuppageblur1 className="absolute pointer-events-none w-auto" />
        <h1
          id="DEMO-Shadow"
          className="text-9xl relative z-20 font-black mt-2 bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text"
        >
          Our Startups
        </h1>
        <h4 className="text-2xl  relative z-20 text-[#C2C2CD] font-medium mt-4">
        50 of the best startups from USC and across Southern California
        </h4>
        
      </div>
      <span>
        <StartupSearch allStartupData={startupData} filter={setStartupData} />
      
        <div className="grid grid-cols-4 gap-8 mt-6 ml-10 mr-10">
            {startupData.map((startup, index) => (
                <StartupCard
                    key={index}
                    name={startup.name}
                    sector={startup.sector}
                    logo={getLogo(startup.logo)}
                    cardcolor={startup.cardcolor}
                    description={startup.description}
                    link={startup.link}
                    industries={startup.industries}
                    team={startup.team.map(member => ({
                        ...member,
                        headshot: getHeadshot(member.headshot)
                    }))}
                    recruiting={startup.recruiting}/>
            ))}
        </div>
        </span>
        </div>

    );
}

export default Startupgrid;


