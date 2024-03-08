//pega o elemento button
const btn1 = document.querySelector('button')
//pega a lista de filmes
const listaFilmes = document.querySelector('#listaFilmes')

//adiciona o evento de clique ao botão
btn1.addEventListener('click',()=>{
    //pega o input onde o usuário digita o filme
    const inputUsuario = document.querySelector('#filmeInput').value
    //cria um novo <li>
    const itemLista = document.createElement('li')
    //adiciona o li à lista de filmes
    listaFilmes.append(itemLista)
    //adiciona o filme que o usuário digitou à lista
    itemLista.innerHTML = `Meu filme ${inputUsuario}`
})

/*
Existem outras ações para manipular o DOM como:
itemLista.classList.add('nome-da-classe') => Adiciona uma classe
itemLista.style.backgroundColor = 'red' => Muda a cor do fundo para vermelho
itemLista.classList.remove('nome-da-classe') => Remove uma classe
itemLista.classList.toggle('nome-da-classe') => liga/desliga uma classe
*/