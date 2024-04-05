function TableCard(props) {
  const table = props.table;

  if (table) {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "black 0.1rem solid",
          padding: "3rem",
          zIndex: "3",
        }}
      >
        <div style={{ fontSize: "2rem" }}>{table.company}</div>
        <div>Founder: {table.founders}</div>
      </div>
    );
  }
}

export default TableCard;
