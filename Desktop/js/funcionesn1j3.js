var pintado = false;
var selec;
var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");

function checkTable(letra) {
    var tabla = $('#' + letra);
    var items = tabla.children('tbody').children('tr').find('img');
    console.log(items.length);
    res = {
        valor: true,
        msj: 'Buen trabajo! Pasas al siguiente nivel.'
    };
    if (items.length == 4) {
        items.each(function() {
            if ($(this).attr('id')[0] != letra) {
                res.valor = false;
                res.msj = 'Ups, Algo esta tiene que ir del otro lado';
            }
        });
    } else {
        res.valor = false;
        res.msj = 'Te falta completar alguna fila'
    }
    return res;
}

/*Cartelito*/

function confirmar(s) {
    sndOK.play();
    alertify.confirm("<img src='../img/feliz.jpg'> <h1><b>&iexcl; EXCELENTE ! <br>&iexcl; SIGAMOS JUGANDO ! </b></h1>", function(e) {
        if (e) {
            alertify.success("ELEGISTE '" + alertify.labels.ok + "'");
            setTimeout(function() {
                window.location.href = s + '.html'; //Pasa al siguiente juego
            }, 1300);
        } else {
            alertify.error("ELEGISTE '" + alertify.labels.cancel + "'");
            confirmSalida();
        }
    });
    return false
}

function alerta() {
    sndNO.play();
    alertify.alert("<img src='../img/triste.jpg'> <h1><b> &iexcl; TE EQUIVOCASTE! <br> &iexcl; INTENTALO DE NUEVO ! </b></h1>", function() {
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

function comprobarN1J8(s) {
    console.log(checkTable('e').valor);
    console.log(checkTable('i').valor);
    if (checkTable('e').valor & checkTable('i').valor) {
        confirmar(s);
    } else {
        alerta();
    }
}