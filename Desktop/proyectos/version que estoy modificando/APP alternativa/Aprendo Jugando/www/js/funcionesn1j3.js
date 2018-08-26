var pintado = false;
var selec;
var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");

function checkTable(letra){
    var tabla=$('#'+letra);
    var items=tabla.children('tbody').children('tr').find('img');
    console.log(items.length);
    res={
        valor:true,
        msj:'Buen trabajo! Pasas al siguiente nivel.'
    };
    if(items.length==4){
        items.each(function(){
            if($(this).attr('id')[0]!=letra){
                res.valor=false;
                res.msj='Ups, Algo esta tiene que ir del otro lado';
            }
        });
    }else{ res.valor=false;
            res.msj='Te falta completar alguna fila'}
    return res;
}

/*Cartelito*/

function confirmar(){
                sndOK.play();
                alertify.confirm("<img src='../img/feliz.jpg'> <p>Buen trabajo! <b>Acertaste!</b> <br> Seguimos jugando?", function (e) {
                    if (e) {
                        alertify.success("Has pulsado '" + alertify.labels.ok + "'");
                         setTimeout(function() {
                window.location.href = '../html/n1j4.html'; //Pasa al siguiente juego
            }, 1300);
                    } else { alertify.error("Has pulsado '" + alertify.labels.cancel + "'");
                    }
                }); 
                return false
            }

function alerta(){
      sndNO.play();
      alertify.alert("<img src='../img/triste.jpg'><b>Ups! Te equivocaste</b> Segui intentando!", function () {
            //aqui introducimos lo que haremos tras cerrar la alerta.
      });
}
function enmarcar(event) {
    selec = event.target;
    if (pintado == false) {
        selec.className += " cambiarBorde";
        pintado = true;
    } else {
        $('.cambiarBorde').removeClass("cambiarBorde");
        selec.className += " cambiarBorde";
    }
}

function comprobarN1J8(){
    console.log(checkTable('e').valor);
    console.log(checkTable('i').valor);
    if(checkTable('e').valor & checkTable('i').valor){
       confirmar();
        } 
        else {
        alerta();
}}


