let cart = []

/*----------------------------------------------------------------
                            Cart
----------------------------------------------------------------*/

//          bindings


let cartDiv = document.querySelector('#cart')
let cartBtn = document.querySelectorAll('.search-bar__carrito-container')[0]
let cartCloseBtn = document.querySelectorAll('.cart-content__close')[0]
let cartBuyBtn = document.querySelectorAll('.cart-content__buy-btn')[0]
let cartItems = document.querySelectorAll('.cart-content__items')[0]

//          Events

cartCloseBtn.addEventListener('click', () => {
    cartDiv.classList.toggle ('none')
})

cartBtn.addEventListener('click', e =>{
    e.preventDefault()
    cartDiv.classList.toggle ('none')
})
cartBuyBtn.addEventListener('click', () => {
    if(cart.length > 0){
        postCart()
        cart = []
        saveCart()
        cartItems.innerHTML = '<h3> ¡Muchas gracias por su compra!</h3>'
        setTimeout( () => {
            getCartItems()
            cartDiv.classList.add ('none')
        }, 2000
        )
    }
})


//          Functions

function getCartItems () {
    let xhrCart = ajax ('/templates/cart.hbs')
    xhrCart.addEventListener('load',() => {
        if(xhrCart.status == 200) {
            const template = Handlebars.compile(xhrCart.response)
            cartItems.innerHTML = template({cart})
        }
    })
}

function addItemToCart (card) { 
    let index = cart.findIndex(item => item.id == card.id)
    console.log(index)
    if (index >= 0) {
        cart[index].amount += 1
        console.log('added 1')
    } else {
        let newProduct = {
            "id": card.id,
            "amount": 1,
            "name": card.name,
            "price": card.price,
        }
        console.log(newProduct)
        cart.push(newProduct)
    }
    saveCart()
    getCartItems()
}

