let frutas = ["banana", "manzana", "naranja"];
let carnes = ["carne", "pollo", "cerdo"];
let galletas = ["oreos", "merengadas", "terrabusi"];
let lacteos = ["leche", "manteca", "queso"];

let buscador = prompt("Ingrese el producto que busca(frutas, carnes, galletas, lacteos)");

if(buscador == "frutas"){
    console.log(frutas)
} else if(buscador == "carnes"){
    console.log(carnes)
} else if(buscador == "galletas"){
    console.log(galletas)
} else if(buscador == "lacteos"){
    console.log(lacteos)
} else{
    console.log("Usted no ingreso una opcion valida")
}