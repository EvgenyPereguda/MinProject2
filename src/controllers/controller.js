import { useData } from "../hooks/useData";


function fetchAPI(path){

    const data = useData(`https://hp-api.herokuapp.com/api/${path}`);

    if(data == null)
        return [];

    if (typeof data === 'string' || data instanceof String){
        return [];
    }


    return data;
}


export function loadCharacters(group=''){

   const respons = fetchAPI(`characters/${group}`);

   let checkedCharacters = new Array();

   respons.forEach(character=>{if(character.image != "") checkedCharacters.push(character)});
   
   return checkedCharacters;
}

export function loadSpells(){

    const respons = fetchAPI('spells');
    
    return respons;
 }


