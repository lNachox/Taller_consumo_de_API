// Obtener referencia a los elementos HTML
const pokemonIdInput = document.getElementById('pokemonId');
const pokemonInfoDiv = document.getElementById('pokemonInfo');

// Función asincrónica para buscar un Pokémon por su ID
async function searchPokemon() {
  const pokemonId = pokemonIdInput.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  try {
    // Realizar la petición a la API utilizando Axios
    const response = await axios.get('https://pokeapi.co');
    const pokemon = response.data;

    // Construir la información del Pokémon y mostrarla en la página
    const pokemonInfo = `
      <p><strong>ID:</strong> ${pokemon.id}</p>
      <p><strong>Nombre:</strong> ${pokemon.name}</p>
      <p><strong>Tipo(s):</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p><strong>Altura:</strong> ${pokemon.height}</p>
      <p><strong>Peso:</strong> ${pokemon.weight}</p>
    `;
    pokemonInfoDiv.innerHTML = pokemonInfo;
  } catch (error) {
    // Manejar errores en caso de que la petición falle
    console.error('Error al buscar Pokémon:', error);
    alert('Error al buscar Pokémon. Por favor, inténtalo de nuevo.');
  }
}

// Asociar la función searchPokemon al evento click del botón de búsqueda
document.getElementById('searchButton').addEventListener('click', searchPokemon);
