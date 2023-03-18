import errorImg from "../../img/Error.jpg";
import { ErrorContainerStyled } from "./Error.styled";

 const Error = () => {

    return (
        <ErrorContainerStyled>
            <img src={errorImg} alt="Error" />

            
        </ErrorContainerStyled>
    )
};

export default Error;