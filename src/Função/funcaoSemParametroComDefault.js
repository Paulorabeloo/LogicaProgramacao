torrar("pão na chapa","Pedro", "10.30R$")

// nome e valor são valores default, se não passar os parametros ele coloca valores default.
function torrar(pao, nome = "Cliente", valor = 100){
	console.log("torrada feita com " + pao)
    console.log("ele é um pedido de " + nome)
    console.log("O valor total é " + valor)
}