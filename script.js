const input = document.querySelector('#texto-tarefa');
const botaoCria = document.querySelector('#criar-tarefa');
const botaoApaga = document.querySelector('#apaga-tudo');
const botaoApagaCompletas = document.querySelector('#remover-finalizados');
const botaoApagaSelecionada = document.querySelector('#remover-selecionado');
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
  const selected = document.querySelector('.selected');
  ol.removeChild(selected);
});
