//consula de edad
let edadcliente= parseInt(prompt("Ingrese su edad para entrar al cine"))

if (edadcliente > 18){
    console.log("Puedes entrar al cine");
    catalogoDeEntradas();
}
else{
    console.log("No pudes entrar al cine, eres menor de edad")

}



function catalogoDeEntradas(){
    alert("Bienvenido a life cinemas")

    let opciones= prompt("Elige el catalogo de peliculas: \n1 - Piratas del caribe 1 \n2 -Catch me if you can \n3 - El plan perfecto");
    
    switch (opciones){
        case "1":
            console.log("Elegiste Piratas del caribe");
            break;
        case "2":
            console.log("Elegiste Catch me if you can");
            break;
        case "3":
            console.log("Elegiste El plan perfecto");
            break;
    }
    // el precio de la pelicula es 
    alert("El precio de la entrada es de 200 pesos");
    comprar()

}
function comprar(){
    let pagar = true;
    while(pagar){
        let preguntacompra = prompt("Estas dispuesto a pagar la entrada? responde con si o no");
        if(preguntacompra == "si"){
            let cantidad =parseInt(prompt("cuantas desea comprar?"))
            alert ("pago realizado, Disfrute la pelicula");
            console.log("El costo final de las entradas es de $" + (cantidad*200) + " \npago realizado, Disfrute la pelicula")
            pagar = false;
            let opcionesCombos = parseInt(prompt("Elige combo de pop y gaseosa \n1- pop y coca grande \n2 - pop y coca mediano"))
            ofrescoCombos(opcionesCombos)



        }
        else {
            pagar = false
        alert("que tengas un buen dia");
        }
    }
}
function ofrescoCombos(opcionesCombos){ 
    switch (opcionesCombos){
        case 1:
            console.log("Elegiste combo mediano")
            break;
        case 2:
            console.log("Elegiste combo grande")
            
    }
}
