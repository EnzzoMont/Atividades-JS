/*
Criando a base de dados de filmes  
*/

const filmes = [
    {
    nome: 'Harry Potter',
    genero: 'fantasia',
    lancamento: 2001
    },
    {
    nome: 'Avatar',
    genero: 'fantasia',
    lancamento: 2010
    },
    {
     nome:'O senhor dos Anéis',
     genero: 'fantasia',
     lancamento: 2000
    },
    {
     nome: 'Branquelas',
     genero: 'comédia',
     lancamento: 2007
    },
    {
     nome: 'A Lagoa Azul',
     genero: 'romance',
     lancamento: 1983
}]

/*
Pegando Elementos HTML
*/

//pega o elemento button
const btn1 = document.querySelector('button')
//pega a lista de filmes
const listaFilmes = document.querySelector('#listaFilmes')

/*
Renderiza a lista de filmes na tela
*/

window.onload = ()=>{
   renderizarLista()
}

/*
Função para renderizar filmes na tela
*/


const renderizarLista = () =>{
    //limpa a tela antes de renderizar
    listaFilmes.innerHTML = ""
    //percorre o array de filmes, inserindo um li com o nome do filme a cada volta do loop
    filmes.forEach((filme)=>{
        const itemLista = document.createElement('li')
        //adiciona o li à lista de filmes
        listaFilmes.append(itemLista)
        //adiciona o filme que o usuário digitou à lista
        itemLista.innerHTML = `Meu filme ${filme.nome}`
        //cria uma nova imagem
        const favorito = document.createElement('img')
        //adiciona imagem ao item img
        favorito.src = 'img/heart.svg'
        //muda o cursor da imagem para mãozinha de clique
        favorito.style.cursor = 'pointer'
        //adiciona evento de clique à imagem
        favorito.addEventListener('click',(e)=>{
            localStorage.setItem('nome',filme.nome)
        })
        //adiciona a imagem ao item da lista
        itemLista.append(favorito)
    })
}

/*
Adiciona o evento de clique ao botão 
*/

btn1.addEventListener('click',()=>{
    //pega o input onde o usuário digita o filme
    const inputUsuario = document.querySelector('#filmeInput')
    //adiciona o valor à propriedade nome do objeto dentro do array filmes
    filmes.push({nome: inputUsuario.value, genero: '', lancamento: ''})
    //renderiza a lista novamente
    renderizarLista()
    //apaga o campo de digitação
    inputUsuario.value = ''
})

/*
Existem outras ações para manipular o DOM como:
itemLista.classList.add('nome-da-classe') => Adiciona uma classe
itemLista.style.backgroundColor = 'red' => Muda a cor do fundo para vermelho
itemLista.classList.remove('nome-da-classe') => Remove uma classe
itemLista.classList.toggle('nome-da-classe') => liga/desliga uma classe
*/