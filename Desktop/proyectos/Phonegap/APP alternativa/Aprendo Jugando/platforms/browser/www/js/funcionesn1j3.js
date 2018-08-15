var pintado = false;
var selec;

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

function comprobarN1J8(){
    console.log(checkTable('e').valor);
    console.log(checkTable('i').valor);
    if(checkTable('e').valor & checkTable('i').valor){
       
        msj('--------------- Buen trabajo  -------------', res.msj, 'Cerrar')
         setTimeout(function() {
                window.location.href = '../html/n1j4.html'; //Pasa al siguiente juego
            }, 1100);
        } else {
        msj('--------------- Te equivocaste!  -------------', res.msj, 'Cerrar');
        }
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
