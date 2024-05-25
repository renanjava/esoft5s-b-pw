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

const main = document.getElementById("main")

const sectionInfoSquirtle = criaSectionComTitulo(main, infosNav[0])
const divImagens = document.createElement("div")
divImagens.style.display = "flex";
divImagens.style.justifyContent = "space-evenly";
divImagens.style.flexWrap = "wrap";
divImagens.appendChild(criaElementoImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",1))
divImagens.appendChild(criaElementoImg("https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png",2))
const paragrafoInfo = document.createElement("p")
paragrafoInfo.textContent = "Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle."
sectionInfoSquirtle.appendChild(divImagens)
sectionInfoSquirtle.appendChild(paragrafoInfo)
main.appendChild(sectionInfoSquirtle)

const sectionCaracteristicas = criaSectionComTitulo(main, infosNav[1])
const paragrafoCaracteristicas = document.createElement("p")
paragrafoCaracteristicas.textContent = "Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump."
sectionCaracteristicas.appendChild(paragrafoCaracteristicas)
main.appendChild(sectionCaracteristicas)

function createLi(texto){
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.textContent = texto
    li.appendChild(a)
    return li
}

function criaElementoImg(link, numeracao){
    const imagem = document.createElement("img")
    imagem.style.width = (numeracao == 1 ? "150px" : "98px");
    imagem.style.height = (numeracao == 1 ? "150px" : "98px");
    imagem.style.alignSelf = "center";
    imagem.src = link
    imagem.alt = "Squirtle " + numeracao
    return imagem
}

function criaSectionComTitulo(main, titulo){
    const section = document.createElement("section")
    const tituloSection = document.createElement("h2")
    tituloSection.textContent = titulo
    section.appendChild(tituloSection)
    main.appendChild(section)
    return section
}