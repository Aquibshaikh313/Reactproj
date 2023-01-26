//For Add item to cart
export function addCart(product)
{
    return{
        type: "ADDITEM",
        payload: product
    }
}

//For Delete item from Cart
export function delCart(product)
{
    return{
        type:"DELITEM",
        payload: product
    }
}