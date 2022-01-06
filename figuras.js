//Código para el cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadaro miden: " + ladoCuadrado +" cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado +" cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado +" cm^2");
console.groupEnd();

//Código para el triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    +" cm, "
    + ladoTriangulo2 
    +" cm, "
    + baseTriangulo 
    +" cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo +" cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo+" cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El area del triangulo es: " + areaTriangulo+" cm^2");

console.groupEnd();

//Codigo de circulo
console.group("Circulos");

//Variables
const radioCiruculo = 4;
const diametroCirculo = radioCiruculo*2;
const PI = Math.PI; 

//perimetro

const perimetroCirculo = diametroCirculo*PI;
const areaCirculo = (radioCiruculo**2)*PI;

console.log("El perimetro del circulo es: " + perimetroCirculo+" cm");
console.log("El area del circulo es: " + areaCirculo+" cm^2");

console.groupEnd();