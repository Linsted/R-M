

import { Container } from "components/Error/PageNotFound.styled";
import { Link } from "react-router-dom";
import errorImg from "../img/Error.jpg";

 const PageNotFound = () => {

     return (
        
        <Container>
            <img src={errorImg} alt="Error" />
            <p>Go to <Link to="/">Home</Link> page</p>
            
        </Container>
    )
};

export default PageNotFound;