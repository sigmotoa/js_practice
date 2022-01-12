// Utils
function esPar(longitud)
{
    return (longitud % 2 === 0);
   
}

function calcularMediaAritmetica(lista)
{
    const sumaLista = lista.reduce(
        function (valorPrevio = 0, valorSiguiente)
        {
            return valorPrevio+valorSiguiente;
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

// Calculadora Medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);
    if(esPar(lista.length))
    {
        const personMitad1=lista[mitad-1];
        const personMitad2=lista[mitad];

        const mediana =calcularMediaAritmetica([personMitad1, personMitad2]);
        return mediana;
    }
    else
    {
        const personMitad = lista[mitad];
        return personMitad;
    }
}

const salariosCol = colombia.map(
    function (person){
        return person.salary;

});


const salarioisColSorted = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB;

    }
);





const medianaGralCol = medianaSalarios(salarioisColSorted);

// Mediana top 10
const spliceStart = (salarioisColSorted.length * 90)/100;
const spliceCount = salarioisColSorted.length - spliceStart;

const salariosColTop10 = salarioisColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGralCol,
    medianaTop10Col,
}
);