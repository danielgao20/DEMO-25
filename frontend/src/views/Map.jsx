import MapLayout from "../components/MapLayout";
import { useState } from "react";
import TableCard from "../components/TableCard";
//import Image from "../assets/logos/EVRYN/LOGO.png";

const tables = [
  // Column A
  { id: 0, company: "EVRYN", x: "234.5", y: "994.5", logo: "EVRYN/LOGO.png" },
  {
    id: 1,
    company: "Convoice",
    x: "234.5",
    y: "931.5",
    logo: "Convoice/LOGO.png",
  },
  {
    id: 2,
    company: "Underdose",
    x: "234.5",
    y: "866.5",
    logo: "underdose/LOGO.png",
  },
  {
    id: 3,
    company: "Digistone",
    x: "234.5",
    y: "806.5",
    logo: "Digistone/LOGO.png",
  },
  { id: 4, company: "Lav", x: "234.5", y: "740.5", logo: "Lav/LOGO.png" },
  {
    id: 5,
    company: "Bahamii",
    x: "234.5",
    y: "677.5",
    logo: "Bahamii/LOGO.png",
  },
  {
    id: 6,
    company: "AirVitalize Innovations",
    x: "234.5",
    y: "615.5",

    logo: "AirVitalize/LOGO.png",
  },
  {
    id: 7,
    company: "ViBo Health",
    x: "234.5",
    y: "551.5",
    logo: "ViBo/LOGO.png",
  },

  {
    id: 8,
    company: "TERRATOKES",
    x: "234.5",
    y: "489.5",
    logo: "Terratokes/LOGO.png",
  },
  // Column B
  {
    id: 9,
    company: "MapleHouse",
    x: "322.5",
    y: "994.5",
    logo: "Maplehouse/LOGO.png",
  },
  {
    id: 10,
    company: "Stellace",
    x: "322.5",
    y: "931.5",
    logo: "Stellace/LOGO.png",
  },
  { id: 11, company: "Sentimind", x: "322.5", y: "866.5" },
  {
    id: 12,
    company: "Catalyst Robotics",
    x: "322.5",
    y: "806.5",
    logo: "Catalyst/LOGO.png ",
  },
  {
    id: 13,
    company: "Jargon",
    x: "322.5",
    y: "740.5",
    logo: "Jargon/LOGO.png",
  },
  {
    id: 14,
    company: "Lionistic",
    x: "322.5",
    y: "677.5",
    logo: "Lionistic/LOGO.png",
  },
  {
    id: 15,
    company: "AiStudy",
    x: "322.5",
    y: "615.5",
    logo: "AiStudy/LOGO.jpg",
  },
  { id: 16, company: "Recei", x: "322.5", y: "551.5", logo: "Recei/LOGO.png" },
  // Column C
  { id: 17, company: "KADAK", x: "370.5", y: "994.5", logo: "KADAK/LOGO.png" },
  {
    id: 18,
    company: "BIOMED INC",
    x: "370.5",
    y: "931.5",
    logo: "BIOMED/LOGO.png",
  },
  {
    id: 19,
    company: "WellTra.AI",
    x: "370.5",
    y: "866.5",
    logo: "WellTra.AI/LOGO.png",
  },
  {
    id: 20,
    company: "UpDonor",
    x: "370.5",
    y: "806.5",
    logo: "UpDonor/LOGO.png",
  },
  {
    id: 21,
    company: "Tanbii",
    x: "370.5",
    y: "740.5",
    logo: "Tanbii/LOGO.png",
  },
  { id: 22, company: "Skyguard", x: "370.5", y: "677.5" },
  {
    id: 23,
    company: "Shapeshift",
    x: "370.5",
    y: "615.5",
    logo: "ShapeShift/LOGO.jpg",
  },
  {
    id: 24,
    company: "RevSend",
    x: "370.5",
    y: "551.5",
    logo: "RevSend/LOGO.png",
  },
  // Column D
  {
    id: 25,
    company: "NutriMind",
    x: "467.5",
    y: "994.5",
    logo: "NutriMind/LOGO.png",
  },
  {
    id: 26,
    company: "SeekEatsLA",
    x: "467.5",
    y: "931.5",
    logo: "SeekEatsLA/LOGO.png",
  },
  { id: 27, company: "Schej", x: "467.5", y: "866.5", logo: "Schej/LOGO.png" },
  {
    id: 28,
    company: "Joja Entertainment",
    x: "467.5",
    y: "806.5",
    logo: "JojaEntertainment/LOGO.png",
  },
  {
    id: 29,
    company: "Laminar copilot",
    x: "467.5",
    y: "740.5",
    logo: "LaminarCopilot/LOGO.png",
  },
  {
    id: 30,
    company: "Quinta",
    x: "467.5",
    y: "677.5",
    logo: "Quinta/LOGO.png",
  },
  {
    id: 31,
    company: "Buzzwa Core",
    x: "467.5",
    y: "615.5",
    logo: "BuzzwaCore/LOGO.png",
  },
  { id: 32, company: "Guard ProStamp", x: "467.5", y: "551.5", logo: "" },
  // Column E
  {
    id: 33,
    company: "Fair & Square",
    x: "515.5",
    y: "994.5",
    logo: "FairAndSquare/LOGO.png",
  },
  {
    id: 34,
    company: "22 Hard Seltzer",
    x: "515.5",
    y: "931.5",
    logo: "TwoTwentyHardSelzter/LOGO.png",
  },
  {
    id: 35,
    company: "Intuition Intellgience",
    x: "515.5",
    y: "866.5",
    logo: "IntuitionIntelligence/LOGO.png",
  },
  {
    id: 36,
    company: "Packa.Design",
    x: "515.5",
    y: "806.5",
    logo: "Packa.Design/LOGO.png",
  },
  {
    id: 37,
    company: "The Indiestry",
    x: "515.5",
    y: "740.5",
    logo: "TheIndiestry/LOGO.png",
  },
  {
    id: 38,
    company: "Prometheus Data",
    x: "515.5",
    y: "677.5",
    logo: "PrometheusData/LOGO.png",
  }, // This may need adjustment for the rect shape
  {
    id: 39,
    company: "Anacapa",
    x: "515.5",
    y: "615.5",
    logo: "Anacapa/LOGO.png",
  }, // This may need adjustment for the sponsor circle
  {
    id: 40,
    company: "Hatchet",
    x: "515.5",
    y: "551",
    logo: "Hatchet/LOGO.png",
  }, // This may need adjustment for the sponsor circle

  // Column F
  {
    id: 41,
    company: "Amino Avenue",
    x: "599.5",
    y: "994.5",
    logo: "AminoAvenue/LOGO.png",
  },
  {
    id: 42,
    company: "Third Place",
    x: "599.5",
    y: "931.5",
    logo: "ThirdPlace/LOGO.png",
  },
  {
    id: 43,
    company: "OfSpectrum",
    x: "599.5",
    y: "866.5",
    logo: "OfSpectrum/LOGO.png",
  },
  { id: 44, company: "Beige", x: "599.5", y: "806.5", logo: "Beige/LOGO.png" },
  {
    id: 45,
    company: "Orbital Entertainment",
    x: "599.5",
    y: "740.5",
    logo: "OrbitalEntertainmentSupply/LOGO.png",
  },
  {
    id: 46,
    company: "Dual-X Studio",
    x: "599.5",
    y: "677.5",
    logo: "Dual-XStudios/LOGO.png",
  },
  {
    id: 47,
    company: "ARLingo",
    x: "599.5",
    y: "615.5",
    logo: "ARLingo/LOGO.png",
  },
  { id: 48, company: "Nexus", x: "599.5", y: "551.5", logo: "Nexus/LOGO.png" },
  {
    id: 49,
    company: "Degreely",
    x: "599.5",
    y: "489.5",
    logo: "Degreely/LOGO.png",
  },

  // Adjustments may be required for sponsor tables and food tables to match their unique shapes
];

