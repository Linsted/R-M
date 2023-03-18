import styled from '@emotion/styled';

export const GalleryStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media(min-width: 1020px){
        margin-inline: auto;
    max-width: 1020px;
    
    }
    

    @media(max-width: 360px){
        
    flex-direction: column;
    gap: 32px;
    
    }

    @media(min-width: 1020px){
        
    
    gap: 20px;
    
    }

`;