// se tiver ovos traz leite para fazer um bolo, se não traz uma lasanha.

let possuiOvos = false
let itensComprados = ""

if(possuiOvos)
{
	itensComprados = "Leite"
}
else
{
	console.log("passou na sessão de congelados")
    itensComprados = "Lasanha Congelada"
}


console.log("Item comprado: " + itensComprados)