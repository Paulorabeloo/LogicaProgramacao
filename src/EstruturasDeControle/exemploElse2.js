// se tiver ovos traz leite para fazer um bolo, se não traz uma lasanha.

let possuiOvos = false
let itensComprados = ""

if(possuiOvos) //se verdadeiro comprar leite
{
	itensComprados = "Leite"
}
else  // se não comprar lasanha congelada
{
	console.log("passou na sessão de congelados")
    itensComprados = "Lasanha Congelada"
}


console.log("Item comprado: " + itensComprados)