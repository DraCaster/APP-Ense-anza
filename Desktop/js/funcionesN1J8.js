var pintado = false;
var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");


function checkTable(letra) {
    var tabla = $('#' + letra);
    var items = tabla.children('tbody').children('tr').find('img');
    console.log(items.length);
    res = {
        valor: true,
        msj: 'Exito!! Pasas al siguiente nivel'
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
        res.msj = 'Completa la Fila'
    }
    return res;
}


function comprobarN1J8() {
    console.log(checkTable('a').valor);
    console.log(checkTable('o').valor);
    if (checkTable('a').valor & checkTable('o').valor) {
        sndOK.play();
        confirmar();
    } else {
        sndNO.play();
        alerta();
    }
}

function enmarcar(event) {
    selec = event.target;
    if (pintado == false) {
        selec.className += " cambiarBorde2";
        pintado = true;
    } else {
        $('.cambiarBorde2').removeClass("cambiarBorde2");
        selec.className += " cambiarBorde2";
    }
}

/*Cartelito*/

function confirmar() {
    sndOK.play();
    alertify.confirm("<img src='../img/feliz.jpg'> <h1><b>&iexcl; EXCELENTE ! <br>&iexcl; SIGAMOS JUGANDO ! </b></h1>", function(e) {
        if (e) {
            alertify.success("ELEGISTE '" + alertify.labels.ok + "'");
            setTimeout(function() {
                window.location.href = '../html/n1j7.html'; //Pasa al siguiente juego
            }, 1300);
        } else {
            alertify.error("ELEGISTE '" + alertify.labels.cancel + "'");
            confirmSalida();
        }
    });
    return false
}

function alerta() {
    //un alert
    sndNO.play();
    alertify.alert("<img src='../img/triste.jpg'> <h1><b> &iexcl; TE EQUIVOCASTE! <br> &iexcl; INTENTALO DE NUEVO ! </b></h1>", function() {
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

function ayuda() {
    jQuery.fn.tooltip = function() {
        xOffset = 10;
        yOffset = 0;
        this.each(function() {
            $(this).hover(function(e) {
                    // Cogemos el valor del tag "title"
                    this.t = this.title;
                    // Ponemos el tag "title" del html vacio para que el navegador no 
                    // muestre su tooltip estandard
                    this.title = "";
                    // Añadimos una p con el id="tooltip" para mostrar el texto
                    $("body").append("<p id='tooltip'>" + this.t + "</p>");
                    // Lo posicionamos cerca de la posición del ratón
                    $("#tooltip")
                        .css("top", (e.pageY + yOffset) + "px")
                        .css("left", (e.pageX + xOffset) + "px")
                        .fadeIn();
                },
                function() {
                    // Funcion que se ejecuta cuando el raton deja de pasar por encima

                    // Volvemos a poner el titulo en el codigo html
                    this.title = this.t;
                    // eliminamos el id tooltip que hemos añadido al pasar por encima
                    $("#tooltip").remove();
                });

            // Funcion que se ejecuta cuando nos movemos por encima
            // Posiciona el tooltip justo al lado del mouse
            $(this).mousemove(function(e) {
                $("#tooltip")
                    .css("top", (e.pageY + yOffset) + "px")
                    .css("left", (e.pageX + xOffset) + "px");
            });
        });
        return this;
    };

    $(document).ready(function() {
        $(".globoAyuda").tooltip();
    });
}