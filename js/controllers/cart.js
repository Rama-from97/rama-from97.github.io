
async function deleteCartItem(id) {
    console.log(id)
    console.log('Item eliminado: ', id)
    let index = cart.findIndex(itemArray => itemArray.id == id)
    if (cart[index].amount > 1){
        cart[index].amount -= 1
    } else {
        cart.splice(index, 1)
    }
    saveCart()
    getCartItems()
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function loadCart() {
    if(localStorage.getItem('cart') != null){
        let content = JSON.parse(localStorage.getItem('cart'))
        if (content != []) {
            cart = content
        }
    }
}

async function postCart() {
    let savedCart = await postCartService(cart)
}
