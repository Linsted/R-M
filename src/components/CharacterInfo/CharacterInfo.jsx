import PropTypes from 'prop-types';
import { Container, ImageContainerStyled,ImageStyled,NameStyled,TitleStyled, ItemStyled, ListStyled,ItemTitleStyled,TextTitleStyled } from './CharacterInfo.styled';


const CharacterInfo = ({ character }) => { 
    console.log(character);
    const { image, name, gender, status, species, origin: { name: planet }, type } = character;

     return (
         <Container>
             <ImageContainerStyled>
            <ImageStyled width="150" height="148" src={image} alt="" />
                 <NameStyled>{name}</NameStyled>
                 </ImageContainerStyled>
            <TitleStyled>Informations</TitleStyled>
        
            <ListStyled>
                <ItemStyled>
                    <ItemTitleStyled>Gender</ItemTitleStyled>
                    <TextTitleStyled>{gender}</TextTitleStyled>
                </ItemStyled>
                <ItemStyled>
                    <ItemTitleStyled>Status</ItemTitleStyled>
                    <TextTitleStyled>{status}</TextTitleStyled>
                </ItemStyled>
                <ItemStyled>
                    <ItemTitleStyled>Specie</ItemTitleStyled>
                    <TextTitleStyled>{species}</TextTitleStyled>
                </ItemStyled>
                <ItemStyled>
                    <ItemTitleStyled>Origin</ItemTitleStyled>
                    <TextTitleStyled>{planet}</TextTitleStyled>
                </ItemStyled>
                <ItemStyled>
                    <ItemTitleStyled>Type</ItemTitleStyled>
                    <TextTitleStyled>{type === "" ? "Unknown" : type}</TextTitleStyled>
                </ItemStyled>
            </ListStyled>

        </Container>
)
};

export default CharacterInfo;

CharacterInfo.propTypes = {
    character: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        origin: PropTypes.shape({name: PropTypes.string.isRequired},).isRequired,
    }).isRequired,
}