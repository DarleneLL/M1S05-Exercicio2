function consultarPreco(){
    let produto = document.getElementById('produto').value;
    // let preco = document.getElementById('preco');
    produto = produto.toLowerCase();
    switch (produto){
        case 'arroz':
            document.getElementById('preco').innerText = 'O valor do produto é R$' + 5.5;
            break;
        case 'feijão':
            document.getElementById('preco').innerText = 'O valor do produto é R$' + 10.0;
            break;
        case 'macarrão':
            document.getElementById('preco').innerText = 'O valor do produto é R$' + 2.5;
            break;
        default:
            alert('Produto não cadastrado')
    }
}

function comprarProduto(){
    let produto = document.getElementById('produto').value;
    if(produto==''){
        alert('Favor informar um produto')
    }else{
        alert('Produto incluído no carrinho')
    }
}