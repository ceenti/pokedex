import React from 'react';
import { shape, func, noop } from 'prop-types';
import FrontCard from '../FrontCard';
import BackCard from '../BackCard';

const PokeCard = ({ pokemon }) => {
    const { id: pokeId, name, pokemon_v2_pokemontypes: types } = pokemon;
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`;

    return (
        <article className='pokeCard'>
            <FrontCard pokeId={pokeId} name={name} types={types} sprite={sprite} />
            <BackCard />
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