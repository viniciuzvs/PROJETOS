
// Cria a referência aos elementos de entrada e saída
const form = document.querySelector("form");
const outResp1 = document.querySelector("#outResp1");
const outResp2 = document.querySelector("#outResp2");
const outResp3 = document.querySelector("#outResp3");

// Adiciona um ouvinte de evento para o evento "submit" do formulário
form.addEventListener("submit", function(event) {
    // Evita o envio do formulário
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const medicamento = document.querySelector("#inMedicamento").value;
    const preco = parseFloat(document.querySelector("#inPreco").value);

    // Calcula o valor da promoção (levando 2 produtos com 10% de desconto)
    const valorDesconto = preco * 0.1 * 2; // 10% de desconto em cada produto, multiplicado por 2

    // Exibe as respostas nos elementos de saída
    outResp1.textContent = `Promoção de ${medicamento}`;
    outResp2.textContent = `Preço original (2 produtos): R$ ${(preco * 2).toFixed(2)}`;
    outResp3.textContent = `Preço com desconto de 10%: R$ ${(preco * 2 - valorDesconto).toFixed(2)}`;
});