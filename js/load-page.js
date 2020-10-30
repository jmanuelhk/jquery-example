var promoArray = [
    {
        "img-prod":"../img/productos/SEVILLANO-NEGRO-PRINCIPAL.jpg",
        "title-prod":"SEVILLANO WALTON",
        "desc-prod":"Sombrero 100% en lana Walton (rígida), tafilete de vinyl y forro bordado TARDAN.",
        "price-prod":"$1,405.00",
    },
    {
        "img-prod":"../img/productos/SAFARI-MALLA.jpg",
        "title-prod":"SAFARI MALLA",
        "desc-prod":"Sombrero en gabardina de algodón con copa en malla de poliéster rígida para ventilar la cabeza en climas calurosos.",
        "price-prod":"$1,165.00",
    },
    {
        "img-prod":"../img/productos/PARIS-LANA-AZUL.jpg",
        "title-prod":"PARIS LANA GRANO",
        "desc-prod":"Boina clásica en lana cardada. Forro 100% acetato y cinta 100% poliéster. Diseño de palmita en azul.",
        "price-prod":"$575.00",
    },
]

$(function () {
    // var section = $('section#data-store').find("div#promos")
    // var rowData = section.find("div#show-data")
    // console.log(rowData);

    var newCard = '';
    
    $.each(promoArray, function (key, element) { 
        newCard +='<div class="col-sm-4">'
        newCard +='<div class="card">'
        newCard += `<img class="card-img-top" src=${element["img-prod"]} alt="">`
        newCard +='<div class="card-body">'
        newCard += `<h3 class="card-title">${element["title-prod"]}</h3>`
        newCard += `<h5 class="card-title">${element["price-prod"]}</h5>`
        newCard += `<p class="card-text">${element["desc-prod"]}</p>`
        newCard +='</div>'
        newCard +='</div>'
        newCard +='</div>'
        newCard +='</div>'

    });
    $('#show-data').append(newCard); 

    

})