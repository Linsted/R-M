const CharacterInfo = ({ character }) => { 
    console.log(character);


     return (
        <div>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
            <h3>Informations</h3>

            <ul>
                <li>
                    <h3>Gender</h3>
                    <p></p>
                </li>
                <li>
                    <h3>Status</h3>
                    <p></p>
                </li>
                <li>
                    <h3>Specie</h3>
                    <p></p>
                </li>
                <li>
                    <h3>Origin</h3>
                    <p></p>
                </li>
                <li>
                    <h3>Type</h3>
                    <p></p>
                </li>
            </ul>

        </div>
)
};

export default CharacterInfo;