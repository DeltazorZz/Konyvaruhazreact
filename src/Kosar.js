import './Kosar.css'

function Kosar(props) {
  function Plusz(){
    //console.log(props.Kosar)
    props.Plusz(props.kosar)
  }

  function Minusz(){
    console.log(props.Kosar)
    props.Minusz(props.Kosar)
  }

  function Torles(){
    console.log(props.Kosar)
    props.Torles(props.Kosar)
  }

  return (
    <tr>
      <td>{props.kosar.szerzo}</td>
      <td>{props.kosar.cim}</td>
      <td>{props.kosar.ar}</td>
      <td><button onClick={Plusz}>+</button></td>
      <td>{props.kosar.db}</td>
      <td><button onClick={Minusz}>-</button></td>
      <td><button onClick={Torles}>Törlés</button></td>
    </tr>
  );
}
export default Kosar;
