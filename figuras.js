// Código del cuadrado
console.group("Cuadrados");
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
// const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");


console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
// console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML

//Integración para área del Cuadrado
function calcularPerimetroCuadrado() {
  const inputCuad = document.getElementById("InputCuadrado");
  const valueCuad = inputCuad.value;

  const perimetroCuad = perimetroCuadrado(valueCuad);
  alert(perimetroCuad);
}
function calcularAreaCuadrado() {
  const inputCuad = document.getElementById("InputCuadrado");
  const valueCuad = inputCuad.value;

  const areaCuad = areaCuadrado(valueCuad);
  alert(areaCuad);
}

//Integración para área del triangulo
function calcularPerimetroTriangulo() {
  const inputTriang1 = document.getElementById("InputTriangulo1");
  const inputTriang2 = document.getElementById("InputTriangulo2");
  const inputTriangB = document.getElementById("InputTrianguloB");
  const valueTriang2 = Number(inputTriang2.value);
  const valueTriang1 = Number(inputTriang1.value);
  const valueTriangB = Number(inputTriangB.value);

  const perimetroTriang = perimetroTriangulo(valueTriang1, valueTriang2, valueTriangB);
  alert(perimetroTriang);
}
function calcularAreaTriangulo() {
  const inputTriangA = document.getElementById("InputTrianguloA");
  const inputTriangB = document.getElementById("InputTrianguloB");
  const valueTriangA = Number(inputTriangA.value);
  const valueTriangB = Number(inputTriangB.value);

  const areaTriang = areaTriangulo(valueTriangB, valueTriangA);
  alert(areaTriang);
}

//Integración para área del Circulo
function calcularPerimetroCirculo() {
  const inputCirc = document.getElementById("InputCirculo");
  const valueCirc = inputCirc.value;

  const perimetroCirc = perimetroCirculo(valueCirc);
  alert(perimetroCirc);
}
function calcularAreaCirculo() {
  const inputCirc = document.getElementById("InputCirculo");
  const valueCirc = inputCirc.value;

  const areaCirc = areaCirculo(valueCirc);
  alert(areaCirc);
}