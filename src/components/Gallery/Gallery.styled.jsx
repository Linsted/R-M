import styled from '@emotion/styled';

export const GalleryStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    

    @media(max-width: 360px){
        
    flex-direction: column;
    gap: 32px;
    
    }

    @media(min-width: 361px){
        
    
    gap: 24px;
    
    }

`;