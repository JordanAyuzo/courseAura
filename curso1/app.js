// Declaraciion de variables
let rango = parseInt(prompt("Ingresa el rango de numeros con el que quieres jugar"));
// genera un numero aleatorio entre 1 y 10 con Math.random() * 10
let numeroSecreto = Math.floor(Math.random() * rango) + 1;
let numeroUsuario = 0;
let intentos= 1;
let maximoIntentos = parseInt( 5 *( rango / 10));

// Imprimir en consola

while (numeroUsuario != numeroSecreto ) {
    numeroUsuario = parseInt(prompt("Adivina el numero secreto entre 1 y " + rango));
    console.log(numeroUsuario);

    // Condicional para saber si el numero es igual al numero secreto
    if (numeroUsuario == numeroSecreto) {
        // la condicion se cumple
        alert(`Acertaste el numero ${numeroSecreto} en ${intentos} ${intentos> 1 ? "intentos" : "intento"}`);
    }else{
        // la condicion no se cumple
        if (numeroUsuario > numeroSecreto){
            // el numero es mayor al numero secreto
            alert(`El numero secreto es menor a ${numeroUsuario}`);

        }else{
            // el numero es menor al numero secreto
            alert(`El numero secreto es mayor a ${numeroUsuario}`);
        }
        if (intentos == maximoIntentos){
            // se acabaron los intentos
            alert(`Se acabaron los intentos, el numero secreto era ${numeroSecreto}`);
            break;
        }
    }
    intentos++;   
}
//Finalizacion del curso