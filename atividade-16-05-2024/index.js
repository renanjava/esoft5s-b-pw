const squirtle = document.createElement('h1')
squirtle.textContent = "Squirtle"
document.getElementById("header").appendChild(squirtle)

const elemento = document.createElement('h3')
elemento.textContent = "Squirtle"

ul = document.createElement("ul")
ul.style.backgroundColor = "#343a40"
ul.style.color = "white"
ul.style.gap = "20px";
ul.style.justifyContent = "center";
ul.style.flexWrap = "wrap";
ul.style.padding = "10px";
ul.style.marginBottom = "20px";

const infosNav = ["Informações sobre Squirtle","Características",
                  "Curiosidades","Artigo sobre Squirtle",
                  "Recursos Adicionais","Evolução","Todo List"]

infosNav.forEach(e => {
    ul.appendChild(createLi(e))
});

nav = document.getElementById("nav")
nav.appendChild(ul)

function createLi(texto){
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.textContent = texto
    li.appendChild(a)
    return li
}
