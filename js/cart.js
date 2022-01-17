/*----------------------------------------------------------------
                            Cart
----------------------------------------------------------------*/

//          bindings

let cartDiv = document.querySelector('#cart')
let cartBtn = document.querySelectorAll('.search-bar__carrito-container')[0]

//          Events

cartBtn.addEventListener('click', e =>{
    e.preventDefault()
    cartDiv.classList.toggle ('none')
    console.log('click')
})

//          Functions


