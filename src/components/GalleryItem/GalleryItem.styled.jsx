import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const GalleryItemStyled = styled.li`
display: flex;
flex-direction: column;
color: black;
text-decoration: none;
width: 312px;
/* border: 1px solid red; */
border-radius: 4PX;
margin-inline: auto;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);

`;

export const GalleryImageStyled = styled.img`
margin-inline: auto;
width: 312px;
height: 232px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
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


`;

export const SpecieStyled = styled.p`


`;