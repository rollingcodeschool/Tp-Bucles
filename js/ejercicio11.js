// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

const primerNombre = prompt("Ingrese el primer nombre:");
const primerEdad = parseInt(prompt("Ingrese la edad:"));

const segundoNombre = prompt("Ingrese el segundo nombre:");
const segundoEdad = parseInt(prompt("Ingrese la edad:"));

const TercerNombre = prompt("Ingrese el tercer nombre:");
const TercerEdad = parseInt(prompt("Ingrese la edad:"));

//Función max() devuelve el mayor de los argumentos pasados.
const maximo = Math.max(primerEdad, segundoEdad, TercerEdad);

if (maximo == primerEdad) {
    document.writeln("El mayor es: " + primerNombre);
}else if (maximo == segundoEdad) {
    document.writeln("El mayor es: " + segundoNombre);
}else {
    document.writeln("El mayor es: " + TercerNombre);
}