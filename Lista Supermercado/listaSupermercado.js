// Objeto para armazenar os itens da lista de compras por categoria
const listaDeCompras = {
    laticinios: [],
    congelados: [],
    doces: [],
    outros: []
  };
  
  // Função para adicionar um item à lista de compras
  function adicionarOuDeletarItem() {
    const resposta = prompt("Deseja adicionar uma comida na lista de compras ou deletar algum item? (adicionar/deletar/não)");
  
    if (resposta.toLowerCase() === "adicionar") {
      adicionarItem();
    } else if (resposta.toLowerCase() === "deletar") {
      if (listaVazia()) {
        console.log("Não há itens na lista para deletar.");
        adicionarOuDeletarItem();
      } else {
        const itemDeletar = prompt("Lista de compras atual: " + imprimirLista() + "\nDigite o item que deseja deletar:");
        deletarItem(itemDeletar);
        adicionarOuDeletarItem();
      }
    } else if (resposta.toLowerCase() === "não") {
      console.log("Lista de compras atual: " + imprimirLista());
      adicionarOuDeletarItem();
    } else {
      console.log("Resposta inválida. Por favor, responda com 'adicionar', 'deletar' ou 'não'.");
      adicionarOuDeletarItem(); // Chama recursivamente para solicitar uma resposta válida
    }
  }
  
  // Função para adicionar um item à lista de compras
  function adicionarItem() {
    const comida = prompt("Digite o nome da comida que deseja inserir:");
    const categoria = prompt("Em qual categoria essa comida se encaixa? (laticínios/congelados/doces/outros)");
  
    if (categoria.toLowerCase() in listaDeCompras) {
      listaDeCompras[categoria.toLowerCase()].push(comida);
      adicionarOuDeletarItem(); // Chama recursivamente para adicionar mais itens
    } else {
      console.log("Categoria inválida. O item será adicionado à categoria 'outros'.");
      listaDeCompras.outros.push(comida);
      adicionarOuDeletarItem(); // Chama recursivamente para adicionar mais itens
    }
  }
  
  // Função para deletar um item da lista de compras
  function deletarItem(item) {
    for (let categoria in listaDeCompras) {
      const index = listaDeCompras[categoria].indexOf(item);
      if (index !== -1) {
        listaDeCompras[categoria].splice(index, 1);
        console.log(`O item '${item}' foi removido da lista de compras.`);
        return;
      }
    }
    console.log(`O item '${item}' não foi encontrado na lista de compras.`);
  }
  
  // Função para verificar se a lista de compras está vazia
  function listaVazia() {
    for (let categoria in listaDeCompras) {
      if (listaDeCompras[categoria].length > 0) {
        return false;
      }
    }
    return true;
  }
  
  // Função para imprimir a lista de compras agrupada
  function imprimirLista() {
    let todasAsComidas = "";
    for (let categoria in listaDeCompras) {
      todasAsComidas += categoria + ": " + listaDeCompras[categoria].join(", ") + "\n";
    }
    return todasAsComidas;
  }
  
  // Inicia o processo de adicionar ou deletar itens da lista de compras
  adicionarOuDeletarItem();
  