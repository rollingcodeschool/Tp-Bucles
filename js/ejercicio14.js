// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
const cadena = prompt("Ingrese un texto:");

for (let i = 0; i < cadena.length; i++) {
    const caracter = cadena.charAt(i); //recupera el caracter i del string.
    if (i == cadena.length - 1) {
        document.writeln(caracter);
    } else {
        document.writeln(caracter + "-");
    }
}