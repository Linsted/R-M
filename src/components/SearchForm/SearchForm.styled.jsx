import styled from '@emotion/styled';
import { AiOutlineSearch } from "react-icons/ai";

export const ContainerStyled = styled.div`
     display: flex; 
     justify-content: center; 
    position: relative;
    margin-bottom: 32px;
    margin-inline: auto;
    max-width: 312px;
    

      @media(min-width: 1020px){
        
            max-width: 1020px;
            margin-bottom: 61px;
            
    
    
    }

`

export const InputStyled = styled.input`
    box-sizing: border-box;
    width: 312px;
    height: 56px;
    padding: 0px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    outline: none;
    padding-left: 48px;
    transition: border 1000ms cubic-bezier(0.4, 0, 0.2, 1);

        @media(min-width: 1020px){
        
            width: 1020px;
    
    
    }

    :hover, :focus {
        border: 1.5px solid rgb(0, 179, 196);
    }

    ::placeholder{
        font-family: 'Roboto';

font-weight: 400;
font-size: 16px;
line-height: 1.5;
color: rgba(0, 0, 0, 0.5);
    };

    

`;

export const IconStyled = styled(AiOutlineSearch)`
    position: absolute;
    top: 14px;
    left: 20px;
    color: rgba(0, 0, 0, 0.54);
    width: 22px;
    height: 22px;
`