function InteractiveMap() {
  const [hoveredTable, setHoveredTable] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const handleMouseEnter = (tableId) => {
    setHoveredTable(tableId);
  };

  const handleMouseLeave = () => {
    setHoveredTable(null);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "20%",
          height: "100vh",
          backgroundColor: "#f0f0f0",
          padding: "1.5rem",
          paddingTop: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
        }}
      >
        <div className="p-4 font-semibold" style={{ textAlign: "center" }}>
          Meet the companies
        </div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            marginBottom: "1.5rem",
            padding: "0.5rem",
            borderRadius: 10,
            outline: "gray 0.1rem solid",
          }}
        />
        <div style={{ overflow: "scroll", width: "100%" }}>
          {tables
            .filter((item) =>
              item.company.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((item, index) => {
              return (
                <button
                  onClick={() => setHoveredTable(item.id)}
                  style={{
                    textAlign: "center",
                    backgroundColor:
                      hoveredTable === item.id ? "#3c78ab" : "#D9D9D9",
                    padding: "1rem",
                    marginBottom: "0.5rem",
                    cursor: "pointer",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "5rem",
                  }}
                >
                  <img
                    src={`logos/${item.logo}`}
                    alt="Company logo"
                    style={{
                      maxWidth: "5rem",
                      maxHeight: "2.5rem",
                      marginRight: "1rem",
                    }}
                  />
                  {item.company}
                </button>
              );
            })}
        </div>
        <div>
          {hoveredTable !== null ? (
            <TableCard table={tables[hoveredTable]} />
          ) : (
            false
          )}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          justifyItems: "center",
          width: "80%",
        }}
      >
        <div
          style={{
            height: "100vh",
          }}
        >
          <MapLayout
            tables={tables}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
}

export default InteractiveMap;
