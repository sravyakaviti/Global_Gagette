import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import Search from './components/Search';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  const pageSize = 6;
  const [query,setQuery] = useState("America");
  const [country,setCountry] = useState("in");
  const apiKey=process.env.REACT_APP_NEWS_API;
  return (
    <div>
        <Router>
          <NavBar setQuery={setQuery} setCountry={setCountry} />

          <Routes>
            <Route exact path="/" element={< News key='general' pageSize={pageSize} country={country} category="general" API_KEY={apiKey}/>}></Route>
            <Route exact path="/Business" element={<News key='business' pageSize={pageSize} country={country} category="business" API_KEY={apiKey}/>}></Route>
            <Route exact path="/Entertainment" element={<News key='entertainment' pageSize={pageSize} country={country} category="entertainment" API_KEY={apiKey}/>}></Route>
           <Route exact path="/General" element={<News key='general' pageSize={pageSize} country={country} category="general" API_KEY={apiKey}/>}></Route>
            <Route exact path="/Health" element={<News key='health' pageSize={pageSize} country={country} category="health" API_KEY={apiKey}/>}></Route>
            <Route exact path="/Science" element={<News key='science' pageSize={pageSize} country={country} category="science" API_KEY={apiKey}/>}></Route>
            <Route exact path="/Sports" element={<News key='sports' pageSize={pageSize} country={country} category="sports" API_KEY={apiKey}/>}></Route>
            <Route exact path="/Technology" element={<News key='technology' pageSize={pageSize} country={country} category="technology" API_KEY={apiKey} />}></Route>
            <Route exact path="/prayagraj" element={<Search query={"Prayagraj"} pageSize={pageSize}/>}></Route>
            <Route exact path="/query" element={<Search query={query} pageSize={pageSize}/>}></Route>
          </Routes>
          <Footer/>
        </Router>
      </div>
  )
}

export default App;