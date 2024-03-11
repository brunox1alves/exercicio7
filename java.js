
  // Array para armazenar informações dos produtos (Objects)
  var listaProdutos = [];

  // Função para adicionar um produto à lista
  function adicionarProduto() {
    // Solicitar informações do produto
    var nomeProduto = prompt("Digite o nome do produto ('fim' para encerrar):");

    // Verificar se o usuário quer encerrar
    if (nomeProduto.toLowerCase() === "fim") {
      exibirListaOrdenada();
      return;
    }

    // Verificar se o nome do produto não contém números
    if (/\d/.test(nomeProduto)) {
      alert("Erro: O nome do produto não pode conter números.");
      adicionarProduto();
      return;
    }

    var precoUnitario = prompt("Digite o preço unitário do produto:");

    // Verificar se o preço unitário é um número
    if (isNaN(precoUnitario) || precoUnitario.trim() === "") {
      alert("Erro: O preço unitário deve ser um número válido.");
      adicionarProduto();
      return;
    }

    var quantidade = prompt("Digite a quantidade do produto:");

    // Verificar se a quantidade é um número
    if (isNaN(quantidade) || quantidade.trim() === "") {
      alert("Erro: A quantidade deve ser um número válido.");
      adicionarProduto();
      return;
    }

    // Adicionar informações do produto ao array
    listaProdutos.push({
      nome: nomeProduto,
      preco: parseFloat(precoUnitario),
      quantidade: parseInt(quantidade)
    });

    // Chamar recursivamente a função para adicionar mais produtos
    adicionarProduto();
  }

  // Função para exibir a lista de produtos em ordem alfabética
  function exibirListaOrdenada() {
    // Ordenar a lista de produtos pelo nome
    listaProdutos.sort(function(a, b) {
      return a.nome.localeCompare(b.nome);
    });

    // Exibir a lista
    alert("Lista de Produtos em Ordem Alfabética:\n\n" + listaProdutos.map(function(produto) {
      return "Produto: " + produto.nome +
             "\nQuantidade: " + produto.quantidade +
             "\nPreço Unitário: R$" + produto.preco.toFixed(2) +
             "\nSubtotal: R$" + (produto.preco * produto.quantidade).toFixed(2) +
             "\n\n";
    }).join(''));

    // Limpar a lista após exibição
    listaProdutos = [];
  }

  // Chamar a função para adicionar produtos quando a página estiver carregada
  window.onload = adicionarProduto;

