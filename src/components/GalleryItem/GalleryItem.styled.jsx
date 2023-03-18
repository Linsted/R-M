import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const GalleryItemStyled = styled.li`
display: flex;
flex-direction: column;
color: black;
text-decoration: none;
max-width: 312px;

border-radius: 4px;
margin-inline: auto;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

:hover, :focus-within {
    transform: scale(1.1);
}


@media(min-width: 361px){
        
    
    max-width: 240px;
    
    }
`;

export const GalleryImageStyled = styled.img`
margin-inline: auto;
width: 312px;
height: 232px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;

@media(min-width: 361px){
        
    
    width: 240px;
    height: 168px;
    
    }
`;



export const LinkStyled = styled(Link)`
color: #000000;
text-decoration: none;
border-radius: 4px;

`;

export const ContainerStyled = styled.div`
padding: 12px 16px;

`;

export const NameStyled = styled.h2`
font-weight: 500;
font-size: 20px;
line-height: 1.5;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 0.87);
margin-bottom: 1px;

`;

export const SpecieStyled = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 1.5;
letter-spacing: 0.25px;
color: rgba(0, 0, 0, 0.6);

`;