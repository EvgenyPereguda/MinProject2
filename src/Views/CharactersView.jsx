"use client"

import { useState } from "react";


import { loadCharacters, loadHouse, loadStaff, loadStudents } from "../controllers/controller"
import { CharacterView } from "./CharacterView";


export function CharactersView(){

    const [state, setState] = useState(0);

    let characters = null;

    switch (state) {
            case 0:        
            default:
                characters = loadCharacters();
                
                break;

            case 1:      
            
                characters = loadStudents();
                    
                break;

            case 2:      
                
                characters = loadStaff();
                        
                break;

            case 3:      
                    
                characters = loadHouse('gryffindor');
                            
                break;
        }

   
    
        const characterItems = characters?.map(character => (
            <CharacterView
            key={character.id} 
            name={character.name}
            image={character.image}
            ancestry={character.ancestry}
            house={character.house}/>
            )
            );
        

        // actor
        // : 
        // "Daniel Radcliffe"
        // alive
        // : 
        // true
        // alternate_actors
        // : 
        // []
        // alternate_names
        // : 
        // (4) ['The Boy Who Lived', 'The Chosen One', 'Undesirable No. 1', 'Potty']
        // ancestry
        // : 
        // "half-blood"
        // dateOfBirth
        // : 
        // "31-07-1980"
        // eyeColour
        // : 
        // "green"
        // gender
        // : 
        // "male"
        // hairColour
        // : 
        // "black"
        // hogwartsStaff
        // : 
        // false
        // hogwartsStudent
        // : 
        // true
        // house
        // : 
        // "Gryffindor"
        // id
        // : 
        // "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8"
        // image
        // : 
        // "https://ik.imagekit.io/hpapi/harry.jpg"
        // name
        // : 
        // "Harry Potter"
        // patronus
        // : 
        // "stag"
        // species
        // : 
        // "human"
        // wand
        // : 
        // {wood: 'holly', core: 'phoenix tail feather', length: 11}
        // wizard
        // : 
        // true
        // yearOfBirth
        // : 
        // 1980



    return(

        <div>
            <button onClick={()=>{setState(0)}}>All Characters</button>
            <button onClick={()=>{setState(1)}}>Hogwarts Students</button>
            <button onClick={()=>{setState(2)}}>Hogwarts Staff</button>
            <button onClick={()=>{setState(3)}}>Characters in a House</button>
            <div>{characterItems}</div>
        </div>

    )

}