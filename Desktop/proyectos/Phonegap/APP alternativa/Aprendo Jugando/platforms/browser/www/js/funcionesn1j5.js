var pintado = false; // En el juego , si se selecciona una imagen esta var se pone en true
var letraSelec = null;
var level = 1; // Nivel del juego
var letraActual = "u";
var letraActual2="o";
var letraActual3="m";
var selec;

var arregloSeleccion=[];

/*Selecciona con color una imagen elegida, y comprueba que 
no haya otra seleccionada, en ese caso, la despinta, y pinta la nueva */
function enmarcarMas(event) {
    selec = event.target;
    console.log(selec);
   if(arregloSeleccion.length<=3){
    var objecto={
        id:selec.id,
        dato:$('#'+selec.id).data("valor")
    }
    if(estaEnArreglo(arregloSeleccion,objecto.dato)){
        eliminarDato(arregloSeleccion,objecto.dato)
        $('#'+selec.id).removeClass("zoom");
        $('#'+selec.id).removeClass("cambiarBorde");
    }else{
        if(arregloSeleccion.length<3){
            selec.className += " zoom";
            selec.className += " cambiarBorde";

            arregloSeleccion.push(objecto);
        }
    }
    console.log(arregloSeleccion);
}

}
function eliminarDato(arreglo, dato){
    arreglo.forEach(function (elemento, array) {
        if(elemento.dato==dato){
            arreglo.splice(arreglo.indexOf(elemento),1)
        }  
    });
}
function estaEnArreglo(arreglo, dato){
    res=false;
    arreglo.forEach(function (elemento, array) {
        if(elemento.dato==dato){
            res=true;
        }  
    });
    return res;
}
function comprobarJ5() {

    if (arregloSeleccion.length==3) {
        var res=true;
        arregloSeleccion.forEach(function (elemento, array) {
            if(elemento.dato[0]!='a'){
                res=false;
            }
        });
        if(res){
        level++;
        msj('--------------- Buen trabajo  -------------', 'Vas muy bien. Sigue asi!', 'Cerrar')
        setTimeout(function() {
                window.location.href = '../html/n1j6.html'; //Pasa al siguiente juego
            }, 1300);
        } else {
        msj('--------------- Te equivocaste!  -------------', 'Segui intentando, no te rindas!', 'Cerrar');
        }
    }else{
        msj('--------------- OPSS!  -------------', 'Elige 3 por favor.', 'Cerrar');
 
    }
}

