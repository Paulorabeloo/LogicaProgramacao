//estrutura de decisão
//switch/case/break/default
let fruta = "banana"

// vai testar a variavel fruta
switch (fruta) // escolha um caso
{
	case "laranja": //caso seja laranja execute
    console.log("suco de laranja")
    break 
    
    case "banana": //caso seja banana ou morango execute
    case "morango":
    console.log("vitamina de " + fruta)
    break // para de executar -> se não tiver o break ele continua 
    
    case "maça": //caso seja maça execute
    console.log("suco de maça")
    break

    default: //se não for nenhum dos outros executa default (mensagem genérica) / igual ao else
    console.log("suco genérico")
    // não é obrigatório ter default
}
