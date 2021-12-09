/*----------------------------------------------------------------
                            CARDS
----------------------------------------------------------------*/

//          bindings


let cards = [
    {
        name:'Notebook lenovo',
        details:'4k 60 pulgadas',
        image: 'img/productos/notebook-lenovo.jpg',
        price: '$50.000'
    },{
        name:'Apple iphone 11 pro max',
        details:'4k 60 pulgadas',
        image: 'img/productos/apple-iphone-11-pro-max.jpg',
        price: '$50.000'
    },{
        name:'Camara canon',
        details:'4k 60 pulgadas',
        image: 'img/productos/camara-canon.jpg',
        price: '$50.000'
    },{
        name:'Auriculares sony',
        details:'4k 60 pulgadas',
        image: 'img/productos/auriculares-sony.jpg',
        price: '$50.000'
    },{
        name:'Parlante jbl',
        details:'4k 60 pulgadas',
        image: 'img/productos/parlante-jbl.jpg',
        price: '$50.000'
    },{
        name:'Google nest mini',
        details:'4k 60 pulgadas',
        image: 'img/productos/google-nest-mini.jpg',
        price: '$50.000'
    },{
        name:'Samsung galaxy s21 plus 5g',
        details:'4k 60 pulgadas',
        image: 'img/productos/samsung-galaxy-s21-plus-5g.jpg',
        price: '$50.000'
    },{
        name:'Drone dji',
        details:'4k 60 pulgadas',
        image: 'img/productos/drone-dji.jpg',
        price: '$50.000'
    },{        
        name:'Notebook lenovo',
        details:'4k 60 pulgadas',
        image: 'img/productos/notebook-lenovo.jpg',
        price: '$50.000'
    },{
        name:'Dji mavic 2 pro',
        details:'4k 60 pulgadas',
        image: 'img/productos/dji-mavic-2-pro.jpg',
        price: '$50.000'
    },{
        name:'Camara canon',
        details:'4k 60 pulgadas',
        image: 'img/productos/camara-canon.jpg',
        price: '$50.000'
    },{
        name:'Chromecast google',
        details:'4k 60 pulgadas',
        image: 'img/productos/chromecast-google.jpg',
        price: '$50.000'
    },{
        name:'Parlante jbl',
        details:'4k 60 pulgadas',
        image: 'img/productos/parlante-jbl.jpg',
        price: '$50.000'
    },{
        name:'Google nest mini',
        details:'4k 60 pulgadas',
        image: 'img/productos/google-nest-mini.jpg',
        price: '$50.000'
    },{
        name:'Televisor lg',
        details:'4k 60 pulgadas',
        image: 'img/productos/televisor-lg.jpg',
        price: '$50.000'
    },{
        name:'Drone dji',
        details:'4k 60 pulgadas',
        image: 'img/productos/drone-dji.jpg',
        price: '$50.000'
    }
]


//          functions

function addCards (location) {
    cards.forEach(card => {
        let xhrCard = ajax('templates/cards.hbs')
        xhrCard.addEventListener('load', () =>{
            if(xhrCard.status == 200) {
                cardTemplate = xhrCard.response
                const template = Handlebars.compile(cardTemplate)
                location.innerHTML += template(card)
            }
        })
    });
}