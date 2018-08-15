var pintado = false;
letraSelec = null;
letraActual = "m";

function show(){
    $('#flopi').click(function(){
    ayuda=$("#ayuda").removeClass();
});
}


function enmarcar(event) {
    selec = event.target;
    console.log(selec);
    if (pintado == false) {
        selec.className += " cambiarBorde"; 
        pintado = true;
        letraSelec = selec.id;
      
    } else {
        $('.cambiarBorde').removeClass("cambiarBorde");
        selec.className += " cambiarBorde";
        letraSelec = selec.id;
      
    }
}

function comprobar() {
    pintado = false;
    $('.cambiarBorde').removeClass("cambiarBorde"); //la imagen seleccionada se despinta

    if (letraSelec == letraActual) {
        msj('--------------- Buen trabajo  -------------', 'Vas muy bien. Sigue asi!', 'Cerrar')
        setTimeout(function() {
                window.location.href = '../html/n2j3.html'; //Pasa al siguiente juego
            }, 999);
    } else {
        msj('--------------- Te equivocaste!  -------------', 'Segui intentando!', 'Cerrar');
    }
}