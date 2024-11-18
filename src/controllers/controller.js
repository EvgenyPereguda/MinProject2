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
   
   return respons;
}


export function loadStudents(){

   const respons = loadCharacters('students');
   
   return respons;
}

export function loadStaff(){

   const respons = loadCharacters('staff');
   
   return respons;
}

export function loadHouse(house){

    const respons = fetchAPI(`house/${house}`);
    
    return respons;
 }


export function loadSpells(){

    const respons = fetchAPI('spells');
    
    return respons;
 }


