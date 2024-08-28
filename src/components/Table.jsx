const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((data, id)=>{
        return (
        <div>
          <tr key={id}>
          <td>{data.name}</td>
          <td>{data.typeOfSatellite}</td>
          <td>{data.launchDate}</td>
          <td>{data.operational ? "active" : "inactive"}</td>
          </tr>
        </div>
);
})}
     </tbody>
   </table>
  );
};

export default Table;