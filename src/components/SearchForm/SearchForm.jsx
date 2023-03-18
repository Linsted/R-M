
import PropTypes from 'prop-types';
import { InputStyled, LabelStyled, IconStyled } from './SearchForm.styled';
import { useSearchParams } from "react-router-dom";


     

 const SearchForm = ({onFilter, filter}) => {
    // console.log(filter);
     const [searchParams, setSearchParams] = useSearchParams();
     const query = searchParams.get("query") === null ? "" : searchParams.get("query");


    //  const handleChange = () => {
    //      setSearchParams({query: e.target.elements.input.value});
    //  };


    return (
        <LabelStyled>
                <IconStyled  />
                <InputStyled type="text" name='filter' onChange={onFilter} value={filter} placeholder="Filter by name..." />             
        </LabelStyled>
    );
};


SearchForm.propTypes = {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

export default SearchForm;



// AiOutlineSearch