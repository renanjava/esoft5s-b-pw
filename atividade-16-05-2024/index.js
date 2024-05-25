const squirtle = document.createElement('h1')
squirtle.textContent = "Squirtle"
document.getElementById("header").appendChild(squirtle)

const elemento = document.createElement('h3')
elemento.textContent = "Squirtle"

listaNav = document.createElement("ul")
listaNav.style.backgroundColor = "#343a40"
listaNav.style.color = "white"
listaNav.style.gap = "20px";
listaNav.style.justifyContent = "center";
listaNav.style.flexWrap = "wrap";
listaNav.style.padding = "10px";
listaNav.style.marginBottom = "20px";

const infosNav = ["Informações sobre Squirtle", "Características",
    "Curiosidades", "Artigo sobre Squirtle",
    "Recursos Adicionais", "Evolução", "Todo List"]

const infosCuriosidades = ["Squirtle é um dos Pokémon mais populares e adoráveis.",
    "Seu nome deriva das palavras \"squirrel\"" + "(esquilo) e \"turtle" + "(tartaruga).",
    "Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon."]

infosNav.forEach(e => {
    listaNav.appendChild(createLi(e, "a"))
})

nav = document.getElementById("nav")
nav.appendChild(listaNav)

const main = document.getElementById("main")

const sectionInfoSquirtle = criaSectionComTitulo(main, infosNav[0])
const divImagens = document.createElement("div")
divImagens.style.display = "flex";
divImagens.style.justifyContent = "space-evenly";
divImagens.style.flexWrap = "wrap";
divImagens.appendChild(criaElementoImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", 1))
divImagens.appendChild(criaElementoImg("https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png", 2))
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

const sectionCuriosidades = criaSectionComTitulo(main, infosNav[2])
const listaCuriosidades = document.createElement("ul")
infosCuriosidades.forEach(e => {
    listaCuriosidades.appendChild(createLi(e, "N/A"))
})
sectionCuriosidades.appendChild(listaCuriosidades)

function createLi(texto, tipo) {
    const li = document.createElement("li")
    if (tipo == "a") {
        const tipoElemento = document.createElement(tipo)
        tipoElemento.textContent = texto
        li.appendChild(tipoElemento)
    } else if (tipo == "N/A") {
        li.style.listStyle = "none"
        li.textContent = "🔎 " + texto
    }
    return li
}

function criaElementoImg(link, numeracao) {
    const imagem = document.createElement("img")
    imagem.style.width = (numeracao == 1 ? "150px" : "98px");
    imagem.style.height = (numeracao == 1 ? "150px" : "98px");
    imagem.style.alignSelf = "center";
    imagem.src = link
    imagem.alt = "Squirtle " + numeracao
    return imagem
}

function criaSectionComTitulo(main, titulo) {
    const section = document.createElement("section")
    const tituloSection = document.createElement("h2")
    tituloSection.textContent = titulo
    section.appendChild(tituloSection)
    main.appendChild(section)
    return section
}