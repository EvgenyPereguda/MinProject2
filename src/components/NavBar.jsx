"use client"

import { useState } from "react";

import HPLogo from "../assets/HP.png";
import Search from "./Search";


export default function NavBar(prop) {


  const [inputSearch, setInputSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleHome = ()=>{
    prop.onViewChange(0);
    setShowSearch(false);
    setInputSearch("");
    prop.onInputText("");
  }

  const handleCharacters = ()=>{
    prop.onViewChange(1);
    setShowSearch(true);
    setInputSearch("");
    prop.onInputText("");
  }
  
  const handleSpells = ()=>{
    prop.onViewChange(2);
    setShowSearch(true);
    setInputSearch("");
    prop.onInputText("");
  }

  const handleSearch = (search)=>{
    prop.onInputText(search.toLowerCase());
    setInputSearch(search)
  }

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <img className="image-logo" src={HPLogo} alt="Harry Potter logo" />

        <div className="navbar-menu">
          <li>
            <button className="sectionBtn roundBtn" onClick={handleHome}>Home</button>
          </li>
          <li>
            <button className="sectionBtn roundBtn" onClick={handleCharacters}>Characters</button>
          </li>
          <li>
            <button className="sectionBtn roundBtn" onClick={handleSpells}>Spells</button>
          </li>
        </div>
      </div>    
      {showSearch? (<Search inputSearch={inputSearch} onInputText={handleSearch}/> ):(<div/>)
      }  
    </nav>
  );
}
