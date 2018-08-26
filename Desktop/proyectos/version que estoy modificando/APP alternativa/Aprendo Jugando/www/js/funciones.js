
var cantImgE = 0;
var cantImgI = 0; //nivel 1 juego 3

function ingresar(val){
    var sndSelec = new Audio("sonidos/selec.wav");
    sndSelec.play();
    setTimeout(function(){
    window.location.href=val;
}, 300);}



function borrar(id) { var elem = document.getElementById(id); return elem.parentNode.removeChild(elem); }
/* ATENCION!!! NO eliminar la funcion msj porque hay algunos juegos que la siguen usando*/
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
    var sndSelec = new Audio("../sonidos/selec.wav");
    sndSelec.play();
    alertify.success("<img src='../img/tinisaliendo.png'> Saliendo del juego... ");
    setTimeout(function() {
                window.location.href = '../index.html';
            }, 1300);
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
    datoS = $("#s").data("valor");

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
  $('#s').click(function() {
        artyom.say(datoS)
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

      /*Nivel 1 juego 5*/
      $('#a3').click(function() {
        artyom.say("Ananá")
    });
      $('#i1').click(function() {
        artyom.say("Iman")
    });
      $('#a2').click(function() {
        artyom.say("Ala")
    });
      $('#e1').click(function() {
        artyom.say("Empanadas")
    });
      $('#e2').click(function() {
        artyom.say("Espejo")
    });
      $('#a1').click(function() {
        artyom.say("Anteojos")
    });
      $('#i2').click(function() {
        artyom.say("Indio")
    });

      /*Nivel 1 juego 6*/
      $('#a4').click(function() {
        artyom.say("Ala")
    });
      $('#o1').click(function() {
        artyom.say("Oreja")
    });
      $('#o2').click(function() {
        artyom.say("Ojo")
    });
      $('#a5').click(function() {
        artyom.say("Anillo")
    });
      $('#o3').click(function() {
        artyom.say("Oreja")
    });
      $('#a6').click(function() {
        artyom.say("Arania")
    });
      $('#o4').click(function() {
        artyom.say("Olla")
    });
      $('#a7').click(function() {
        artyom.say("Aro")
    });

      /*Nivel 1 juego 3 */
       $('#i4').click(function() {
        artyom.say("Iglesia")
    });
        $('#e4').click(function() {
        artyom.say("Elefante")
    });
        $('#e5').click(function() {
        artyom.say("Escoba")
    });
        $('#i5').click(function() {
        artyom.say("Indio")
    });
        $('#i6').click(function() {
        artyom.say("Isla")
    });
        $('#e6').click(function() {
        artyom.say("Escuela")
    });
        $('#i7').click(function() {
        artyom.say("Iman")
    });
        $('#e7').click(function() {
        artyom.say("Estante")
    });
        $('#Tini').click(function() {
        artyom.say("Necesito las imagenes que empiezan con la letra E")
    });
$('#Flopi').click(function() {
        artyom.say("Necesito las imagenes que empiezan con la letra I")
    });


}