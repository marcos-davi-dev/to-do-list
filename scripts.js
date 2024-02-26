//Primeiro pegar oq ue está no input qunado clicamos no botão
const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-task")

let listaDeTarefas = []



function adicinarNovaTarefa(){

	listaDeTarefas.push({
		tarefa: input.value,
		concluida: false
	});

	input.value = ''

	mostrarTarefas();
}


function mostrarTarefas() {

	let novaLi = ''
//${tarega.concluida && "done"} se tarefa.concluida for verdadeira então insere a classe "done" esses 2 && são um if
 	listaDeTarefas.forEach( (tarefa , posicao) => {
		novaLi = novaLi + `

			<li class="task ${tarefa.concluida && "done"}"> 
				<img src="./img/checked.png" alt="check-da-tarefa" onclick ="concluirTarefa(${posicao})">
				<p> ${tarefa.tarefa}</p>
  				<img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${posicao})">
		  	</li>

		  	`
	})

	listaCompleta.innerHTML = novaLi

	localStorage.setItem('lista',JSON.stringify(listaDeTarefas));

}


function concluirTarefa (posicao){
	listaDeTarefas[posicao].concluida = !listaDeTarefas[posicao].concluida

	mostrarTarefas();
}


function deletarItem (posicao){
	listaDeTarefas.splice(posicao, 1)
	
	mostrarTarefas();
}

function recarregarTarefas(){
	const tarefasDoLocalStorage = localStorage.getItem('lista');
 if (tarefasDoLocalStorage) {
    listaDeTarefas = JSON.parse(tarefasDoLocalStorage)
  }

mostrarTarefas();
}

recarregarTarefas();
button.addEventListener('click', adicinarNovaTarefa);