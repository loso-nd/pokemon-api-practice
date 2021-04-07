# pokemon-api-practice
- How to approach an API and how to figure out how to use the API
- This API does not involve api key
- Only GET request [ https://pokeapi.co/api/v2/berry/{id or name}/ ]

## What can we do with this
- Take data from an api, utliize it to build a team of pokemon from my db
- functionality that builds a team of pokemon from my database
- Save and seed data to start a game
- User can edit data > save to my db > edit that data

## What is an API
- Interface to someone else's data
- What sets up the communications between me and thier applicatons 

## Setup
- Git Repo
- HTML, JS, CSS
- CRUD ( Fetch, POST )

## Goals
- Get a pokemon on the page
    - First thing we want to do when working/ testing with an API is to ensure that it returns data
    - Create a function getPokemon() to fetch the data from the server & console.log the data to see what we have requested, invoke the function
    - Create a buildCard() to layout a structure of how we want our data to apear on the page. Grab the elements for the HTML, assign those elements the proper values
    - Recall we want to return the BuildCard() inside .then() > once the request is received the data will be sent to the BuildCard()

- Use the search to functionality to display a pokemon on the page
    - Add an event listener to the form, (submit)
    - create a handleSubmit function
        - prevents auto refresh
        - invokes getPokemon() and listeners for the user input to via e.target.value, to target the user input & checks if the input matchs any pokemon fetched from the server. If so, the buildCard function will run

- Save Pokemon to my db
    - Create and include an Add Pokemon button to the page
    - Add and event Listener to the button, with a handleAddToTeam method.
    - Create a pokeObj and add it inside our buildCard() in case I want to resue the obj when fetching from the api or the db
    - Pass my handleAddToTeam method the pokeObj
    - Create my handleAddToTeam method and implemnt me fetch (POST) request
        - Stringfy(pokeObj) as my data


