

import { Link } from "react-router-dom";
import errorImg from "../img/Error.jpg";

 const PageNotFound = () => {

    return (
        <div>
            <img src={errorImg} alt="Error" />
            <p>Go to <Link to="/">Home</Link> page</p>
            
        </div>
    )
};

export default PageNotFound;