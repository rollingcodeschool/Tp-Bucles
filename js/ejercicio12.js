// 12- Realiza un script que genere un número aleatorio entre 1 y 99

//FUNCIÓN Math.floor: redondea al número entero menor.
//FUNCIÓN Math.random: devuelve un número aleatorio mayor que 0 y menor que 1
const num = Math.floor(Math.random() * 99 + 1);
document.writeln(`Numero aleatorio: ${num}`);
