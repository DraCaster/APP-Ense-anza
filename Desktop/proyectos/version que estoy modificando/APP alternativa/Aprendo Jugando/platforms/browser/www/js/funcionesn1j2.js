var pintado = false;
var letraActual="o";
var letraSelec = null;

function enmarcar(event) {
    selec = event.target;
    console.log(selec);
    if (pintado == false) {
        selec.className += " cambiarBorde2";
        pintado = true;
        letraSelec = selec.id;
    } else {
        $('.cambiarBorde2').removeClass("cambiarBorde2");
        selec.className += " cambiarBorde2";
        letraSelec = selec.id;
    }
}

function comprobar() {
    pintado = false;
    $('.cambiarBorde2').removeClass("cambiarBorde2"); //la imagen seleccionada se despinta

    if (letraSelec == letraActual) {
        msj('--------------- Buen trabajo  -------------', 'Vas muy bien. Sigue asi!', 'Cerrar')
       setTimeout(function() {
                window.location.href = '../html/n1j3.html'; //Pasa al siguiente juego
            }, 1300);
    } else {
        msj('--------------- Te equivocaste!  -------------', 'Segui intentando, vas bien!', 'Cerrar');
    }
}
