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

/* Verifica que la imagen seleccionada sea la correcta */
function comprobar() {
    pintado = false;
    $('.cambiarBorde').removeClass("cambiarBorde"); //la imagen seleccionada se despinta
    if (letraSelec == letraActual) {
        msj('--------------- Buen trabajo  -------------', 'Lo hiciste muy bien. Sigue asi!', 'Cerrar')
        setTimeout(function() {
                window.location.href = '../html/n1j2.html'; //Pasa al siguiente juego
            }, 1100);
    } else {
        msj('--------------- Te equivocaste!  -------------', 'Segui intentando, vos podes!', 'Cerrar');
    }
}