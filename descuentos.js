const precioOriginal = 100;
const descuento = 15;


function calcularPrecioDescuento(precio, descuento)
{
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento)/100;

    return precioConDescuento;
}


function onClickDiscountCalculator()
{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $"+precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     precioConDescuento,
// });