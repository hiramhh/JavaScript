
function calcularPreciConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    // const precioConDescuento = calcularPreciConDescuento(priceValue, discountValue);

    // const resultP = document.getElementById("ResultP");

    // resultP.innerText = "El precio con descuento son: $" + precioConDescuento;


    const coupons = [
        {
            name: "Hot sale",
            discount: 15,
        },
        {
            name: "Buen fin",
            discount: 30,
        },
        {
            name: "Black friday",
            discount: 25,
        },
    ];

   const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon){
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if(!userCoupon){
        alert("el cupón " + couponValue + " no es válido");
    }
    else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPreciConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }
    
}