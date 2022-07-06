// Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}

const salariosMx = mexico.map(
    function (personita) {
        return personita.salary;
    }
);

//Calculadora de mediana 

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);

        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


//mediana General
const salariosMxSorted = salariosMx.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista /lista.length;

    return promedioLista;
}




const medianaGeneralMx = medianaSalarios(salariosMxSorted);

// Mediana del top 10%


const spliceStart = (salariosMxSorted.length * 90) / 100;
const spliceCount = salariosMxSorted.length - spliceStart;
const salariosMxTop10 = salariosMxSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10 = medianaSalarios(salariosMxTop10);


console.log({
    medianaGeneralMx,
    medianaTop10,
});