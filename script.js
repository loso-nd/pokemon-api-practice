getPokemon = (pokemon) => { //pass in the parm a pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => res.json())
    .then(pokemon => buildCard(pokemon)) //console.log(data) to see it first
}

getPokemon("mewtwo") //invoke the func with an arg requires quotes

//How to get this on the page

buildCard = (pokemon) => {
    let h3 = document.querySelector('#name')
    let img = document.querySelector('img')
    h3.textContent = pokemon.name
    img.src = pokemon.sprites.front_default
}
