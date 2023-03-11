import axios from "axios";

export const  fetchCharacters  = async () => {

        axios.defaults.baseURL= "https://rickandmortyapi.com/api/character/"
    const response = axios.get("", {
        params: {
            
        }
    });
    return response;


};