//consula de edad
let edadcliente= parseInt(prompt("Ingrese su edad para entrar al cine"))

if (edadcliente >= 18){
    console.log("Puedes entrar al cine");
    //llamo funcion del catalogo de entradas
    catalogoDeEntradas();
}
else{
    console.log("No pudes entrar al cine, eres menor de edad")

}


//funcion de opciones del catologo de entradas
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
    //llamo funcion comprar
    comprar()

}
//funcion comprar sia pagar es true mientras que sea true ejecuta hasta que sea false
function comprar(){
    let pagar = true;
    while(pagar){
        let preguntacompra = prompt("Estas dispuesto a pagar la entrada? responde con si o no");
        if(preguntacompra == "si"){
            let cantidad = parseInt(prompt("cuantas desea comprar?"));
            alert ("pago realizado, Disfrute la pelicula");
            console.log("El costo final de las entradas es de $" + (cantidad*200) + " \npago realizado, Disfrute la pelicula");
            pagar = false;
            combos();



//sino pagar que es igual a faslse dame un alert y que se termine la funcion
        } else {
            pagar = false
        alert("que tengas un buen dia");
        }
    }
}

function combos(){
    let preguntaComboMediano = prompt("desea comprar un combo mediano?");
    if(preguntaComboMediano == "si"){
        console.log("buena eleccion");
        let precioYCantidadComboMediano = parseInt(prompt("el precio del combo es de $250, cuantos desea comprar?"));
        alert("el precio es de $" + (precioYCantidadComboMediano*250));
        console.log( "el precio es de $" + (precioYCantidadComboMediano * 250) );
    } else {
        alert("okey")
    }
    
    let preguntaComboGrande = prompt("desea comprar un combo grande?");
    if(preguntaComboGrande == "si"){
        let precioYCantidadComboGrande = parseInt(prompt("el precio del combo es de $300, cuantos desea comprar?"));
        alert("el precio es de $" + (precioYCantidadComboGrande*300));
        console.log( "el precio es de $" + (precioYCantidadComboGrande * 300));
    } else {
        alert("bien disfrute la pelicula")
    }
}


