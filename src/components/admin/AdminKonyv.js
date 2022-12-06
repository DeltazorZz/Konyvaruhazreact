import "./AdminKonyv.css";

function AdminKonyv(props) {
  function AdminTabla() {
    console.log(props.adminkonyvObj);
    props.AdminTabla(props.adminkonyvObj);
  }
  function Szerkeszt() {
    props.Szerkeszt(props.adminkonyvObj);
  }
  function Torol(props) {
    props.Torol(props.adminkonyvObj.id);
  }

  return (
    <tr>
      <td>{props.adminkonyvObj.szerzo}</td>
      <td>{props.adminkonyvObj.cim}</td>
      <td>{props.adminkonyvObj.ar}</td>
      <td>
        <button onClick={Szerkeszt}>Szerkesztés</button>
      </td>
      <td>
        <button onClick={Torol}>Törlés</button>
      </td>{" "}
    </tr>
  );
}

export default AdminKonyv;
