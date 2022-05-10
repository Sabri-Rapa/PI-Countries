import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './views/Home';
import CountryDetail from './components/CountryDetail';
import AddActivity from './components/AddActivity';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <LandingPage />}/>
          <Route path="/home" element={ <Home/>}/>
          <Route path="/countries/:id" element={ <CountryDetail/>}/>
          <Route path="/activity" element={ <AddActivity/>}/>
        </Routes>
    </div>
  );
}

export default App;
