"use client"

import { useState } from "react";

function Search({inputSearch, onInputText}){

    const inputHandler = (e) => {    
        onInputText(e.target.value);    
      };

    const clearHandler = ()=>{
        onInputText("")
    }

    return(
        <div className="center">
            <input
            className="search"
            type="text"
            placeholder="Search"
            onChange={inputHandler}
            value={inputSearch}
            />
            <button onClick={clearHandler} className="clearBtn"></button>
        </div>
    )
}

export default Search;