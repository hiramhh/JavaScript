

// const lista1 =  [
//     100,
//     400000000,
//     500,
//     200,
    
   
// ];

// function onClickButtonNuevoValor(){
//     const inputValor = document.getElementById("InputValor");
//     const entradaValor = lista1.push(inputValor.value);
// }

// function obj = Object.assign({}, lista1); 
function calculoMedianaAritmetica(lista){

    function calcularMediaAritmetica(lista){

        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );
    
        const promedioLista = sumaLista /lista.length;
    
        return promedioLista;
    }

lista.sort(
    function (a,b){
        return a-b
    }
);

const mitadLista1 = parseInt(lista.length / 2);


function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista1 - 1];
    const elemento2 = lista[mitadLista1];


    const promedioElemnto1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemnto1y2;
} else {
    mediana = lista[mitadLista1];
}

return console.log(mediana);
}