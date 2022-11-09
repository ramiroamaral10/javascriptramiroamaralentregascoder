//consula de edad
let edadcliente= parseInt(prompt("Ingrese su edad para entrar al cine"))

if (edadcliente >= 18){
    console.log("Puedes entrar al cine");
    //llamo funcion del catalogo de entradas
    catalogoDeEntradas();
}
else{
    alert("No pudes entrar al cine, eres menor de edad")
    console.log("No pudes entrar al cine, eres menor de edad")

}


//funcion de opciones del catologo de entradas
function catalogoDeEntradas(){
    
    //arrays y objetos, hay una array con objetos adentro
    const peliculas = [
        {nombre: "Pirates del caribes",},
        {nombre: "Catch me if you can"},
        {nombre: "El plan perfecto"},
    ]
    alert("Bienvenido a life cinemas")
    let opciones= prompt(`Elige el catalogo de peliculas: \n1 - ${peliculas[0].nombre} 1 \n2 -${peliculas[1].nombre} \n3 - ${peliculas[2].nombre}`);
    
    

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
    comprar();
    preguntasdelQuiz(opciones);
    
    
    
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
            //si no esta dispuesto a pagar la entrada entonces que la funcion preguntasdelquiz sea false y no se ejecute
            preguntasdelQuiz = false;
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

    




//si la variable opciones de mas arriba que es la pelicula que eligieron, coincide con la posicion 0 de la array que defini mas arriba que tiene objetos de la lista de peliculas a elegir... que me pregunte la siguente pregunta, y si le erra para poder salir del cine sale un alert que dice que tiene que pagar multa
function preguntasdelQuiz(opciones){
    alert("para salir del cine tienes que hacer un quiz");
    //array de lista de objetos de respuestas
    const listaderespuestas = [
        {respuesta1: "a",},
        {respuesta2: "b"},
        {respuesta3: "c"},
    ]
    
if(opciones == "1"){
    
    let preguntaQuiz = prompt(`Pregunta : quien es el actor principal de la pelicula? \n1- Brad Pitt ${listaderespuestas[0].respuesta1} \n2-Jonny Deep ${listaderespuestas[1].respuesta2} \n3-Orlando Blum ${listaderespuestas[2].respuesta3} \n responde con a,b o c`);

    if(preguntaQuiz == `${listaderespuestas[1].respuesta2}`){
        alert("tu respuesta es correcta puedes salir del cine");
        console.log("respuesta correcta puedes salir del cine");
        }else{ alert("No puedes salir del cine tiene que pagar $100")
    }
}
//si la variable opciones de mas arriba que es la pelicula que eligieron, coincide con la posicion 1 de la array que defini mas arriba que tiene objetos de la lista de peliculas a elegir... que me pregunte la siguente pregunta, y si le erra para poder salir del cine sale un alert que dice que tiene que pagar multa
if(opciones == "2"){
    let preguntaQuiz1 = prompt(`Pregunta: donde termina trabajando el actor principal? \n1- En la policia ${listaderespuestas[0].respuesta1} \n2-En una tienda de ropa ${listaderespuestas[1].respuesta2} \n3-En un avion ${listaderespuestas[2].respuesta3} \n responde con a,b o c`);
    
    if(preguntaQuiz1 == `${listaderespuestas[0].respuesta1}`){
        alert("tu respuesta es correcta puedes salir del cine");
        console.log("respuesta correcta puedes salir del cine");
        }else{ alert("No puedes salir del cine tiene que pagar $100")
    }
}
//si la variable opciones de mas arriba que es la pelicula que eligieron, coincide con la posicion 2 de la array que defini mas arriba que tiene objetos de la lista de peliculas a elegir... que me pregunte la siguente pregunta, y si le erra para poder salir del cine sale un alert que dice que tiene que pagar multa
if(opciones == "3"){
    let preguntaQuiz2 = prompt(`Pregunta: Como logra escapar el ultimo ladron \n1- No logra escapar ${listaderespuestas[0].respuesta1} \n2-Por el techo ${listaderespuestas[1].respuesta2} \n3-Por la puerta ${listaderespuestas[2].respuesta3} \n responde con a,b o c`);
        
    if(preguntaQuiz2 == `${listaderespuestas[2].respuesta3}`){
        alert("tu respuesta es correcta puedes salir del cine");
        console.log("respuesta correcta puedes salir del cine");
        }else{ alert("No puedes salir del cine tiene que pagar $100")
    }
}

}
