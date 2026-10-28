function calcularSubtotal(itens) {
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

//Teste
const itens = [
    {
    nome: "Camiseta",
    preco:50,
    quantidade:2  
},
{
    nome:"tenis",
    preco:150,
    quantidade:1
}
]
console.log("Subtotal:", calcularSubtotal(itens));
console.log("Quantidade de itens:", contarItens(itens));