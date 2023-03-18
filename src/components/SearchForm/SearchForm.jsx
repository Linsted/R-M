
import PropTypes from 'prop-types';
import { InputStyled, ContainerStyled, IconStyled } from './SearchForm.styled';



     

const SearchForm = ({ onFilter, filter }) => {
 
     return (
         <ContainerStyled>
             <IconStyled />
             <InputStyled type="text" name='filter' onChange={onFilter} value={filter} placeholder="Filter by name..." />
         </ContainerStyled>
     );
};


SearchForm.propTypes = {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

export default SearchForm;

