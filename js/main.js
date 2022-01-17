/*----------------------------------------------------------------
                            AJAX
----------------------------------------------------------------*/

//        functions


function getFileRoute(id) {
    return 'templates/' + (id) + '.html'
}


/*----------------------------------------------------------------
                        SPA / NAV LINKS
----------------------------------------------------------------*/

//          bindings

const navLinks = document.querySelectorAll('nav a')
const elemMain = document.querySelector ('main')
const cardArea = document.createElement('div')
cardArea.classList.add ("cards-container")

//          functions

/* cambia el contenido en base al hash actual */


function getTemplate() {
    let id = location.hash.slice(1) || 'home'
    let file = getFileRoute(id)
    let xhrLocation = ajax(file)
    xhrLocation.addEventListener('load', async () => {
        if (xhrLocation.status == 200) {
            let template = xhrLocation.response
            elemMain.innerHTML = template
            if( id == 'home') {
                if (cardArea == '') {
                    addCards(cardArea)
                } else {
                    cardArea.innerHTML = ''
                    addCards(cardArea)
                }
                elemMain.appendChild(cardArea)
                docStateCards ()
            } else if (id == 'alta') {
                await loadProduct ()
                renderProducts()
            }
        }
    })
    
}

//          events

/* nombra el hash igual al id del elemento clickeado */
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault ()
        let id = link.id
        location.hash = id
    })
})

/* cada vez que cambie el hash por x razón, cambia el contenido */
window.addEventListener('hashchange', () => {
    resetLocalArrays ()
    getTemplate ()
})

function resetLocalArrays () {
    cardCarts = []
}

//          ejecutables

getCartItems()
getTemplate ()
loadCart()