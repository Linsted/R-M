import { useEffect, useState } from "react";
import * as API from "../Api/Api"
import toast, { Toaster } from 'react-hot-toast';
import Gallery from "../components/Gallery/Gallery";
import Error from "../components/Error/Error";
import SearchForm from "../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";





const Home = () => {


  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") === null ? "" : searchParams.get("query");
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      let sorted;
      try {
        const data = await API.fetchCharacters();
        sorted = [...data.data.results];
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } catch (error) {
        console.log(error);
        return toast.error('Sorry, an error occurred!');
      };
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      
      setCharacters(sorted);
    };

    fetchData();
  }, []);



  useEffect(() => {
    const normalizedRequest = query.trim().toLowerCase();
    setFilteredCharacters(characters.filter(character => character.name.toLowerCase().includes(normalizedRequest)))
  }, [characters, query]);


  useEffect(() => {
    // console.log(filteredCharacters)
    if (query.length !== 0 && filteredCharacters.length === 0) { setError(true) };
    return (() => {
      setError(false);
    })

  }, [query, filteredCharacters]);

  const filterForm = (evt) => setSearchParams({ query: evt.target.value });

    return (<>
        
        <SearchForm
            onFilter={filterForm}
            filter={query} />
        {error && <Error />}
        <Gallery characters={filteredCharacters} />
        <Toaster />
    
    </>);

     
};

export default Home;