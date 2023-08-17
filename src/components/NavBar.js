import { useState } from 'react';
import NewsNow from './NewsNow.png';
import { Link, useNavigate } from "react-router-dom";

function NavBar({ setQuery, query, setCountry, country }) {
  const [tempQuery, setTempQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Country");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(tempQuery);
    navigate("/query");
  }

  const handleCountryClick = (countryCode, countryName) => {
    setCountry(countryCode);
    setSelectedCountry(countryName);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={NewsNow} alt="" width="120" height="40" className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/prayagraj">Prayagraj</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {selectedCountry}
                </a>
                <ul className="dropdown-menu overflow-auto" style={{ maxHeight: '200px' }} aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("ae", "United Arab Emirates")}>
                      United Arab Emirates
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("ar", "Argentina")}>
                      Argentina
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("at", "Austria")}>
                      Austria
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("au", "Australia")}>
                      Australia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("be", "Belgium")}>
                      Belgium
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("bg", "Bulgaria")}>
                      Bulgaria
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("br", "Brazil")}>
                      Brazil
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("ca", "Canada")}>
                      Canada
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("ch", "Switzerland")}>
                      Switzerland
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("cn", "China")}>
                      China
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("co", "Colombia")}>
                      Colombia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("cu", "Cuba")}>
                      Cuba
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("cz", "Czech Republic")}>
                      Czech Republic
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("de", "Germany")}>
                      Germany
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("eg", "Egypt")}>
                      Egypt
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("fr", "France")}>
                      France
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("gb", "United Kingdom")}>
                      United Kingdom
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("gr", "Greece")}>
                      Greece
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("hk", "Hong Kong")}>
                      Hong Kong
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("hu", "Hungary")}>
                      Hungary
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("id", "Indonesia")}>
                      Indonesia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("ie", "Ireland")}>
                      Ireland
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("il", "Israel")}>
                      Israel
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("in", "India")}>
                      India
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("it", "Italy")}>
                      Italy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("jp", "Japan")}>
                      Japan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("kr", "South Korea")}>
                      South Korea
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("lt", "Lithuania")}>
                      Lithuania
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("lv", "Latvia")}>
                      Latvia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("ma", "Morocco")}>
                      Morocco
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("mx", "Mexico")}>
                      Mexico
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("my", "Malaysia")}>
                      Malaysia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("ng", "Nigeria")}>
                      Nigeria
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("nl", "Netherlands")}>
                      Netherlands
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("no", "Norway")}>
                      Norway
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("nz", "New Zealand")}>
                      New Zealand
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("ph", "Philippines")}>
                      Philippines
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("pl", "Poland")}>
                      Poland
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("pt", "Portugal")}>
                      Portugal
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("ro", "Romania")}>
                      Romania
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("rs", "Serbia")}>
                      Serbia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("ru", "Russia")}>
                      Russia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("sa", "Saudi Arabia")}>
                      Saudi Arabia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("se", "Sweden")}>
                      Sweden
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("sg", "Singapore")}>
                      Singapore
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("si", "Slovenia")}>
                      Slovenia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("sk", "Slovakia")}>
                      Slovakia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("th", "Thailand")}>
                      Thailand
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("tr", "Turkey")}>
                      Turkey
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("tw", "Taiwan")}>
                      Taiwan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("ua", "Ukraine")}>
                      Ukraine
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("us", "United States")}>
                      United States
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("ve", "Venezuela")}>
                      Venezuela
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleCountryClick("za", "South Africa")}>
                      South Africa
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input className="form-control me-2" onChange={(e) => { setTempQuery(e.target.value); console.log(e.target.value) }} name="query" type="search" placeholder="Search" aria-label="Search" />
              <input className="btn btn-outline-success" type="submit" value={"Search"} />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
