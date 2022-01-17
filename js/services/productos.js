
let URL_products = 'https://61e466b91a976f00176ee47e.mockapi.io/products/' 

async function getProductsService() {
    let productos = await get(URL_products)
    return productos
}
async function saveProductsService(product) {
    let savedProduct = await post(URL_products, product)
    return saveProducts
}
async function updateProductService(id, product) {
    let updatedProduct = await put(URL_products, id, product)
    return updateProduct
}
async function deleteProductService(id) {
    let deletedProduct = await del(URL_products, id)
    return deleteProduct
}