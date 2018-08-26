// Juego 1
var selec = null;
var letraSelec =  null;

function guardarValor() {
    $(".ui-widget-content").click(function(event) {
        selec = event.target;
        letraSelec = selec.id;
    })
}

function comprobar() {
    if (letraSelec == "i") { //primer actividad del juego
        msj('--------------- Muy bien !  -------------', 'Elegiste la opcion correcta, buen trabajo!', 'Cerrar');
        letraSelec = "a"; //
        $('.ocultar').removeClass("ocultar"); //oculta la primer actividad
        $("#mostrar").addClass("ocultar"); //muestra la 2da actividad
    } else {
        if (letraSelec == "a") {
            msj('--------------- Muy bien !  -------------', 'Buen trabajo ! ', 'Cerrar');

            setTimeout(function() {
                window.location.href = '../html/n2j2.html'; //Pasa al siguiente juego
            }, 1200);

        } else {
            msj('--------------- Te equivocaste!  -------------', 'Segui intentando, vas muy bien!', 'Cerrar');
        }
    }
}