import satData from "./satData";

//check buttons

const Buttons = ({ filterByType, setSat, displaySats }) => {
  {displaySats.map((sat, id) => {
  return (
    <div>
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
      <button onClick={() => setSat(satData)}></button>
    </div>
  );
  })}}

export default Buttons;