document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const categoria = document.getElementById("categoria").value;
    const descricao = document.getElementById("descricao").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const data = document.getElementById("data").value;

    // Aqui você pode criar um objeto ou armazenar em um banco de dados (simulado por exemplo)
    console.log({ categoria, descricao, valor, data });
});

// Exemplo de cálculo para a tela de fluxo de caixa
function atualizarFluxoCaixa() {
    let totalPagar = 500; // Exemplo de valor
    let totalReceber = 1000; // Exemplo de valor

    document.getElementById("totalPagar").innerText = `R$ ${totalPagar.toFixed(2)}`;
    document.getElementById("totalReceber").innerText = `R$ ${totalReceber.toFixed(2)}`;
    document.getElementById("diferenca").innerText = `R$ ${(totalReceber - totalPagar).toFixed(2)}`;
}
atulizarfluxoCaixa();