
import PropTypes from 'prop-types';
import { InputStyled, LabelStyled,IconStyled } from './SearchForm.styled';


     


export const SearchForm = ({onFilter, filter}) => {
    // console.log(filter);



    return (
        <LabelStyled>
                <IconStyled />
                <InputStyled type="text" name='filter' onChange={onFilter} value={filter} placeholder="Filter by name..." />             
        </LabelStyled>
    );
};


SearchForm.propTypes = {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}



// AiOutlineSearch