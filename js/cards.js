/*----------------------------------------------------------------
                            CARDS
----------------------------------------------------------------*/

//          Bindings

let cardCarts = []//, cardNames


//          Load Function

async function addCards (location) {
    await getCards()
    let xhrCard = ajax('templates/cards.hbs')
    xhrCard.addEventListener('load', () =>{
        if(xhrCard.status == 200) {
            const template = Handlebars.compile(xhrCard.response)
            location.innerHTML += template({allCards})
        }
    })
}

function cardListener() {
    cardCarts = document.querySelectorAll('.card__add-cart')
    // cardNames = document.querySelectorAll('.card__description p')
    console.log(cardCarts)
    for (let i = 0; i < cardCarts.length ; i++ ) {
        cardCarts[i].addEventListener('click', e => {
            e.preventDefault()
            console.log(allCards[i].id)
        })   
    }
}

function docStateCards () {
    let goal
    goal = cardCarts.length
    if(goal < 1 ) {
        setTimeout(async () => {
            await cardListener ()
            docStateCards ()
        },500
        )
    }
}
