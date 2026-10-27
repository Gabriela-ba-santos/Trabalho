
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
