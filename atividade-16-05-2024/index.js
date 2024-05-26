const infosNav = ["Informações sobre Squirtle", "Características",
    "Curiosidades", "Artigo sobre Squirtle",
    "Recursos Adicionais", "Evolução", "Todo List"]

const refsNav = ["#info-squirtle","#caracteristicas","#curiosidades","#artigo-squirtle","#recursos","#evolucao",null]

const infosCuriosidades = ["Squirtle é um dos Pokémon mais populares e adoráveis.",
    "Seu nome deriva das palavras \"squirrel\"" + "(esquilo) e \"turtle" + "(tartaruga).",
    "Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon."]

const infosArticle = ["Squirtle, com sua aparência simpática e sua habilidade em controlar a" +
    "água, conquistou o coração de treinadores Pokémon ao redor do mundo." +
    "Sendo o inicial de água na região de Kanto, Squirtle é uma escolha" +
    "popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.",
"Sua concha nas costas não apenas oferece proteção, mas também é um" +
"símbolo de resistência. Ao evoluir para Wartortle e, posteriormente," +
"para Blastoise, Squirtle se transforma em uma força formidável," +
"dominando ataques aquáticos que podem surpreender adversários em batalhas.",
"Além de suas habilidades de batalha, Squirtle é conhecido por seu" +
"carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle" +
"como uma amizade profunda, tornando-o não apenas um companheiro de" +
"lutas, mas um amigo leal ao longo de suas jornadas."]

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

let i = 0
infosNav.forEach(e => {
    listaNav.appendChild(createLi(e, "a", refsNav[i]))
    i++
})

nav = document.getElementById("nav")
nav.appendChild(listaNav)

const main = document.getElementById("main")

const sectionInfoSquirtle = criaElementoComTitulo(main, infosNav[0], "section")
sectionInfoSquirtle.classList.add("#info-squirtle")
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

const sectionCaracteristicas = criaElementoComTitulo(main, infosNav[1], "section")
const paragrafoCaracteristicas = document.createElement("p")
paragrafoCaracteristicas.textContent = "Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump."
sectionCaracteristicas.appendChild(paragrafoCaracteristicas)

const sectionCuriosidades = criaElementoComTitulo(main, infosNav[2], "section")
const listaCuriosidades = document.createElement("ul")
infosCuriosidades.forEach(e => {
    listaCuriosidades.appendChild(createLi(e, "N/A", null))
})
sectionCuriosidades.appendChild(listaCuriosidades)

const articleSquirtle = criaElementoComTitulo(main, "Squirtle: O Amigo Aquático", "article")
infosArticle.forEach(e => {
    articleSquirtle.appendChild(criaParagrafoArticle(e))
})

const sectionRecursos = criaElementoComTitulo(main, infosNav[4], "section")
const listaRecursos = document.createElement("ul")
listaRecursos.appendChild(createLi("Pokédex - Squirtle", "a", null))
listaRecursos.appendChild(createLi("Bulbapedia - Squirtle", "a", null))
sectionRecursos.appendChild(listaRecursos)

const sectionEvolucao = criaElementoComTitulo(main, "Evoluções", "section")
sectionEvolucao.classList.add("evolucao")
const listaImagens = document.createElement("ul")
listaImagens.style.display = "flex";
listaImagens.style.justifyContent = "space-around";
listaImagens.style.flexWrap = "wrap";
listaImagens.style.listStyle = "none";
listaImagens.appendChild(criaPokemonEvolucao("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png","1. Squirtle"))
listaImagens.appendChild(criaPokemonEvolucao("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png","2. Wartortle"))
listaImagens.appendChild(criaPokemonEvolucao("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png","3. Blastoise"))
sectionEvolucao.appendChild(listaImagens)

const footer = document.getElementById("footer")
footer.appendChild(criaParagrafoFooter(null,"© 2024 Página do Pokémon Squirtle. Todos os direitos reservados."))
footer.appendChild(criaParagrafoFooter("#header","Voltar para o topo"))
footer.appendChild(criaParagrafoFooter("mailto:contato@squirtlepage.com","Contato via e-mail"))
footer.appendChild(criaParagrafoFooter("tel:+5555555555","Telefone: (55) 5555-5555"))

function createLi(texto, tipo, referencia){
    const li = document.createElement("li")
    if (tipo == "a") {
        const tipoElemento = document.createElement(tipo)
        tipoElemento.textContent = texto
        if (texto == "Pokédex - Squirtle" || "Bulbapedia - Squirtle") {
            tipoElemento.href = (texto == "Pokédex - Squirtle" ? "https://www.pokemon.com/br/pokedex/squirtle"
                : "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)")
        }
        if(referencia != null)
            tipoElemento.href = referencia
        li.appendChild(tipoElemento)
    } else if (tipo == "N/A") {
        li.style.listStyle = "none"
        li.textContent = "🔎 " + texto
    }
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

function criaElementoComTitulo(main, titulo, tipo) {
    const elemento = document.createElement(tipo)
    const tituloElemento = document.createElement("h2")
    tituloElemento.textContent = titulo
    elemento.appendChild(tituloElemento)
    main.appendChild(elemento)
    return elemento
}

function criaParagrafoArticle(texto){
    const paragrafo = document.createElement("p")
    paragrafo.textContent = texto
    return paragrafo
}

function criaParagrafoFooter(referencia, texto){
    const paragrafo = document.createElement("p")
    const a = document.createElement("a")
    if(referencia != null)
        a.href = referencia
    a.textContent = texto
    paragrafo.appendChild(a)
    return paragrafo
}

function criaPokemonEvolucao(link, nome){
    const itemLista = document.createElement("li")
    itemLista.style.listStyle = "none"
    const figure = document.createElement("figure")
    figure.appendChild(criaElementoImg(link, 1))
    const figcaption = document.createElement("figcaption")
    figcaption.style.fontWeight = "600";
    figcaption.style.fontSize = "20px";
    figcaption.style.marginTop = "16px";
    figcaption.textContent = nome
    figure.appendChild(figcaption)
    itemLista.appendChild(figure)
    return itemLista
}