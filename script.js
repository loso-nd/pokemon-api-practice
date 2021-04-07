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
//fetching to our own data base
handleAddToTeam = (pokeObj) => {
    fetch('http://localhost:3000/team',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(pokeObj)
    })
}


//How to get this on the page

buildCard = (pokemon) => {

//creating this obj here in case I want to reuse this obj if i am getting pokemon from the API for from my handleTeams I have the same info
    let pokeObj = {
        name: pokemon.name,
        sprites: {
            front_default: pokemon.sprites.front_default
        }
    }

    let h3 = document.querySelector('#name')
    let img = document.querySelector('img')
    let card = document.querySelector('.card')
    let btn = document.createElement('button')

    h3.textContent = pokemon.name
    img.src = pokemon.sprites.front_default
    btn.textContent = "Add Pokemon"
    btn.addEventListener('click', () => handleAddToTeam(pokeObj))//nested callback
    card.appendChild(btn)

}
//buildCard is being invoked after the dat is fetched from the server