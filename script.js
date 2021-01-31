document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#quante").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco() {
    const quante = document.querySelector("#quante").value
    //verifica se esta marcado preciso de um script se verdadeiro executa a fução
    const temJS = document.querySelector("#js").checked
    //verifica se esta marcado preciso de um layout se verdadeiro executa a fução
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    //preco por pagina é igual a 100 
    let preco = quante * 100;
    //se preciso de um script for verdadeiro acrescenta 10% ao preco da pagina
    if (temJS) preco *= 1.1
    //se preciso de um layout verdadeiro acrescenta 500 reais ao preco da pagina
    if (incluiLayout) {
        preco = preco + 500
    }
    let taxaUrgencia = 1 - prazo * 0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}
