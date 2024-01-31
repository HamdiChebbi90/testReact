import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './home/HomePage';

import Banner from './components/banner/banner';
import Contact from './components/contact/contact';
import GetApp from './components/getapp/getApp';
function App() {
  return (
    <div className="App">
    <Banner />
    
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/getapp" element={<GetApp />} />
    
    </Routes>
    </div>


    
  );
}

export default App;
