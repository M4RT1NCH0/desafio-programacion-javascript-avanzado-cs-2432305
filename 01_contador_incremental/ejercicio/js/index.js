
// Escribir una función clousure que 
// aumente un contador en 1 cada vez que la función se llame


function getClousure(valor) {
    return () => valor +=1;
}

const contador = getClousure(0);

console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());