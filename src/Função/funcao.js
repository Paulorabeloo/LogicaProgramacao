function torrar() //declaração da função
{
	console.log("torrando pão")
    injetarPao() // função dentrou de outra função
}

function injetarPao()
{
	console.log("preparando para injetar o pão")
    console.log("finalizado")
}

torrar() // chamando a função -> pode chamar várias vezes