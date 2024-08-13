console.log("Script funcionando");

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function geraResultado(event ) {
    event.preventDefault();
    const num1 = parseInt(numero1.value)
    const num2 = parseInt(numero2.value)
    console.log(num1)
    console.log(num2)
    const resultado = soma(num1, num2)
    span.innerText = `O Resultado é = ${resultado} `
}

const numero1 = document.getElementById("inputNumero1")
const numero2 = document.getElementById("inputNumero2")

const span = document.getElementById("text-resultado")

