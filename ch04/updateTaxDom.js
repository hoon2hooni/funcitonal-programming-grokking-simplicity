
// const updateTaxDom = () =>{
//     setTaxDom(shippingCartTotal*0.1)
// }


const updateTaxDom = () =>{
    setTaxDom(calcTax(shippingCartTotal))
}

const setTaxDom = (tax) => {
    console.log(`tax is ${tax}`)
}

const calcTax = (price) => 0.1 * price
