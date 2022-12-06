//import { useState } from 'react';
import { useState } from 'react';
import '../App.css';
import AdminKonyv from '../components/admin/AdminKonyv.js'
//import Kosar from './Kosar';
import AdminModel from '../model/AdminModel.js';

const konyvTomb = [
  {
    id: 1,
    cim: "Malevil",
    szerzo: "Robert Merle",
    ar: 2111
  },
  {
    id: 2,
    cim: "Védett férfiak",
    szerzo: "Robert Merle",
    ar: 1111
  },
  {
    id: 3,
    cim: "Állati elmék",
    szerzo: "Robert Merle",
    ar: 3111
  },
]

function Admin() {

  const [admintabla, setAdminTabla] = useState([]);
  const model = new AdminModel(admintabla);
  function AdminTabla(adat){
    model.setAdminTabla(adat);
    setAdminTabla(model.getKosaram());
  }
function Szerkeszt(adat){
  console.log(adat)
}
function Torol(adat){
 // model.Torol(vegpont, adat);
 model.Torol(adat);
}


  return (
    <>
       <h1> Admin Felület</h1>
       <table  className="table table-hover">
          <thead>
            <tr>
              <th>Szerző</th>
              <th>Cím</th>
              <th>ár</th>
              <th>darab</th>
            </tr>
          </thead>
          <tbody>
          {
          konyvTomb.map((konyv, index) => {
            return (<AdminKonyv adminkonyvObj={konyv} key={index} AdminTabla={AdminTabla} Szerkeszt={Szerkeszt} Torol={Torol} />)
          }
          )
        }


          </tbody>
        </table>
    </>
  );
}

export default Admin;
