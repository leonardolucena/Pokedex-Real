const searchBtn = document.querySelector(".blackButton")
const nextBtn = document.querySelector(".nextButton")
const backBtn = document.querySelector(".backButton")
const inputField = document.querySelector(".numberInput")
const imageScreen = document.querySelector(".pokemonPicture")
const nameScreen = document.getElementById("name")
const xp = document.getElementById("xp")
const hp = document.getElementById("hp")
const attack = document.getElementById("attack")
const defense = document.getElementById("defense")
const specialAttack = document.getElementById("specialAttack")
const specialDefense = document.getElementById("specialDefense")
const speed = document.getElementById("speed")
const type1 = document.getElementById("type-1")
const type2 = document.getElementById("type-2")
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const btnPower = document.getElementById("button-power")

const resetFields = () => {
    imageScreen.src = ""
    nameScreen.innerHTML = ""
    xp.innerHTML = ""
    hp.innerHTML = ""
    attack.innerHTML = ""
    defense.innerHTML = ""
    specialAttack.innerHTML = ""
    specialDefense.innerHTML = ""
    speed.innerHTML = ""
    height.innerHTML = ""
    weight.innerHTML = ""
    type1.innerHTML = ""
    type2.innerHTML = ""
}

const getPokemon = (id) => {
    resetFields();

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((pokemon) =>{
            imageScreen.src = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`
            nameScreen.innerHTML = pokemon.name
            xp.innerHTML = pokemon.base_experience
            hp.innerHTML = pokemon.stats[0].base_stat
            attack.innerHTML = pokemon.stats[1].base_stat
            defense.innerHTML = pokemon.stats[2].base_stat
            specialAttack.innerHTML = pokemon.stats[3].base_stat
            specialDefense.innerHTML = pokemon.stats[4].base_stat
            speed.innerHTML = pokemon.stats[5].base_stat
            height.innerHTML = pokemon.height
            weight.innerHTML = pokemon.weight
            type1.innerHTML = pokemon.types[0].type.name
            type2.innerHTML = "---"
            type2.innerHTML = pokemon.types[1].type.name
        })
}

inputField.addEventListener("keydown", (event) =>{
    if(event.key === "Enter"){
        searchBtn.click()
    }
})

searchBtn.addEventListener("click", () => getPokemon(inputField.value))

nextBtn.addEventListener("click", () => getPokemon(++inputField.value))
backBtn.addEventListener("click", () => getPokemon(--inputField.value))

btnPower.addEventListener("click", resetFields)

function insert(num){
    inputField.value += num
}

function reseta(){
    inputField.value = ""
}
