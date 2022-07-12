import { gql } from '@apollo/client';

export const GET_ALL_POKEMON = gql`{
  pokedex: pokemon_v2_pokemon(where: {pokemon_v2_pokemonspecy: {generation_id: {_in: [1,2]}}}, limit: 25, offset: 0, order_by: {id: asc}) {
    id
    name
    weight
    height
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
        id
      }
    }
    pokemon_v2_pokemonabilities {
      pokemon_v2_ability {
        name
        id
      }
    }
    pokemon_v2_pokemonstats {
        pokemon_v2_stat {
        name
      }
      base_stat
    }
    pokemon_v2_pokemonspecy {
      pokemon_v2_evolutionchain {
        pokemon_v2_pokemonspecies {
          name
          id
        }
      }
    }
  }
}`;