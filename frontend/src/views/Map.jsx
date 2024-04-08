import MapLayout from "../components/MapLayout";
import { useState } from "react";
import TableCard from "../components/TableCard";
//import Image from "../assets/logos/EVRYN/LOGO.png";

import { ReactComponent as ArrowBack } from "../assets/arrowBack.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";

import Companies from "../companies.json";

function InteractiveMap() {
  const tables = Companies;

  const [hoveredTable, setHoveredTable] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMouseEnter = (tableId) => {
    setHoveredTable(tableId);
  };

  const handleMouseLeave = () => {
    setHoveredTable(null);
  };

  const handleMouseClick = (tableId) => {
    setSelectedTable(tableId);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "20%",
          height: "100vh",
          backgroundColor: "#1e5889",
          padding: "1.5rem",
          paddingTop: "5.5rem",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
        }}
      >
        {selectedTable !== null ? (
          <div
            style={{
              backgroundColor: "black",
              padding: "1rem",
              borderRadius: "1rem",
            }}
          >
            <button
              style={{
                color: "white",
                display: "flex",
                background: "black",
                padding: "0.75rem 1.5rem",
                borderRadius: 10,
                backgroundColor: "black",
                border: "white solid 0.1rem",
                width: "max-content",
              }}
              onClick={() => handleMouseClick(null)}
            >
              <ArrowBack />
              <span style={{ marginRight: "1rem" }}>Back</span>
            </button>
            <img
              src={`logos/${tables[selectedTable].logo}`}
              alt="Company logo"
              style={{
                marginTop: "2rem",
                marginRight: "1rem",
              }}
            />
            <div
              style={{ color: "white", marginTop: "2rem" }}
              className="font-sans text-md font-medium"
            >
              Industry: {tables[selectedTable]["Company Industry"]}
            </div>
            <div style={{ marginTop: "1rem" }}>
              <div
                className="font-sans text-1xl font-medium"
                style={{ color: "white", fontSize: "1.1rem" }}
              >
                Founder:
              </div>
              <h1
                style={{ lineHeight: 1.2 }}
                className="text-3xl font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text"
              >
                {tables[selectedTable]["Founder Full Name"]}
              </h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                {tables[selectedTable]["Founder LinkedIn"] !== null ? (
                  <a href={tables[selectedTable]["Founder LinkedIn"]}>
                    <LinkedIn />
                  </a>
                ) : (
                  false
                )}
                {tables[selectedTable]["Founder Email Address"] !== null ? (
                  <a
                    href={`mailto: ${tables[selectedTable]["Founder Email Address"]}`}
                  >
                    <Mail />
                  </a>
                ) : (
                  false
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              className="p-4 font-semibold"
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "1.25rem",
              }}
            >
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
                outline: "#1b4367 0.1rem solid",
                color: "white",
                backgroundColor: "#15171a",
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
                      onClick={() => handleMouseClick(item.id)}
                      style={{
                        color: "white",
                        textAlign: "center",
                        backgroundColor:
                          hoveredTable === item.id ? "#3c78ab" : "#222222",
                        padding: "1rem",
                        marginBottom: "0.5rem",
                        cursor: "pointer",
                        borderRadius: 10,
                        border: "#3c78ab 0.2rem solid",
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
          </>
        )}

        <div>
          {hoveredTable !== null ? (
            <TableCard table={tables[hoveredTable]} />
          ) : (
            false
          )}
        </div>
      </div>

      <div style={{ width: "80%" }}>
        <MapLayout
          tables={tables}
          handleMouseClick={handleMouseClick}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}

export default InteractiveMap;
