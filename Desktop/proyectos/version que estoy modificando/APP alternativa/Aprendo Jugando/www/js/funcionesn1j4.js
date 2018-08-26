//nivel 1 juego 4
var cantImg = 0;
var cantImgIncorrectas = 0;
var sndOK = new Audio("..sonidos/error.wav");
var sndNO = new Audio("..sonidos/ganaste.wav");

function startArtyom() {
    artyom.initialize({
        lang: "es-ES",
        continuous: false, // Reconoce 1 solo comando y para de escuchar
        listen: true, // Iniciar !
        debug: true, // Muestra un informe en la consola
        speed: 1 // Habla normalmente
    });
    datoE = $("#e").data("valor");
    datoM = $("#m").data("valor");
    datoO = $("#o").data("valor");

    $('#e').click(function() {
        artyom.say(datoE)
    });
    $('#m').click(function() {
        artyom.say(datoM)
    });

    $('#o').click(function() {
        artyom.say(datoO)
    });

    $('#imgsonido1-4').click(function() {
        artyom.say("Cuales imagenes comienzan con el mismo sonido?")
    });

    $('#e1').click(function() {
        artyom.say("espada")
    });;

}

/*Nivel 1 juego 4*/

function enmarcar(event) {
    imgSelec = event.target;
    if (imgSelec.dataset.marca == "no"){ //si no se le hizo click
        imgSelec.dataset.marca = "si";
        if (imgSelec.id == "e" | imgSelec.id == "e1") { //si le hice click a una imagen que empieza con e
            cantImg++; //sumo la cantidad de imagenes con la e
        }
        else{
            cantImgIncorrectas++;
        }
    }
    else { //si se le hizo click anteriormente
        imgSelec.dataset.marca = "no"; //se desmarca
        if (imgSelec.id == "e" | imgSelec.id == "e1") {
            cantImg--; //se resta porque se deselecciono
        }
        else {
            cantImgIncorrectas--;
        }
    }
}

/*Cartelito*/

function confirmar(){
                sndOK.play();
                alertify.confirm("<img src='../img/feliz.jpg'> <p>Buen trabajo! <b>Acertaste!</b> <br> Seguimos jugando?", function (e) {
                    if (e) {
                        alertify.success("Has pulsado '" + alertify.labels.ok + "'");
                         setTimeout(function() {
                window.location.href = '../html/n1j5.html'; //Pasa al siguiente juego
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

function faltan(){
    sndNO.play();
      alertify.alert("<img src='../img/triste.jpg'><b>Ups! Faltan imagenes</b>", function () {
            //aqui introducimos lo que haremos tras cerrar la alerta.
      });
}

function ceroimg(){
    sndNO.play();
      alertify.alert("<img src='../img/triste.jpg'><b>No elegiste ninguna</b>", function () {
            //aqui introducimos lo que haremos tras cerrar la alerta.
      });
}

function comprobar(){
    console.log("entro al comprobar"); 
    if(cantImg == 2 & cantImgIncorrectas == 0){
    	confirmar();
    }else if (cantImg == 0 & cantImgIncorrectas == 0) {
        ceroimg();
    } else if(cantImg != 0 & cantImg < 2 & cantImgIncorrectas==0){
        faltan();
    }else{
        alerta();
    }
}