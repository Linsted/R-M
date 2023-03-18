import axios from "axios";

export const  fetchCharacters  = async () => {

    axios.defaults.baseURL = "https://rickandmortyapi.com/api/character/";
    const response = await axios.get("", {
        
    });
    return response;


};


// https://rickandmortyapi.com/api/character/2


export const  fetchCharacterById  = async (id) => {

    
    axios.defaults.baseURL = "https://rickandmortyapi.com/api/character/";
    const response = await axios.get(`${id}`, {
       
    });
  
    return response;


};