import { SpellView } from "./SpellView";
import { loadSpells } from "../controllers/controller";


export function SpellsView(){


    const spells = loadSpells();

    spells.forEach(spell=>{console.log(spell)})
    
    const spellItems = spells?.map(spell => (
        <SpellView
        key={spell.id} 
        name={spell.name}
        description={spell.description}/>
        )
        );

    return(

        <div>
            {spellItems}
        </div>

    )

}