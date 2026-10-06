function calcularSubtotal(itens) {
    let subtotal = 0;
    for(let i = 0; i < 1; i++){
        subtotal = subtotal + itens[i].preco * itens[i].quantidade; 
    }
    return subtotal;
}

function contarItens (itens){
    let total=0;
    for(let i = 0; i < 1; i++){
    total = total + itens[i].quantidade;
    }
    return total;
}

//Teste
const itens = [
    {
    nome: "Camiseta",
    preco:50,
    quantidade:2  
}
]
console.log("Subtotal:", calcularSubtotal(itens));
console.log("Quantidade de itens:", contarItens(itens));