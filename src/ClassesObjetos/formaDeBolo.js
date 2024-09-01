//classe
class formaDeBolo {
    //metodo construtor -> função
    // aqui no método voce consegue dar propriedades
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa //Variavel
        this.saborRecheio = saborRecheio //variavel
    }
    // metodo escrever
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    // metodo assar
    assar(){
        console.log("bolo assando de " + this.saborDaMassa)
    }
    
}
//instanciando um objeto -> criando na memória um novo objeto com base na classe formaDeBolo
let boloFesta = new formaDeBolo("Chocolate", "Nutella")
let boloPremium = new formaDeBolo("Baunilha", "Pistache")

boloFesta.escrever()
boloPremium.escrever()

boloFesta.assar()
