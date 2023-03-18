import PropTypes from 'prop-types';
import { GalleryImageStyled, GalleryItemStyled, LinkStyled,ContainerStyled,NameStyled, SpecieStyled } from './GalleryItem.styled';
import {  useLocation } from "react-router-dom";

const GalleryItem = ({ characters }) => {
    const location = useLocation();


     

    return (
        
        characters.length > 0 && characters.map(character => <GalleryItemStyled key={character.id}><LinkStyled to={`/characters/${character.id}`} state={{ from: location }}>
            <GalleryImageStyled src={character.image} alt={character.name} />
            <ContainerStyled><NameStyled>{character.name}</NameStyled><SpecieStyled>{character.species}</SpecieStyled></ContainerStyled></LinkStyled></GalleryItemStyled>)
    );
};

GalleryItem.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object.isRequired,).isRequired,
};

export default GalleryItem;
