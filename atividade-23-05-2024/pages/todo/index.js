const taskKey = '@tasks'

// Função para adicionar tarefa
function addTask(event) {
  event.preventDefault() // Evita o recarregamento da página
  const taskId = new Date().getTime()
  const taskList = document.querySelector('#taskList')

  const form = document.querySelector('#taskForm')
  const formData = new FormData(form)

  const taskTitle = formData.get('title')
  const taskDescription = formData.get('description')


  const li = document.createElement('li')

  li.id = taskId
  li.innerHTML = `
      <button id="update-button" class="update-button" title="Editar tarefa" onclick="abrirDialog('${taskTitle}','${taskDescription}')">✏️</button>
      <h2>${taskTitle}</h2>
      <p>${taskDescription}</p>
  `

  taskList.appendChild(li)

  // Salvar tarefas no localStorage
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  tasks.push({ title: taskTitle, description: taskDescription })
  localStorage.setItem(taskKey, JSON.stringify(tasks))

  form.reset()
}

function abrirDialog(title, description){
  const dialog = document.getElementById("dialog")
  const tituloForm = document.getElementById("updateTitle")
  tituloForm.value = title
  const descricaoForm = document.getElementById("updateDescription")
  descricaoForm.value = description
  dialog.showModal()
}

function fecharDialog(){
  const dialog = document.getElementById("dialog")
  dialog.close()
}

// Carregar tarefas do localStorage ao recarregar a página
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  const taskList = document.querySelector('#taskList')
  taskList.innerHTML = tasks
    .map((task) => `<li><button id="update-button" class="update-button" title="Editar tarefa" onclick="abrirDialog('${task.title}','${task.description}')">✏️</button><h2>${task.title}</h2><p>${task.description}</p></li>`)
    .join('')
})
