import styled from '@emotion/styled';
import { AiOutlineSearch } from "react-icons/ai";

export const LabelStyled = styled.label`
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 32px;
    

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

    

`

export const IconStyled = styled(AiOutlineSearch)`
    position: absolute;
    top: 16px;
    left: 25px;
    color: rgba(0, 0, 0, 0.54);
    width: 22px;
    height: 22px;
`