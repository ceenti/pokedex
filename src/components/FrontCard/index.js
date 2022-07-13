import React from 'react';
import { string, number, arrayOf, shape } from 'prop-types';
import TypePill from '../TypePill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const FrontCard = ({pokeId, name, sprite, types}) => {
    return (
        <div className='frontCard'>
            <div className='headerCard'>
                <h3>#{pokeId} {name}</h3>
                <FontAwesomeIcon icon={faStar}/>
            </div>
            <div className='spriteContainer'>
                <img
                    className="sprite"
                    src={sprite}
                    alt={`${name} sprite`}
                    width={200}
                    height={250}
                    onError={({ currentTarget }) => {
                        currentTarget.style.opacity= "0.3";
                        currentTarget.onerror=null;
                        currentTarget.src="/assets/images/no_pokemon.png"
                    }}
                    />
            </div>
            <div className="types">
                {types.map(type => <TypePill key={type.pokemon_v2_type.id} name={type.pokemon_v2_type.name} />)}
            </div>
        </div>
    );
};

FrontCard.propTypes = {
    pokeId: number,
    name: string,
    sprite: string,
    types: arrayOf(shape({}))
};

FrontCard.defaultProps = {
    pokeId: null,
    name: '',
    sprite: '',
    types: []
};

export default FrontCard;