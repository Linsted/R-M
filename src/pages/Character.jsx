import { useEffect, useState, } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchCharacterById } from "Api/Api";
import CharacterInfo from "components/CharacterInfo/CharacterInfo";
import MyLoader from "components/CharacterInfo/MyLoader";
import { ContainerStyled, LinkStyled, LinkContainerStyled, IconStyled } from "../components/CharacterInfo/CharacterInfo.styled";
import toast from 'react-hot-toast';



const Character = () => { 

    

    const [character, setCharacter] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";





    useEffect(() => {
    
        const abortController = new AbortController();
     const fetchCharacter = async () => {
        setLoading(true);
        try {
            const response = await fetchCharacterById(id,abortController );
            setLoading(false);
            setCharacter(response.data);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error('Sorry, an error occurred!');
         };

    };

        fetchCharacter();
        return () => { 
            abortController.abort();
        };
    }, [id]);



    return (
        <ContainerStyled>
            <LinkContainerStyled>
                <LinkStyled to={backLinkHref}><IconStyled />Go back</LinkStyled>
            </LinkContainerStyled>
            {loading ? <MyLoader loading={loading} /> : <CharacterInfo character={character} />}
            
        </ContainerStyled>
    );

};
export default Character;