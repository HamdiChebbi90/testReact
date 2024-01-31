import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './home/HomePage';

import Banner from './components/banner/banner';

function App() {
  return (
    <div className="App">
    <Banner />
    <Routes>
    <Route path="/" element={<HomePage />} />
    
    </Routes>


    </div>


    
  );
}

export default App;
