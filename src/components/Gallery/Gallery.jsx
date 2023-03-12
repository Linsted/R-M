import { GalleryItem } from "components/GalleryItem/GalleryItem";
import PropTypes from 'prop-types';
import { GalleryStyled } from "./Gallery.styled";


export const Gallery = ({characters}) => { 
    // console.log(characters);



    return (
        <GalleryStyled>
            <GalleryItem characters={characters} />
        </GalleryStyled>
    )
};


Gallery.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object.isRequired,).isRequired,
}