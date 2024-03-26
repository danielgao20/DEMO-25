// // Assuming you have the necessary SVGs and images in your `assets` folder

// import React from 'react';
// import { ReactComponent as Logo } from '../assets/logo.svg'; // Replace with your actual logo path
// import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg'; // Replace with your LinkedIn icon path
// import { ReactComponent as TwitterIcon } from '../assets/twitter.svg'; // Replace with your Twitter icon path

// const TeamMember = ({ name, title, linkedIn, twitter }) => {
//   return (
//     <div className="bg-gray-700 p-4 rounded-lg text-center">
//       <div className="mb-2">
//         {/* Placeholder for member image */}
//         <div className="bg-white w-20 h-20 rounded-full mx-auto mb-3"></div>
//         <p className="text-white text-lg">{name}</p>
//         <p className="text-gray-400 text-sm">{title}</p>
//       </div>
//       <div className="flex justify-center space-x-2">
//         {/* Icons would be SVG components or images */}
//         <a href={linkedIn}><LinkedInIcon className="fill-current text-white h-6 w-6" /></a>
//         <a href={twitter}><TwitterIcon className="fill-current text-white h-6 w-6" /></a>
//       </div>
//     </div>
//   );
// };

// const StartupCardPopup = () => {
//   return (
//     <div className="bg-black p-10 text-white">
//       <header className="flex justify-between items-center mb-10">
//         <Logo className="h-12" />
//         <div className="text-xs border border-white rounded-full py-1 px-4">Pre-Seed</div>
//       </header>
//       <h2 className="text-white text-sm uppercase mb-2">SaaS</h2>
//       <h1 className="text-3xl font-bold mb-6">Company Overview</h1>
//       <p className="mb-6">Lorem ipsum dolor sit amet consectetur... </p>
//       <h2 className="text-3xl font-bold mb-6">Team</h2>
//       <div className="grid grid-cols-3 gap-4 mb-6">
//         {/* Map through your team members */}
//         <TeamMember name="Cameron Saidock" title="Co-President of TroyLabs" linkedIn="#" twitter="#" />
//         {/* ... other members */}
//       </div>
//       <h2 className="text-3xl font-bold mb-4">Pitch Deck</h2>
//       {/* Placeholder for pitch deck */}
//       <div className="bg-gray-700 h-64 rounded-lg"></div>
//     </div>
//   );
// };

// export default StartupCardPopup;
