import { Header } from "./Header/Header";
import * as API from "../Api/Api"
import { SearchForm } from "./SearchForm/SearchForm";
import { useState } from 'react';

export const App = () => {

 const [query, setQuery] = useState("");

  const onSubmit = (query) => {
    console.log(query)
  };

  return (
    <div>
      < Header />
      <SearchForm onSubmit={onSubmit} />

    </div>
  );
};
