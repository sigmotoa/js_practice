// const precioOriginal = 100;
// const descuento = 15;


const coupons = [
    {
        name: "cupon1",
        discount: 15,
    },
    {   
        name: "cupon2",
        discount: 20,
    },
    {   
        name: "cupon3",
        discount: 10,
    },
];


function calcularPrecioDescuento(precio, descuento)
{
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento)/100;

    return Number(precioConDescuento);
}


function onClickDiscountCalculator()
{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = Number(inputPrice.value);
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const isCouponValid = function (coupon)
    {
        return coupon.name === coupon.value;
    };

    const userCoupon = coupons.find(isCouponValid);

    const userCoupon = isCouponValid(discountValue);

    if (!userCoupon)
    {
        alert("El cupon " + discountValue + " no es valido");
    }
    else 
    {
        const descuento = Number(userCoupon.discount);

        const precioConDescuento = Number(calcularPrecioDescuento(Number(priceValue), Number(descuento)));

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es: $"+Number(precioConDescuento);
    }
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     precioConDescuento,
// });