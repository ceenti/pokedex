import React from 'react';
import { string, number, arrayOf, shape,  } from 'prop-types';
import { STATS } from '../../constants';

const BackCard = ({abilities, weight, height, evolutions, stats}) => {
    return( 
            <article className='backCard'>
                <div className='abilities'>
                    <h4>Abilities</h4>
                    {abilities.map(ability => <span key={ability.pokemon_v2_ability.id} >{ability.pokemon_v2_ability.name}</span>)}
                </div>

                <div>
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

                <div className='evolutions'>
                    <h4>Evolution Chain</h4>
                    {evolutions.map(evolution => {
                        const ev_sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolution.id}.svg`;
                        return (
                            <img className="sprite" key={evolution.id} src={ev_sprite} alt={`${evolution.name} sprite`} width={30} height={30}/>
                        );
                    })}
                </div>
            </article>
    )
};

BackCard.propTypes = {
    title: string,
    description: string,
    image: string,
    abilities: arrayOf(shape()),
    weight: number,
    height: number,
    evolutions: arrayOf(shape()),
    stats: arrayOf(shape())
};

BackCard.defaultProps = {
    title: '',
    description: '',
    image: '',
    abilities: [],
    weight: 0,
    height: 0,
    evolutions: [],
    stats: []
};

export default BackCard;