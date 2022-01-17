let allCards = []

async function getCards() {
    allCards = await getCardsService()
}
async function saveCard(card) {
    let savedCard = await saveCardService(card)
    allCards.push(card)
}
async function updateCard(id) {
    console.log('Carta actualizado: ', id)
    let updatedCard = await updateCardService(id, card)
    let index = allCards.findIndex(carta => carta.id == card.id)
    allCards.splice(index, 1, card)
}
async function deleteProduct(id) {
    console.log('Carta eliminado: ', id)
    let deletedProduct = await deleteCardService(id, card)
    let index = allCards.findIndex(carta => carta.id == card.id)
    allCards.splice(index, 1)
}