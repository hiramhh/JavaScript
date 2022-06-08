// Código del cuadrado.
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Código del triángulo.

console.group("Triángulos");

function perimetroTriangulo( lado1, lado2, base){
    return lado1 + lado2 + base;
}


function areaTriangulo(base, altura){
    return  (base * altura) / 2;

}

console.groupEnd();


// Código del circulo.
console.group("Circulos");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd(); 



// Aquí interactuamos con las formulas del cuadrado y HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


//Aquí interactuamos con las formulas del triangulo y  HTML. 
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const lado_1 = parseInt(inputLado1.value);

    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const lado_2 = parseInt(inputLado2.value);

    const inputBase = document.getElementById("InputTrianguloBase");
    const base1 = parseInt(inputBase.value);


    if (lado_1 == lado_2 && lado_2 > base1){
        const perimetro = perimetroTriangulo(lado_1, lado_2, base1);
        const altura = Math.sqrt((lado_1** 2) - ((base1**2)/4));
        alert(perimetro + "\n La altura del triangulo es: " + altura);
    }

    else{
        alert("Datos no correctos para un tringulo isoceles");
    }
}