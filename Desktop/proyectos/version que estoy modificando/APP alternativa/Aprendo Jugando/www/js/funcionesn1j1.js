var pintado = false; // En el juego , si se selecciona una imagen esta var se pone en true
var letraSelec = null;
var cantAct = 0;
var letraActual = "u";

/*Selecciona con color una imagen elegida, y comprueba que 
no haya otra seleccionada, en ese caso, la despinta, y pinta la nueva */
function enmarcar(event) {
    selec = event.target;
    if (pintado == false) {
        selec.className += " cambiarBorde";
        pintado = true;
        letraSelec = selec.id;
        cantAct=cantAct+1;
    } else {
        $('.cambiarBorde').removeClass("cambiarBorde");
        selec.className += " cambiarBorde";
        letraSelec = selec.id;
        cantAct=cantAct+2;
    }
}
var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");




/*Cartelito*/

function confirmar(){
                sndOK.play();
                alertify.confirm("<img src='../img/feliz.jpg'> <p>Buen trabajo! <b>Acertaste!</b> <br> Seguimos jugando?", function (e) {
                    if (e) {
                        alertify.success("Has pulsado '" + alertify.labels.ok + "'");
                         setTimeout(function() {
                window.location.href = '../html/n1j2.html'; //Pasa al siguiente juego
            }, 1300);
                    } else { alertify.error("Has pulsado '" + alertify.labels.cancel + "'");
                    }
                }); 
                return false
            }

function alerta(){
      //un alert
      sndNO.play();
      alertify.alert("<img src='../img/triste.jpg'><b>Ups! Te equivocaste</b> Segui intentando!", function () {
            //aqui introducimos lo que haremos tras cerrar la alerta.
      });
}

/* Verifica que la imagen seleccionada sea la correcta */
function comprobar() {
    pintado = false;
    $('.cambiarBorde').removeClass("cambiarBorde"); //la imagen seleccionada se despinta
    if (letraSelec == letraActual) {
        confirmar();
        
    } else {
        alerta();
    }
}

