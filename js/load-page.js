var promoArray = [
    {
        "temporada" :  "halloween",
        "color": "orange",
        "lista_peliculas" : [
            {
                "img-prod": "../img/productos/SEVILLANO-NEGRO-PRINCIPAL.jpg",
                "title-prod": "SEVILLANO WALTON",
                "desc-prod": "Sombrero 100% en lana Walton (rígida), tafilete de vinyl y forro bordado TARDAN.",
                "price-prod": "$1,405.00",
            },
            {
                "img-prod": "../img/productos/SEVILLANO-NEGRO-PRINCIPAL.jpg",
                "title-prod": "SEVILLANO WALTON",
                "desc-prod": "Sombrero 100% en lana Walton (rígida), tafilete de vinyl y forro bordado TARDAN.",
                "price-prod": "$1,405.00",
            },
            {
                "img-prod": "../img/productos/SEVILLANO-NEGRO-PRINCIPAL.jpg",
                "title-prod": "SEVILLANO WALTON",
                "desc-prod": "Sombrero 100% en lana Walton (rígida), tafilete de vinyl y forro bordado TARDAN.",
                "price-prod": "$1,405.00",
            },

        ]
    },
    {
        "temporada":  "navidad",
        "color": "green",
        "lista_peliculas" : [

            {
                "img-prod": "../img/productos/SAFARI-MALLA.jpg",
                "title-prod": "SAFARI MALLA",
                "desc-prod": "Sombrero en gabardina de algodón con copa en malla de poliéster rígida para ventilar la cabeza en climas calurosos.",
                "price-prod": "$1,165.00",
            },
            {
                "img-prod": "../img/productos/SAFARI-MALLA.jpg",
                "title-prod": "SAFARI MALLA",
                "desc-prod": "Sombrero en gabardina de algodón con copa en malla de poliéster rígida para ventilar la cabeza en climas calurosos.",
                "price-prod": "$1,165.00",
            },

        ]
    }
]

$(function () {
    // var section = $('section#data-store').find("div#promos")
    // var rowData = section.find("div#show-data")
    // console.log(rowData);

    var newCard = '';
    var temporada = "navidad"
    
    $.each(promoArray, function (key, element) { 
        if (element.temporada === temporada){
            $("p#tempo").html(element.temporada)
            $("body").css("background-color", element.color)
            $.each(element.lista_peliculas, function (key, peli) {
                newCard += '<div class="col-sm-4">'
                newCard += '<div class="card">'
                newCard += `<img class="card-img-top" src=${peli["img-prod"]} alt="">`
                newCard += '<div class="card-body">'
                newCard += `<h3 class="card-title">${peli["title-prod"]}</h3>`
                newCard += `<h5 class="card-title">${peli["price-prod"]}</h5>`
                newCard += `<p class="card-text">${peli["desc-prod"]}</p>`
                newCard += '</div>'
                newCard += '</div>'
                newCard += '</div>'
                newCard += '</div>'
            })
            
        }

    });
    $('#show-data').append(newCard); 

    

})