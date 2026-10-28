
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
