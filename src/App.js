import './App.css';
import {FetchCountryData} from './CountryList';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <FetchCountryData/>
      </div>
    </div>
  );
}

export default App;
