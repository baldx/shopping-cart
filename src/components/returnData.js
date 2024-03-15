export const returnData = (product, amount) => {
    let obj = {
        product: product.title,
        price: product.price,
        amount: amount,
        image: product.image
    }

    console.log(obj);

    return obj;
}
