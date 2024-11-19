
import { loadCharacters } from "../controllers/controller"
import { CharacterView } from "./CharacterView";


export function CharactersView(props){

    const characters = loadCharacters();

    const filteredCharacters = characters.filter((character) => {

        if (props.input === '') {
            return true;
        }
        else {
            return character.name.toLowerCase().startsWith(props.input)
        }

    })

        const characterItems = filteredCharacters?.map(character => (
            <CharacterView
            key={character.id} 
            name={character.name}
            image={character.image}
            ancestry={character.ancestry}
            house={character.house}/>
            )
            );
        

    return(
        <dvi className="center">
            {characterItems.length != 0?(
            <div className="container">
                {characterItems}
            </div>):
            (
                <div className="fullScreenText">None found</div>)
            }

        </dvi>

    )

}