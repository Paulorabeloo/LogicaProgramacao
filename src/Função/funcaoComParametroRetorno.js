function getFirstName(name)
{
    let firstName = name.split(" ")[0] //split quebra o texto (função já existente) e joga dentro de um vetor, e quer a posiçao 0
    return firstName
}

let userName = getFirstName("Paulo Eduardo Rabelo")
console.log("Welcome " + userName)