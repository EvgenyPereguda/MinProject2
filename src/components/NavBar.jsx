"use client"

import HPLogo from "../assets/HP.png";


export default function NavBar(prop) {

  return (
    <nav className="navbar">
      <div>
        <div>
          <img className="image-scale" src={HPLogo} alt="Harry Potter logo" />
        </div>

        <ul className="navbar-menu">
          <li>
            <button onClick={()=>{prop.onViewChange(1)}}>Characters</button>
          </li>
          <li>
            <button onClick={()=>{prop.onViewChange(2)}}>Spells</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
