function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista /lista.length;
    return promedioLista;
}

const lista1 =  [];



function onClickButtonMediana(){
    const inputMediana = document.getElementById("InputList");
    const medianaValue = lista1.push(inputMediana.value);
}

function comparacion (a, b){
    return a - b;
}

function onClickButtonOrdenar(){
    lista1.sort(comparacion);
    return console.log(lista1);
}


function onClickButtonCalculo(){

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}


let mediana;


if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;
} else{
    mediana = lista1[mitadLista1];
}

const resultP = document.getElementById("mediaP");
resultP.innerText = "La mediana de la lista es: " + mediana;
}