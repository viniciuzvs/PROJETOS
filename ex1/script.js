//cria a referência ao form e ao elemento h3 (onde será exebida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value) // obtém o conteudos do campo
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) *consumo // calcular o valor a ser pago
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`  // exibe a reesposta 

    e.preventDefault() // evita o envio do form

});