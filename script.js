const input = document.querySelector('#texto-tarefa');
const botaoCria = document.querySelector('#criar-tarefa');
const botaoApaga = document.querySelector('#apaga-tudo');
const botaoApagaCompletas = document.querySelector('#remover-finalizados');
const botaoApagaSelecionada = document.querySelector('#remover-selecionado');
const botaoSalva = document.querySelector('#salvar-tarefas');
const ol = document.querySelector('#lista-tarefas');

function removeSelected() {
  const selected = document.querySelectorAll('.selected');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].classList.remove('selected');
  }
}
botaoCria.addEventListener('click', () => {
  const createLi = document.createElement('li');
  createLi.innerText = input.value;
  createLi.addEventListener('click', () => {
    removeSelected();
    createLi.classList.add('selected');
  });
  createLi.addEventListener('dblclick', () => {
    createLi.classList.toggle('completed');
  });
  ol.appendChild(createLi);
});

botaoApaga.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    const cadaLi = li[index];
    ol.removeChild(cadaLi);
  }
});

botaoApagaCompletas.addEventListener('click', () => {
  const completas = document.querySelectorAll('.completed');
  for (let index = 0; index < completas.length; index += 1) {
    const cadaLi = completas[index];
    ol.removeChild(cadaLi);
  }
});

botaoApagaSelecionada.addEventListener('click', () => {
  const selected = document.querySelectorAll('.selected');
  for (let index = 0; index < selected.length; index += 1) {
    ol.removeChild(selected[index]);
  }
});

botaoSalva.addEventListener('click', () => {
  const toDoList = {};
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    toDoList[li[index].innerHTML] = li[index].className;
  }
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
});

window.onload = () => {
  if (localStorage.getItem('toDoList')) {
    const toDoList2 = JSON.parse(localStorage.getItem('toDoList'));
    const keys = Object.keys(toDoList2);
    for (let index = 0; index < keys.length; index += 1) {
      const createLi2 = document.createElement('li');
      createLi2.innerHTML = keys[index];
      createLi2.className = toDoList2[keys[index]];
      createLi2.addEventListener('click', () => {
        removeSelected();
        createLi2.classList.add('selected');
      });
      createLi2.addEventListener('dblclick', () => {
        createLi2.classList.toggle('completed');
      });
      ol.appendChild(createLi2);
    }
  }
};
