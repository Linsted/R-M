import axios from "axios";

export const  fetchCharacters  = async () => {

    axios.defaults.baseURL = "https://rickandmortyapi.com/api/character/";
    const response = await axios.get("", {
        
    });
    return response;


};




export const  fetchCharacterById  = async (id, abortController) => {

 
    
    axios.defaults.baseURL = "https://rickandmortyapi.com/api/character/";
    const response = await axios.get(`${id}`, {
       signal: abortController.signal,
    });
  
    return response;


};