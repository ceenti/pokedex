import { gql } from '@apollo/client';

export const GET_ALL_POKEMON = gql`{
  pokedex: pokemon_v2_pokemon(where: {pokemon_v2_pokemonspecy: {generation_id: {_in: [1,2]}}}, limit: 151, offset: 0, order_by: {id: asc}) {
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
        pokemon_v2_pokemonspecies(order_by: {id: asc}) {
          id
          name
        }
      }
    }
  }
}`;

export const GET_POKEMON = gql`query Pokemon($id: Int!) {
  pokemon: pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
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
        pokemon_v2_pokemonspecies(order_by: {id: asc}) {
          id
          name
        }
      }
    }
  }
}`;

export const GET_TYPES = gql`{
  types: pokemon_v2_type(where: {generation_id: {_in: [1,2]}}) {
    id
    name
  }
}`;

export const GET_GENERATIONS = gql`{
  generations: pokemon_v2_generation(where: {name: {_in: ["generation-i", "generation-ii"]}}) {
    id
    name
  }
}`;