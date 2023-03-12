import { Header } from "./Header/Header";
import * as API from "../Api/Api"
import { SearchForm } from "./SearchForm/SearchForm";
import { useEffect, useState } from 'react';
import { Gallery } from "./Gallery/Gallery";
import toast, { Toaster } from 'react-hot-toast';
import { Error } from "./Error/Error";

export const App = () => {

  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');
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
    const normalizedRequest = filter.trim().toLowerCase();
    setFilteredCharacters(characters.filter(character => character.name.toLowerCase().includes(normalizedRequest)))
  }, [characters, filter]);


  useEffect(() => {
    // console.log(filteredCharacters)
    if (filter.length !== 0 && filteredCharacters.length === 0) { setError(true) };
    return (() => {
      setError(false);
    })

  }, [filter, filteredCharacters]);

  const filterForm = (evt) => setFilter(evt.target.value);





  return (
    <div>
      < Header />
      <SearchForm
        onFilter={filterForm}
        filter={filter} />
      {error && <Error />}
      <Gallery characters={filteredCharacters} />
      <Toaster />

    </div>
  );
};
