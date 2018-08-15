
var selec;
var cantImgE = 0;
var cantImgI = 0; //nivel 1 juego 3


function borrar(id) { var elem = document.getElementById(id); return elem.parentNode.removeChild(elem); }

function msj(titulo, contenido, idioma) {
    var padre = document.createElement('div');
    padre.id = 'modal';
    document.body.appendChild(padre);
    var bc = idioma ? idioma : 'Aceptar';
    var ModalData = document.getElementById("modal");
    var boton = "";
    ModalData.innerHTML = '<div id="modal-back"></div><div class="modal"><div id="modal-c"><h3>' + titulo + '</h3><span id="mc">' + contenido + '</span><div id="buttons"><a id="mclose" href="#">' + bc + '</a>' + boton + '</div></div></div>';
    document.querySelector(".modal").style.height = document.getElementById("mc").offsetHeight + 100 + 'px';
    document.getElementById('mclose').onclick = function() { borrar('modal'); };
    document.getElementById('modal-back').onclick = function() { borrar('modal'); }
}

function confirmSalida() {
    msj('--------------- Salir del juego  -------------', 'Saliendo del juego...', 'Cerrar');
    setTimeout(function() {
                window.location.href = '../index.html'; //Pasa al siguiente juego
            }, 1300);
}


/*Selecciona con color una imagen elegida, y comprueba que 
no haya otra seleccionada, en ese caso, la despinta, y pinta la nueva */
function enmarcarMas(event) {
    selec = event.target;
   var arreglo=[];
   var objecto={
       id:'i1',
       dato:'dato1'
   }
   var objecto2={
       id:'i2',
       dato:'dato2'
   }
   arreglo.push(objecto);
   arreglo.push(objecto2);
   console.log(arreglo[0].id)
}


//Nivel 1
//Juego 3
function enmarcar1(event) {
    imgSelec = event.target;
     if (pintado == false) {
        imgSelec.className += " cambiarBorde";
        pintado = true;
    } else {
        $('.cambiarBorde').removeClass("cambiarBorde");
        imgSelec.className += " cambiarBorde";
    }
    if(imgSelec.className.indexOf("I") == 10){
        letraSelec = "i";
        cantImgI++;
    }
    else {
        letraSelec = "e";
        cantImgE++;
    }
}

function comprobar4() {
//aca debe comprobarse si es correcto
    console.log(cantImgI);
    if (cantImgE == 2 && cantImgI == 2){
        
    }
    /*
        msj('--------------- Buen trabajo  -------------', 'Vas muy bien. Sigue asi!', 'Cerrar');
        window.location.href = '../html/n1j4.html';
    else {
        msj('--------------- Te equivocaste!  -------------', 'Segui intentando, vas muy bien!', 'Cerrar');
    } */
}




/* Mejorar...
function reproducirSonido(letra){
    id="#"+letra;
    dato=$(id).data("valor");
    $(id).click(function(){
        artyom.say(dato);
    });
};*/



function startArtyom() {
    artyom.initialize({
        lang: "es-ES",
        continuous: false, // Reconoce 1 solo comando y para de escuchar
        listen: true, // Iniciar !
        debug: true, // Muestra un informe en la consola
        speed: 1 // Habla normalmente
    });

    //Reproduce el sonido de la imagen

    datoA = $("#a").data("valor");
    datoE = $("#e").data("valor");
    datoI = $("#i").data("valor");
    datoM = $("#m").data("valor");
    datoO = $("#o").data("valor");
    datoU = $("#u").data("valor");
    datoP = $("#p").data("valor");

    $("#a").click(function() {
        artyom.say(datoA)
    });

    $('#e').click(function() {
        artyom.say(datoE)
    });

    $('#i').click(function() {
        artyom.say(datoI)
    });

    $('#m').click(function() {
        artyom.say(datoM)
    });

    $('#o').click(function() {
        artyom.say(datoO)
    });

    $('#u').click(function() {
        artyom.say(datoU)
    });

    $('#p').click(function() {
        artyom.say(datoP)
    });

    /* Nivel 1 juego 2 */

    $('#imgsonidon1j2').click(function(){
        artyom.say("Ayuda a Tini a elegir los dibujos que comienzan con la letra O")
    });



    /* Nivel 1 juego 3 */
    $('#arrastrable1').click(function() {
        artyom.say("indio")
    });

    $('#arrastrable2').click(function() {
        artyom.say("estrella")
    });

    $('#arrastrable3').click(function() {
        artyom.say("escoba")
    });

    $('#arrastrable4').click(function() {
        artyom.say("isla")
    });

      $('#imgsonido').click(function(){
        console.log($('#letra').text());
        artyom.say($('#letra').text());
    });

}