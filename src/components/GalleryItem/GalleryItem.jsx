import PropTypes from 'prop-types';
import { GalleryImageStyled,GalleryItemStyled } from './GalleryItem.styled';

export const GalleryItem = ({characters}) => {
    console.log(characters)

    return (
        characters.length > 0 && characters.map(character => <GalleryItemStyled key={character.id}>
            <GalleryImageStyled src={character.image} alt={character.name} />
            <h2>{character.name}</h2><p>{character.species}</p></GalleryItemStyled>) 
    )
};

GalleryItem.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object.isRequired,).isRequired,
}