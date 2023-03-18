import { useEffect, useState, } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { fetchCharacterById } from "Api/Api";
import CharacterInfo from "components/CharacterInfo/CharacterInfo";
import MyLoader from "components/CharacterInfo/MyLoader";



const Character = () => { 

    

    const [character, setCharacter] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";



console.log(id)

useEffect(() => {
     const fetchCharacter = async () => {
        setLoading(true);
        try {
            const response = await fetchCharacterById(id);
            setLoading(false);
            setCharacter(response.data);
        } catch (error) {
            console.log(error);
            setLoading(false);
         };

    };

        fetchCharacter();

    }, [id]);

    console.log(character)

    return (
        <>
            
            <Link to={backLinkHref}>Go back</Link>
            
            {loading ? <MyLoader loading={loading} /> : <CharacterInfo character={character} />}
            
        </>
)

};
export default Character;