/*----------------------------------------------------------------
                            AJAX
----------------------------------------------------------------*/

//        functions

function ajax(url, method){
    let xhr = new XMLHttpRequest 
    xhr.open(method || 'get', url)
    xhr.send()
    
    return xhr
}

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
    xhrLocation.addEventListener('load', () => {
        if (xhrLocation.status == 200) {
            let template = xhrLocation.response
            elemMain.innerHTML = template
            if( id == 'home') {
                //check cards.js
                addCards(cardArea)
                elemMain.appendChild (cardArea)
            } else if (id == 'alta') {
                loadProduct ()
                renderProducts()
            }
        }
    })
}

getTemplate ()

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
    getTemplate ()
})