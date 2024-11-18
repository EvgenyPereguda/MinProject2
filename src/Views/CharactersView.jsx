
import { loadCharacters, loadHouse, loadStaff, loadStudents } from "../controllers/controller"
import { CharacterView } from "./CharacterView";


export function CharactersView(){

    const characters = loadCharacters();

        const characterItems = characters?.map(character => (
            <CharacterView
            key={character.id} 
            name={character.name}
            image={character.image}
            ancestry={character.ancestry}
            house={character.house}/>
            )
            );
        

    return(

        <div>
            <div className="container">
                {characterItems}
            </div>
        </div>

    )

}