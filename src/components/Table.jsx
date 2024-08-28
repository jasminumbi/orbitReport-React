import './styling.css';

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th id="name">Name</th>
       <th id="type">Type of Satellite</th>
       <th id="launchDate">Launch Date</th>
       <th id="operational">Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((data, id)=>{
        return (
        <div>
          <tr key={id}>
          <td headers="name">{data.name}</td>
          <td headers="type">{data.type}</td>
          <td headers="launchDate">{data.launchDate}</td>
          <td headers="operational">{data.operational ? "active" : "inactive"}</td>
          </tr>
        </div>
);
})}
     </tbody>
   </table>
  );
};

export default Table;