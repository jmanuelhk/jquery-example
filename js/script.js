
//jQuery.noConflict();


$(function (){
    console.log('el documento está preparado');
    //seleccion de parrafo
    $("#parrafo").text("HOLA MUNDO");

    //seleccion por clase y guardar selecciones
    var sel = $('div.myClass'); 
    console.log(sel)

    //comprobacion de selecciones.
    let encontrar = $('div.foo').length;
    if (encontrar) {
        console.log("te he pillado");
    }else{
        console.log("no lo he pillado");
    }

    //refinamiento de selecciones trabajando con selecciones 
    let ver = $('div.foo').has('p');
    console.log(ver);

    if(ver){
        $('div.foo').find("#editar").text("Me Actualice");
    }

    // $('button').click(function (){
    //     $('div#nuevo-parrafo')
    //         .html('<p>Nuevo <strong>primer</strong> párrafo</p>');
    //     })
    

    // var lista = $('#myList li:first').appendTo('#myList');
    $('#myList').append($('#myList li:first'));
    $('#myList li:first').clone().appendTo($('#myList'));

    $('#myList').find('li').eq(2).remove();

    var newElement = $('<p> nuevo parrafo </p>');

    newElement.appendTo('#nuevos-elementos');

    var newElement = $('<a/>', {
        html: 'Un <strong>nuevo</strong> enlace',
        'class': 'new',
        href: 'foo.html'
    });

    newElement.appendTo('#nuevos-elementos');

    $('button').click(function () {
        var div = $("div#css-edit");
        // h1.css({
        //     'fontSize':'+=15px',
        //     'paddingTop' : '+=20px',
        //     'color': 'green'
        // })
        // div.animate({ height: '300px', opacity: '0.4' }, "slow");
        // div.animate({ width: '300px', opacity: '0.8' }, "slow");
        // div.css({'background':'yellow'})
        // div.animate({ height: '100px', opacity: '0.4' }, "slow");
        // div.animate({ width: '100px', opacity: '0.8' }, "slow");
        div.animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    })

    $("img").attr({
        src: '../img/hat.gif',
        title: "jQuery",
        alt: "sombrero"
    });
    $("img").css({
        'height': '100px',
        'width': '100px'
    })

    var mostrarMU = '    varios espacios en blanco   ';
    console.log(mostrarMU);
    console.log($.trim(mostrarMU));
    // devuelve 'varios espacios en blanco'


    var myArray = ['foo', 'bar', 'baz', "sol"];

    $.each(myArray, function (idx, val) {
        console.log('elemento ' + idx + ' es ' + val);

        if(val === "baz"){
            console.log("te encontre "+val)
            return false;
        }
    });

    
    if ($.inArray("sol", myArray) !== -1) {
        
        console.log("te lo encontre");
        var h1 = $("h1#css-edit");
        h1.html("Te encontre")
        h1.css({
            'fontSize': '+=15px',
            'paddingTop': '+=20px',
            'color': 'green'
        })
    }else{
        var h1 = $("h1#css-edit");
        h1.html("No te encontre")
        h1.css({
            'fontSize': '+=15px',
            'paddingTop': '+=20px',
            'color': 'red'
        })
    }

    var myFunction = function () { console.log(this); };
    var myObject = { foo: 'bar' };

    myFunction(); // devuelve el objeto window

    var myProxyFunction = $.proxy(myFunction, myObject);
    myProxyFunction(); // devuelve el objeto myObject

    $("div").data("test", { first: 16, lasto: "pizza!" });

    $("span").first().text($("div").data("test").first);
    $("span").last().text($("div").data("test").lasto);

})
