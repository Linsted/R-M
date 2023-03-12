import styled from '@emotion/styled';
import { AiOutlineSearch } from "react-icons/ai";

export const LabelStyled = styled.label`
    display: flex;
    justify-content: center;
    position: relative;
    

`

export const InputStyled = styled.input`
    box-sizing: border-box;
    width: 312px;
    height: 24px;
    padding: 0px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    outline: none;
    padding-left: 48px;

    

`

export const IconStyled = styled(AiOutlineSearch)`
    position: absolute;
    top: 4px;
    left: 25px;
    color: rgba(0, 0, 0, 0.54);

`