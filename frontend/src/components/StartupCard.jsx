import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { ReactComponent as StartupCardDesign } from "../assets/StartupCardDesign.svg";
import './flip.css';
import TopoImage from "../assets/TopoPopup.png";
import StartupCardImage from "../assets/StartupCardImage.png";
import LinkedInLogo from "../assets/linkedinlogo.png"
import EmailLogo from "../assets/emaillogo.png"
import SEGraphic from "../assets/segraphic.png"
import DesignGraphic from "../assets/designgraphic.png"
import MarketGraphic from "../assets/marketgraphic.png"
import FinancialGraphic from "../assets/financialgraphic.png"


const customModalStyles = {
    overlay:{
        backdropFilter: 'blur(5px)',
        background: 'rgba(4,5,7,0.25)',
    },
    content: {
        top: '10%',
        bottom: '7%',
        left: '30%',
        right: '30%',
        overflowY: 'auto',
        background: 'rgba(19,27,42,225)',
        boxShadow: '3px 5px 10px rgba(46,56,73,0.5)',
        borderRadius: '8px',
        outline: 'none',
        border: 'none',
        color: 'white'
    }
};

const RecruitingItem = ({ position }) => {
    const getColorAndGraphic = (position) => {
        switch (position) {
            case 'Software Engineer':
                return { color: 'rgba(15, 76, 130, 0.75)', graphic: SEGraphic };
            case 'Marketer':
                return { color: 'rgba(220, 65, 35, 0.75)', graphic: MarketGraphic };
            case 'UI Designer':
                return { color: 'rgba(103, 104, 171, 0.75)', graphic: DesignGraphic };
            case 'Financial Analyst':
                return { color: 'rgba(0, 153, 123, 0.75)', graphic: FinancialGraphic };
            default:
                return { color: 'rgba(0, 0, 0, 0)', graphic: null }; // Default color and no graphic if position doesn't match
        }
    };

    const { color, graphic } = getColorAndGraphic(position);

    return (
        <div className="rounded-md overflow-hidden border-color" style={{backgroundColor: color}}>
            <div className="flex justify-center p-4 h-full mb-5 mt-5">
                <div className="flex flex-col items-center">
                    {graphic && <img src={graphic} alt={position} className="h-12 w-12 mb-2"/>}
                    <div className="mt-2 flex justify-center">
                        <p className="text-white text-sm text-center">{position}</p>
                    </div>
                </div>
            </div>
        </div>
    );

};


const StartupCard = ({name, sector, logo, cardcolor, description, link, industries, team, recruiting}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        // Prevent scrolling on the original page when the modal is open
        if (modalIsOpen) {
            document.body.style.overflow = 'hidden';
            return () => document.body.style.overflow = 'unset';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modalIsOpen]);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    return (
        <div className={`flip-card bg-gray-900 overflow-hidden w-full h-[100%] p-4 text-white my-8`}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="flex justify-between items-center mb-4 ml-5 mr-5 mt-4">
                        <div className="float-left">
                            <h1 className="text-xl font-normal">{name}</h1>
                        </div>
                        <div className="float-right">
                            <h2 className="text-xl font-extralight">{sector}</h2>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-4" >
                        <span className="text-lg mt-0 translate-y-32" >

                            <img src={logo} alt="logo"/>

                        </span>
                    </div>
                    <img src={StartupCardImage} alt="design" className=" h-fit -ml-5 rotate-10 translate-y-20 " style={{maxWidth: '387px'}} />

                    {/*<StartupCardDesign className=" h-fit w-[110%] -ml-5 rotate-10 translate-y-20" />*/}
                    <div className="flex justify-center">
                        {/* Insert rocket icon here, you might use an img tag or inline svg */}
                    </div>
                </div>

                <div className="flip-card-back">
                    <div className="flex justify-between items-center mb-4 ml-5 mr-5 mt-4">
                        <div className="float-left">
                            <h1 className="text-xl font-normal">{name}</h1>
                        </div>
                        <div className="float-right">
                            <h2 className="text-xl font-extralight">{sector}</h2>
                        </div>
                    </div>
                    <div className="flex flex-col items-start mb-4 mx-4">
                        <span className="text-md mt-0 mb-4 translate-y-32">{description}</span>
                        <button className="text-md mt-2 translate-y-32" onClick={openModal}>View ➔</button>
                    </div>
                    <div className="flex justify-center"></div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="View Startup Modal"
                style={customModalStyles}
                blockScroll={true}
            >
                {/* Modal content */}
                <div style={{ position: 'relative' }}>
                    <img src={TopoImage} alt="topo" className="absolute inset-0 translate-x-5 -mt-35"/>
                    <div style={{position: 'relative', zIndex: '1', paddingLeft: '20px', paddingTop: '20px'}}>

                        <h1 className="text-2xl font-semibold">{name}</h1>
                        <hr className="w-full border-t-2 border-gray-300 my-4 mb-10"/>

                        <div>
                            <h2 className="text-lg font-semibold">Company Overview</h2>
                            <p className="text-md mt-2 mb-10">{description}</p>
                        </div>

                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">Website</h2>
                            <div className="mb-10">
                                <a href={"https://" + link} target="_blank"
                                   className="text-md text-blue-500 hover:underline mb-10">{link}</a>
                            </div>
                        </div>


                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">Industries</h2>
                            <ul className="mt-2 mb-10">
                                {industries.map((industry, index) => (
                                    <li key={index}
                                        className="inline-block bg-blue-500 px-2 py-1 rounded-md mr-2 mb-2">{industry}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4">

                            <h2 className="text-lg font-semibold">Team</h2>
                            <div className="grid grid-cols-3 gap-4 mt-4 mb-10">
                                {team.map((founder, index) => (
                                    <div key={index}
                                         className="bg-gray-700 bg-opacity-55 rounded-md border border-gray-700 pt-8 p-6 pb-8 relative shadow-xl">
                                        <div className="flex justify-center mb-2">
                                            <img src={founder.headshot} alt={founder.name}
                                                 className="rounded-full h-16 w-16 object-cover"/>
                                        </div>
                                        <div className="text-center mb-2">
                                            <h3 className="text-base font-semibold">{founder.name}</h3>
                                            <p className="text-sm">{founder.role}</p>
                                        </div>
                                        <div className="flex justify-center space-x-4 mt-2">
                                            <a href={founder.linkedin} target="_blank">
                                                <img src={LinkedInLogo} alt="LinkedIn" className="h-6 w-6"/>
                                            </a>
                                            <a href={`mailto:${founder.email}`}>
                                                <img src={EmailLogo} alt="Email" className="h-6 w-6"/>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">Recruiting For</h2>
                            <div className="grid grid-cols-4 gap-4 mt-4 shadow-lg mb-20">
                                {recruiting.map((position, index) => (
                                    <RecruitingItem key={index} position={position}/>
                                ))}
                            </div>
                        </div>

                        <div className="text-center absolute left-0 right-0 mt-20 mb-10">
                            <button className="text-md text-blue-500 hover:underline" onClick={closeModal}>Back</button>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    );
}

export default StartupCard;
