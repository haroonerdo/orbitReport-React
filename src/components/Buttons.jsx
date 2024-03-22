import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  // const typeButtons = displaySats.map((sat, id) => {
  //   return (
  //     <button onClick={() => filterByType(sat)} key={id}>
  //       {sat} Orbit
  //     </button>
  //   );
  //});
  return (
    <div className="flex-container">
      <button onClick={() => setSat(satData)}>Low Orbits</button>
      <button onClick={() => setSat(satData)}>Medium Orbits</button>
      <button onClick={() => setSat(satData)}>High Orbits</button>
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
