const squirtle = document.createElement('h1')
squirtle.textContent = "Squirtle"
document.getElementById("header").appendChild(squirtle)

const elemento = document.createElement('h3')
elemento.textContent = "Squirtle"

nav = document.getElementById("nav")
ul = document.createElement("ul")
ul.style.backgroundColor = "#343a40"
ul.style.color = "white"
ul.style.gap = "20px";
ul.style.justifyContent = "center";
ul.style.flexWrap = "wrap";
ul.style.padding = "10px";
ul.style.marginBottom = "20px";
ul.appendChild(createLi("Informações sobre Squirtle"))
ul.appendChild(createLi("Características"))
ul.appendChild(createLi("Curiosidades"))
ul.appendChild(createLi("Artigo sobre Squirtle"))
ul.appendChild(createLi("Recursos Adicionais"))
ul.appendChild(createLi("Evolução"))
ul.appendChild(createLi("Todo List"))
nav.appendChild(ul)

function createLi(texto){
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.textContent = texto
    li.appendChild(a)
    return li
}
