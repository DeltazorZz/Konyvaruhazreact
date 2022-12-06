import { useState } from 'react';
import '../App.css';
import Konyv from '../components/public/Konyv.js';
import Kosar from '../components/public/Kosar.js';
import KosarModel from '../model/KosarModel.js';

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

function Public() {
  const [db,setDb] = useState(0);
  const [osszar, setOsszar] = useState(0);
  const [kosaram, setKosaram] = useState([]);
  const [kosardb, setKosardb] = useState([]);
  const kosarmodel = new KosarModel(kosaram);

  function kosarKezeles(adat) {
    kosarmodel.setKosar(adat);
    setKosaram(kosarmodel.getKosaram());
    setDb(kosarmodel.getDarab());
    setOsszar(kosarmodel.getOsszar());
  console.log('kiir: ',kosaram);
  }
  function Plusz(adat){
    kosarmodel.setKosar(adat);
    setKosaram(kosarmodel.getKosaram());
  }

  function Minusz(adat){
    kosarmodel.setKosar(adat);
    setKosaram(kosarmodel.getKosaram2());
  }

  function Torles(adat){
  }

  return (
    <>
      <section>
        <p>A könyvek darabszáma: {db}</p>
        <p>Könyvek összára: {osszar}</p>
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
          {kosaram.map((konyv, index) => {
            return (<Kosar kosar={konyv} key={index} Plusz={Plusz} Minusz={Minusz} Torles={Torles}/>)
          }
          )
        }

          </tbody>
        </table>

      </section>
      <article>
        {
          konyvTomb.map((konyv, index) => {
            return (<Konyv konyvObj={konyv} key={index} kosarKezeles={kosarKezeles} />)
          }
          )
        }


      </article>
    </>
  );
}

export default Public;
