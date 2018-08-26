var pintado = false;
var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");


function checkTable(letra){
    var tabla=$('#'+letra);
    var items=tabla.children('tbody').children('tr').find('img');
    console.log(items.length);
    res={
        valor:true,
        msj:'Exito!! Pasas al siguiente nivel'
    };
    if(items.length==4){
        items.each(function(){
            if($(this).attr('id')[0]!=letra){
                res.valor=false;
                res.msj='Ups, Algo esta tiene que ir del otro lado';
            }
        });
    }else{ res.valor=false;
            res.msj='Completa la Fila'}
    return res;
}


function comprobarN1J8(){
    console.log(checkTable('a').valor);
    console.log(checkTable('o').valor);
    if(checkTable('a').valor & checkTable('o').valor){
       sndOK.play();
        msj('--------------- Buen trabajo  -------------', res.msj, 'Cerrar')
        window.location.href = 'n1j7.html';
        } else {
            sndNO.play();
        msj('--------------- Te equivocaste!  -------------', res.msj, 'Cerrar');
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
