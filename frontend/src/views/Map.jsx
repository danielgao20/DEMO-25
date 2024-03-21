import MapLayout from "../components/MapLayout";
function InteractiveMap() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          justifyItems: "center",
          marginTop: "3rem",
        }}
      >
        <MapLayout />
      </div>
    </div>
  );
}

export default InteractiveMap;
