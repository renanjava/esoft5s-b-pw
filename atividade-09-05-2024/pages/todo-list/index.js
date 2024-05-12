if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", "[]")
} else {
    const listaLocalStorage = JSON.parse(localStorage.getItem("tasks"))

    listaLocalStorage.forEach(element => {
        const li = document.createElement("li")
        const h1 = document.createElement("h1")
        h1.textContent = element.titulo
        h1.style.fontWeight = "bold"
        const h3 = document.createElement("h3")
        h3.textContent = element.descricao
        const ul = document.getElementById("lista-tarefas")
        li.appendChild(h1)
        li.appendChild(h3)
        li.style.border = "1px solid #ccc";
        li.style.padding = "10px";
        li.style.borderRadius = "5px";
        li.style.marginBottom = "10px";
        ul.appendChild(li)
    });
}


function enviarDados(event){
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    const tarefa = {
        titulo:"",
        descricao:""
    }

    tarefa.titulo = formData.get('titulo')
    tarefa.descricao = formData.get('descricao')

    let arrayTarefa = JSON.parse(localStorage.getItem("tasks"))
    arrayTarefa.push(tarefa)
    localStorage.setItem("tasks",JSON.stringify(arrayTarefa))

    form.reset()
}
