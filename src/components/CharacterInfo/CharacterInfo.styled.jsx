import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1020px) {
        align-items: center;
    }
    
    
`
export const ContainerStyled = styled.div`
    padding-top: 25px;
    padding-left: 24px;
    padding-right: 24px;

    @media(min-width: 1020px){
        padding-top: 21px;
    padding-left: 50px;
    padding-right: 50px;
    }
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    font-family: 'Karla';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 1.16;
text-transform: uppercase;
display: flex;
    align-items: center;
    transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);



color: #000000;

:hover, :focus {
    color: red;
}
`
export const LinkContainerStyled = styled.div`
    margin-bottom: 73px;
    @media (min-width: 1020px) {
        margin-bottom: 26px;
    }
`;

export const IconStyled = styled(AiOutlineArrowLeft)`
    width: 23px;
    height: 23px;
    margin-right: 12px;
`
export const ImageContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 34.5px;

    @media(min-width: 1020px) {
       margin-bottom: 48px;

    };
    
`;

export const ImageStyled = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 148px;
    border: 5px solid #F2F2F7;
    margin-bottom: 29px;
    @media (min-width: 1020px) {
        margin-bottom: 16px;
    }

    @media(min-width: 1020px) {
        width: 300px;
    height: 300px;
    }
`;

export const NameStyled = styled.h2`
font-weight: 400;
font-size: 32px;
line-height: 1.19;
color: #081F32;
text-align: center;

@media(min-width: 1020px) {
       font-size: 48px;
line-height: 1.16;
    }

`;

export const TitleStyled = styled.h3`
    font-weight: 500;
font-size: 20px;
line-height: 1.2;
letter-spacing: 0.15px;
color: #8E8E93;
margin-bottom: 25px;

@media(min-width: 1020px) {
       margin-bottom: 48px;
    }

`;

export const ListStyled = styled.ul`
 padding-left: 16px;
`;

export const ItemStyled = styled.li`
  padding-bottom: 12px;
  padding-top: 9px;
  position: relative;

  @media(min-width: 1020px) {
       width: 413px;
    }

 ::after {
    position: absolute;
    content: "";
    background: rgba(33, 33, 33, 0.08);
    height: 1px;
    width: 298px;
    top: 61px;
    left: -3px;

     @media(min-width: 1020px) {
       width: 395px;
       left: 1px;
    }
 }
`;

export const ItemTitleStyled = styled.h4`
 font-weight: 700;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.15px;
color: #081F32;
`;

export const TextTitleStyled = styled.p`
 font-weight: 400;
font-size: 14px;
line-height: 1.43;
letter-spacing: 0.25px;
color: #6E798C;
`;