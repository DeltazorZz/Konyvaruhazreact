
import './App.css';
import Admin from './pages/Admin.js';
import Public from './pages/Public.js';
import Layout from './pages/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <footer>
        <p>Vetési György Ádám</p>
      </footer>
    </div>
  );
}

export default App;
