function calcularSbtotal(itens) {
    let subtotal = 0;
    for(let i = 0; i < 2; i++){
        subtotal = subtotal + itens[i].preco * itens[i].quantidade; 
    }
    return subtotal;
}

function contarItens (itens){
    let total=0;
    for(let i = 0; i < 2; i++){
    total = total + itens[i].quantidade;
    }
    return total;
}
