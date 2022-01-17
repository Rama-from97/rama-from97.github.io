let URL_cart = 'https://61e466b91a976f00176ee47e.mockapi.io/cart/' 

async function getCartService() {
    let cart = await get(URL_cart)
    return cart
}
async function postCartService(product) {
    let savedCart = await post(URL_cart, product)
    return savedCart
}
async function updateCartService(id, product) {
    let updatedCart = await put(URL_cart, id, product)
    return updatedCart
}
async function deleteCartService(id) {
    let deletedCart = await del(URL_cart, id)
    return deletedCart
}