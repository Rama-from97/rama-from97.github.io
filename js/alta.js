/*----------------------------------------------------------------
                            ALTA
----------------------------------------------------------------*/

//          Bindings

let elemForm
let inputArray = []
let divErrorArray 
let elemTable
const regExpArray =[
    /^[A-ZÁÉÍÓÚa-záéíóú0-9., ]{5,40}$/ ,                                //Nombre Producto
    /^(([1-9][0-9]{3}([0-9]{1,2})?)|([1-9][0-9]{2}))$/ ,                //Precio
    /^(([1-9])|([1-9][0-9])|([1-9][0-9]{2}))$/,                         //Stock
    /^[A-ZÁÉÍÓÚa-záéíóú0-9., ]{2,20}$/ ,                                //Marca
    /^[a-z -]{2,15}$/ ,                                                 //Categoría
    /^((https:\/\/)|(http:\/\/)).+((\.jpg)|(\.png)|(\.jpeg)|(\.svg))$/, //Foto
    /^(.|\n){5,500}$/ ,                                                  //Detalles 
]
let allProducts = []


let allValidate = false

//          Functions

function loadProduct () {
    elemForm = document.querySelectorAll('.form--load')[0]
    
    for (let i = 0; i <= 7; i++){
        if(i == 4) {
            inputArray.push(document.querySelector('#product-category'))
        } else if(i == 5) {
            inputArray.push(document.querySelectorAll('.form--load input')[4])
        } else if (i == 6){
            inputArray.push(document.querySelector('#product-details'))
        } else if (i == 7){
            inputArray.push(document.querySelectorAll('.form--load input')[5])
        } else {
            inputArray.push(document.querySelectorAll('.form--load input')[i])
        }
    }
    
    divErrorArray = document.querySelectorAll('.input--error')

    elemTable = document.querySelector('#product--table')

    elemForm.addEventListener('submit', e => {
        e.preventDefault()
        checkValidations ()
        submitProduct ()
    })
}

//Quité el "required" de los input para que no haya que sacarlos para probar esta función  
function checkValidations () {
    for (let i = 0; i <(inputArray.length-1); i++) {
        if(regExpArray[i].test(inputArray[i].value)) {
            inputArray[i].validation = true
            inputArray[i].style.border = ''
            divErrorArray[i].style.display = 'none'
            allValidate = true
        } else {
            inputArray[i].validation = false
            inputArray[i].style.border = 'solid 1px red'
            divErrorArray[i].style.display = 'block'
            allValidate = false
            break
        }
    }
}

function submitProduct () {
    if ( allValidate === true) {
        let product = {
            name: inputArray[0].value,
            price: inputArray[1].value,
            stock: inputArray[2].value,
            brand: inputArray[3].value,
            category: inputArray[4].value,
            photo:inputArray[5].value,
            details: encodeURIComponent(inputArray[6].value),
            delivery: inputArray[7].checked,
        }

        allProducts.push(product)
        renderProducts()
    }
}

function renderProducts() {
    let xhrTable = ajax('templates/alta.hbs')
    xhrTable.addEventListener('load', () => {
        if(xhrTable.status == 200) {
            let templateHbs = xhrTable.response
            var template = Handlebars.compile(templateHbs);
            elemTable.innerHTML = template({allProducts })
        }
    })
}