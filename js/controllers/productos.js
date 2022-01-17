let allProducts = []

async function getProducts() {
    allProducts = await getProductsService()
}
async function saveProducts() {
    let product = readInputObject ()
    let savedProduct = await saveProductsService(product)
    allProducts.push(product)
    cleanForm()
    renderProducts()
}
async function updateProduct(id) {
    console.log('Producto actualizado: ', id)
    let product = readInputObject ()
    cleanForm()
    let updatedProduct = await updateProductService(id, product)
    let index = allProducts.findIndex(producto => producto.id == product.id)
    allProducts.splice(index, 1, product)
    renderProducts()
}
async function deleteProduct(id) {
    console.log('Producto eliminado: ', id)
    let product = readInputObject ()
    cleanForm()
    let deletedProduct = await deleteProductService(id, product)
    let index = allProducts.findIndex(producto => producto.id == product.id)
    allProducts.splice(index, 1)
    renderProducts()
}