import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Routes>
          <Route path="/" element={ <LandingPage />}/>
          <Route path="/countries" element={ <Home/>}/>
          <Route path="/countries/:id" element={ <CountryDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;
