import { useState, useEffect } from "react"
import { PokemonAPI } from "../utils/api";

export default function Pokemon() {
    const [ selectedPokemon, setPokemon ] = useState<any>();
    
    useEffect(() => {
        PokemonAPI.get("charizard").then((pokemon) => {
            console.log(pokemon.name);
            
            setPokemon(pokemon);
        });
    }, []);


    return(
        <>
        Selected Pokemon: {selectedPokemon !== undefined && selectedPokemon.name}
        </>
    )
}