//Código para el cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadaro miden: " + ladoCuadrado +" cm");

function perimetroCuadrado (lado) {
    return lado*4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado +" cm");

function areaCuadrado (lado){
    return lado**2;
}
//console.log("El area del cuadrado es: " + areaCuadrado +" cm^2");
console.groupEnd();

//Código para el triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     +" cm, "
//     + ladoTriangulo2 
//     +" cm, "
//     + baseTriangulo 
//     +" cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: " + alturaTriangulo +" cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1+lado2+base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo+" cm");

function areaTriangulo (base, altura){
    return (base*altura)/2;
}
//console.log("El area del triangulo es: " + areaTriangulo+" cm^2");

console.groupEnd();

//Codigo de circulo
console.group("Circulos");

//Variables
//const radioCiruculo = 4;
//const diametroCirculo = radioCiruculo*2;
const PI = Math.PI; 

//perimetro

function diametroCirculo(radio){
    return Number(radio*2);
}

function perimetroCirculo(radio) {
    const diametro=diametroCirculo(radio);
    return Number(diametro*PI);
}
function areaCirculo(radio){
    return Number(radio**2)*PI;
}
console.groupEnd();

//Interactuando con HTML

function calculoPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);

}

function calculoAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);

}

function calculoPerimetroTriangulo(){
    const input1 = document.getElementById("InputL1triangulo");
    const val1 = Number(input1.value);
    const input2 = document.getElementById("InputL2triangulo");
    const val2 = Number(input2.value);
    const input3 = document.getElementById("InputbaseTriangulo");
    const val3 = Number(input3.value);

    const perimetro = perimetroTriangulo(val1,val2,val3);

    alert(perimetro);

}

function calculoAreaTriangulo(){
    const input1 = document.getElementById("Inputalturatriangulo");
    const val1 = Number(input1.value);

    const input2 = document.getElementById("InputbaseTriangulo");
    const val2 = Number(input2.value);

    const area = areaTriangulo(val2, val1);

    alert(area);

}

function calculoPerimetroCirculo(){
    const input1 = document.getElementById("InputRadio");
    const val1 = Number(input1.value);

    const perimetro = perimetroCirculo(val1);

    alert(perimetro);
}

function calculoAreaCirculo(){
    const input1 = document.getElementById("InputRadio");
    const val1 = Number(input1.value);

    const area = (areaCirculo(val1));

    alert(area);


}