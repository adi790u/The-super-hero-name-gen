const superheroes = require("superheroes");

const gen = () => {
    
    var name = superheroes.random();

    document.getElementById("naming").innerText = name;
    
}

document.getElementById("btn").addEventListener(
    "click",
    gen
)


