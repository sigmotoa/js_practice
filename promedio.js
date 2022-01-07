// const lista1 = [
//     100,
//     200,
//     300,
//     500,
//     700,
// ];





function mediaAritmetica(lista)
{

    let sumaLista = 0;

    for (elemento of lista)
    {
        sumaLista+=elemento;
    }
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

function otraMediaAritmetica(lista)
{
    const sumaLista = lista.reduce(
        function (valorPrevio = 0, nuevoValor){
            return valorPrevio+nuevoValor;
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}