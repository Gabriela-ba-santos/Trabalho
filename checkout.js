
function aplicarCupom(subtotal, codigo) {
    if (subtotal < 0) {
        return 0;
    }

    if (codigo === "DESC10") {
        return subtotal * 0.10;
    }

    if (codigo === "DESC20" && subtotal >= 200) {
        return subtotal * 0.20;
    }

    if (codigo === "FRETEGRATIS") {
        return 15;
    }

    return 0;
}
console.log("DESC10:", aplicarCupom(250, "DESC10"));
console.log("DESC20:", aplicarCupom(250, "DESC20"));

console.log("FRETEGRATIS:", aplicarCupom(250, "FRETEGRATIS"));


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
