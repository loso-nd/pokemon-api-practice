//Add event listener to the form 
// const form = document.querySelector('form')
// form.addEventListener('submit', handleSubmit)
document.querySelector('form').addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    getPokemon(e.target.search.value)
}


getPokemon = (pokemon) => { //pass in the parm a pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => res.json())
    .then(pokemon => buildCard(pokemon)) //console.log(data) to see it first
}

//pokemon("mewtwo") //invoke the func with an arg requires quotes

//How to get this on the page

buildCard = (pokemon) => {
    let h3 = document.querySelector('#name')
    let img = document.querySelector('img')
    h3.textContent = pokemon.name
    img.src = pokemon.sprites.front_default
}
//buildCard is being invoked after the dat is fetched from the server