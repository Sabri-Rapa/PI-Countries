import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './views/Home';
import CountryDetail from './components/CountryDetail';
import AddActivity from './components/AddActivity';

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Routes>
          <Route exact path="/" element={ <LandingPage />}/>
          <Route exact path="/countries" element={ <Home/>}/>
          <Route exact path="/countries/:id" element={ <CountryDetail/>}/>
          <Route exact path="/activity" element={ <AddActivity/>}/>
        </Routes>
    </div>
  );
}

export default App;
