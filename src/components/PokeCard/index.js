import React from 'react';
import { shape, func, noop } from 'prop-types';
import FrontCard from '../FrontCard';
import BackCard from '../BackCard';

const PokeCard = ({ pokemon }) => {
    const { 
        id: pokeId,
        name,
        weight,
        height,
        pokemon_v2_pokemontypes:types,
        pokemon_v2_pokemonabilities: abilities,
        pokemon_v2_pokemonspecy: {
            pokemon_v2_evolutionchain: {
                pokemon_v2_pokemonspecies: evolutions
            }
        },
        pokemon_v2_pokemonstats: stats
    } = pokemon;
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`;

    return (
        <article className='pokeCard'>
            <FrontCard pokeId={pokeId} name={name} types={types} sprite={sprite} />
            <BackCard 
                abilities={abilities} 
                weight={weight}
                height={height}
                evolutions={evolutions}
                stats={stats}
            />
        </article>
    );
};

PokeCard.propTypes = {
    pokemon: shape({}),
    onClick: func
};

PokeCard.defaultProps = {
    pokemon: {},
    onClick: noop
};

export default PokeCard;