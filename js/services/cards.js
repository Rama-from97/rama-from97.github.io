'use strict';

let URL_cards = 'https://61e466b91a976f00176ee47e.mockapi.io/cards/' 

async function getCardsService() {
    let cards = await get(URL_cards)
    return cards
}
async function saveCardService(product) {
    let savedCard = await post(URL_cards, product)
    return savedCard
}
async function updateCardService(id, product) {
    let updatedCard = await put(URL_cards, id, product)
    return updatedCard
}
async function deleteCardService(id) {
    let deletedCard = await del(URL_cards, id)
    return deletedCard
}