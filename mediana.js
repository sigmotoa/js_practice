//const lista2 = [10,20,30,60,100,120,15,];




function mediana(listaMediana)
{
    const lista2 = listaMediana.sort(function(a, b){return a - b});
    function mediaAritmetica(lista)
    {
    const sumaLista = lista.reduce(
        function (valorPrevio = 0, nuevoValor){
            return valorPrevio+nuevoValor;
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
    }

    

    const mitadLista2 = parseInt(lista2.length/2);

    function esPar(numero){
        if(numero%2 === 0)
        {
            return true;
        }
        else{
            return false;
        }
    }

    let mediana;

    if (esPar(lista2.length))
    {
        const elem1 = lista2[mitadLista2];
        const elem2 = lista2[mitadLista2-1]

        mediana=mediaAritmetica([elem1,elem2]);
    }
    else
    {
        mediana = lista2[mitadLista2];
    }
    return mediana;
}