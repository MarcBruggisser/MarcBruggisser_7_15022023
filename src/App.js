import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/APropos';
import FicheLogement from './pages/FicheLogement';
import PageErreur from './pages/PageErreur';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/a_propos" element={ <APropos /> } />
          <Route path="/fiche_logement" element={ <FicheLogement /> } />
          <Route path="*" element={ <PageErreur /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
