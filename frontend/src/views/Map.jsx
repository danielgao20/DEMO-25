import MapLayout from "../components/MapLayout";
import React, { useEffect, useState, useRef } from "react";

import { ReactComponent as ArrowBack } from "../assets/arrowBack.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";

import Companies from "../components/startups.json";

function InteractiveMap() {
  const [tablesData, setTablesData] = useState([]);

  useEffect(() => {
    setTablesData(Companies);
  }, []);

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
          // backgroundColor: "#1e5889",
          backgroundColor: "transparent",
          borderRight: "1px solid white",
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
              backgroundColor: "#242424",
              padding: "1rem",
              borderRadius: "1rem",
              overflow: "scroll",
            }}
          >
            <button
              style={{
                color: "white",
                display: "flex",
                background: "black",
                padding: "0.4rem 1rem",
                borderRadius: 10,
                backgroundColor: "#131315",
                border: "#1A4265 solid 0.15rem",
                width: "max-content",
              }}
              onClick={() => handleMouseClick(null)}
            >
              <ArrowBack />
              <span style={{ marginRight: "1rem" }}>Back</span>
            </button>
            <a
              href={tablesData[selectedTable].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tablesData[selectedTable].logo}
                alt="Company logo"
                style={{
                  marginTop: "2rem",
                  marginRight: "1rem",
                  width: "100%",
                  maxHeight: "15rem",
                  objectFit: "cover",
                }}
              />
            </a>
            <div
              style={{ marginTop: "0rem", textAlign: "center" }}
              className="text-neutral-400 font-sans text-sm font-medium "
            >
              {tablesData[selectedTable].industries.toString()}
            </div>

            <div style={{ marginTop: "1rem" }}>
              <div
                className="font-sans text-1xl font-medium"
                style={{
                  color: "white",
                  fontSize: "1.1rem",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}
              >
                {tablesData[selectedTable].description}
              </div>

              {tablesData[selectedTable].team.map((founder, index) => (
                <div style={{ display: "grid", justifyItems: "center" }}>
                  <img
                    src={founder.headshot}
                    alt="headshot"
                    style={{
                      height: "12rem",
                      width: "12rem",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                  <h1
                    style={{
                      display: "flex",
                      alignItems: "center",
                      lineHeight: 1,
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      textAlign: "center",
                    }}
                    className="text-2xl font-bold bg-gradient-to-t from-[#116AB8] to-[#91BCE1] text-transparent leading-normal inline-block bg-clip-text"
                  >
                    {founder.name}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={founder.linkedin}
                      style={{ marginLeft: "1rem" }}
                    >
                      <LinkedIn />
                    </a>
                  </h1>
                  <a
                    style={{
                      display: founder.email === "" ? "none" : "",
                      marginBottom: "1rem",
                    }}
                    className="HeroButton-Shadow text-sm cursor-pointer font-semibold text-[#DEE0E3] p-2 px-6 rounded-lg bg-[#131315] border-2 border-[#1A4265] hover:bg-[#1F1F23] hover:shadow-inner active:bg-[#0C0C0D] transition-all hover:shadow-slate-700"
                    href={`mailto: ${founder.email}`}
                  >
                    <span>Reach out</span>
                  </a>
                </div>
              ))}
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
              {tablesData
                .filter((item) =>
                  item.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((item, index) => {
                  return (
                    <TableItem
                      key={index}
                      item={item}
                      index={index}
                      handleMouseClick={handleMouseClick}
                      hoveredTable={hoveredTable}
                    />
                  );
                })}
            </div>
          </>
        )}
      </div>

      <div style={{ width: "80%", height: "100vh", overflow: "hidden" }}>
        <MapLayout
          tables={tablesData}
          handleMouseClick={handleMouseClick}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}

export default InteractiveMap;

function TableItem({ item, index, handleMouseClick, hoveredTable }) {
  const itemRef = React.useRef(null);

  React.useEffect(() => {
    if (hoveredTable === item.id) {
      itemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hoveredTable, item.id]);

  return (
    <button
      key={index}
      ref={itemRef}
      onClick={() => handleMouseClick(item.id)}
      style={{
        color: "white",
        textAlign: "center",
        backgroundColor: hoveredTable === item.id ? "#3c78ab" : "#222222",
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
      <span
        style={{
          fontWeight: 700,
          marginRight: "auto",
          textAlign: "left",
        }}
      >
        {item.name}
      </span>
    </button>
  );
}
