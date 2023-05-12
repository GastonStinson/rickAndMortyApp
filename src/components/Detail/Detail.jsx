import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";

function Detail() {

    const { id } = useParams();

    const [character, setCharacter] = useState({})
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            <img src={character.image} />
            <h1>{character.name && character.name}</h1>
            <h2>{character.status && character.status}</h2>
            <h2>{character.species && character.species}</h2>
            <h2>{character.gender && character.gender}</h2>
            <h2>{character.origin?.name && character.origin?.name}</h2>
        </div>
    )
}

export default Detail