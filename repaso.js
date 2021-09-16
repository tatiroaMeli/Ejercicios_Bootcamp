// repaso js 16/sep/2021
/*
Consignas
Obtener el nombre de tu pokemon favorito utilizando 
async/await o promesas
Obtener el nombre de 15 pokemones
Obtener un listado de 15 pokemones. De estos 15, 
mostrar por consola los que tengan peso mayor a 150
*/

const axios = require("axios");
const api = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemon(name) {
  try {
    const response = await axios.get(`${api}${name}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
// getPokemon("squirtle")

async function getPokemons(cant) {
  try {
    const response = await axios.get(`${api}?limit=${cant}`);
    const pokemons = response.data.results;
    const listPokemon = pokemons.map((e) => e.name);
    // console.log(listPokemon);
    return listPokemon;
  } catch (error) {
    console.log(error.message);
  }
}

// getPokemons(15);

async function getWeightPokemons() {
  try {
    const pokemons = await getPokemons(15);
    console.log(pokemons);
    pokemons.forEach(async (element) => {
      const pokemon = await getPokemon(element);
      if (pokemon.weight > 150) {
        console.log({ pokemon: pokemon.name, weight: pokemon.weight });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}

 getWeightPokemons();

async function getWeightPokemons2() {
  try {
    const pokemons = await getPokemons(15);
    return pokemons.map(async (element) => {
      const pokemon = await getPokemon(element);
      if (pokemon.weight > 150) {
        return { pokemon: pokemon.name, weight: pokemon.weight };
      }
    });
    // console.log(filteredPokemons);
  } catch (error) {
    console.log(error.message);
  }
}

// const pokemonFinal = Promise.all(getWeightPokemons2());
// getWeightPokemons2().then((r) => console.log(Promise.all(r)));
