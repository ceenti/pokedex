import React from 'react';
import { number } from 'prop-types';
import TypePill from '../TypePill';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_POKEMON } from '../../ApolloClient/src/queries';
import { STATS } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const DetailsCard = ({ id }) => {
    const navigate = useNavigate();
    const pokemonData = useQuery(GET_POKEMON, {
        variables: { id },
    });

    if (pokemonData.error) return <p>Error :(</p>;
    if (pokemonData.loading) return <p>Loading...</p>;

    const pokemon = pokemonData.data?.pokemon[0] || {};
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
        <article className="details">
            <div className={`headerDetails ${types[0].pokemon_v2_type.name}`}>
                <button className={`backBttn ${types[0].pokemon_v2_type.name}`} onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faChevronLeft} size={15}/>
                </button>
                <h1 className='headerTitle'>#{pokeId} {name}</h1>
            </div>
            
            <div className='cardDetails'>
                <div>
                    <div>
                        {types.map(type => <TypePill key={type.pokemon_v2_type.id} name={type.pokemon_v2_type.name} />)}
                    </div>
                    <div>
                        <img className="sprite" src={sprite} alt={`${name} sprite`} width={300} height={450}/>
                    </div>
                </div>

                <div>
                    <div className="abilities">
                        <h4>Abilities</h4>
                        {abilities.map(ability => <span className="ability" key={ability.pokemon_v2_ability.id} >{ability.pokemon_v2_ability.name}</span>)}

                        <span><b>Height</b> {height}</span>
                        <span><b>Weight</b> {weight}</span>
                    </div>

                    <div className="stats">
                        <h4>Base Stats</h4>
                        {stats.map((stat, index) => {
                            const statInfo = STATS[stat.pokemon_v2_stat.name];
                            return <span key={index} className={statInfo.className}><b>{statInfo.label}</b>{stat.base_stat}</span>
                        })}
                    </div>

                    <div>
                        <h4>Evolution Chain</h4>
                        {evolutions.map(evolution => {
                            const ev_sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolution.id}.svg`;
                            return (
                                <img className="sprite" key={evolution.id} src={ev_sprite} alt={`${evolution.name} sprite`} width={80} height={85}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        </article>
    );
};

DetailsCard.propTypes = {
    id: number
};

DetailsCard.defaultProps = {
    id: null
};

export default DetailsCard;
