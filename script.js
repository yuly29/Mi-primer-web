//ejercicio 1: Funcion para calcular el precio con iva
function precioConIva(precio, iva){
return total = precio + (precio * iva / 100);
console.log("El precio total con IVA es: " + total);  
}

precioConIva(100,21);

// Ejercicio 2: Funcion para calcular el area y perimetro de un cuadrado

function areaPerimetroCuadrado(lado) {
let area = lado * lado;
let perimetro = 4 * lado;
console.log("el area del cuadrado es: " + area + " y el perimetro es : " + perimetro);

}
areaPerimetroCuadrado(10)

// Ejercicio 3: Escribir un programa que lea el nombre del usuario y salude con un "hola " seguido del nombre del usuario.

function Saludar (nombre) {
    nombre = prompt("Escribe tu nombre");
    console.log ("HOLA" + nombre);
}

Saludar  ("yuly");



// Ejercicio 4

function calcularMedia(){
    let num1 = parseInt(prompt("Ingrese el primer numero:"));
    let num2 = parseInt(prompt("Ingrese el segundo numero:"));
    let num3 = parseInt(prompt("ingrese el tercer numero:"));
    let media = (num1 + num2 + num3) / 3;
    console.log(`La media de ${num1}, ${num2} y ${num3} es: ${media}`);
}

calcularMedia();

