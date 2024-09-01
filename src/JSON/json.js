//JSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados
let invoice = {
	name: "felipe",
    age: 28,
    //lista de produtos
    products: {
    	0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", "899.99"],
        3: ["TV 100 polegadas", "10000.90"]
    },
    taxes: "98.90"
}
// fica melhor para agrupar dados

generateInvoice(invoice)

function generateInvoice(invoice){
	console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("------------")

    // como tem uma lista tem que percorrer ela, usando um for in (proprio para percorrer objetos) / nao precisa falar o valor inicial do contador -> percorre quantos itens tiver dentro
    for(let index in invoice.products){
        // processo de desestruturação
    	let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
    
    
}