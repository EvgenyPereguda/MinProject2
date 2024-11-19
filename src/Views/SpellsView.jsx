import { SpellView } from "./SpellView";
import { loadSpells } from "../controllers/controller";


export function SpellsView(props){

    const spells = loadSpells();

    const filteredSpells = spells.filter((spell) => {

        if (props.input === '') {
            return true;
        }
        else {
            return spell.name.toLowerCase().startsWith(props.input)
        }

    })

    
    const spellItems = filteredSpells?.map(spell => (
        <SpellView
        key={spell.id} 
        name={spell.name}
        description={spell.description}/>
        )
        );

    return(        
        <dvi className="center">
            {spellItems.length != 0?(            
            <div className="container">
                {spellItems}
            </div>):
            (
                <div className="fullScreenText">None found</div>)
            }

        </dvi>
    )

}