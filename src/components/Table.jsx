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
     <tr key={id}>
       <td>{data.name}</td>
       <td>{data.typeOfSatellite}</td>
       <td>{data.launchDate}</td>
       <td></td>
     </tr>
     </tbody>
   </table>
  );
};

export default Table;