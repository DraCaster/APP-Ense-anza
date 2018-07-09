$(function() {

    var pos = []; //posiciones del arreglo

    var imagenes = [
        '../img/niveles/ala.png',
        '../img/niveles/anana.png',
        '../img/niveles/anillo.png',
        '../img/niveles/anteojos.png',
        '../img/niveles/arania.png',
        '../img/niveles/arbol.png',
        '../img/niveles/aro.png',
        '../img/niveles/auto.png',
        '../img/niveles/elefante.png',
        '../img/niveles/empanadas.png',
        '../img/niveles/escoba.png',
        '../img/niveles/escuela.png',
        '../img/niveles/espada.png',
        '../img/niveles/espejo.png',
        '../img/niveles/estante.png',
        '../img/niveles/estrella.png',
        '../img/niveles/iglesia.png',
        '../img/niveles/iman.png',
        '../img/niveles/indio.png',
        '../img/niveles/isla.png',
        '../img/niveles/mano.png',
        '../img/niveles/martillo.png',
        '../img/niveles/munieca.png',
        '../img/niveles/ojo.png',
        '../img/niveles/ojota.png',
        '../img/niveles/ola.png',
        '../img/niveles/olla.png',
        '../img/niveles/oreja.png',
        '../img/niveles/oso.png',
        '../img/niveles/oveja.png',
        '../img/niveles/unia.png',
        '../img/niveles/uno.png',
        '../img/niveles/utiles.png',
        '../img/niveles/uva.png'
    ];
    var nombres = [
        'ala',
        'anana',
        'anillo',
        'anteojos',
        'araña',
        'arbol',
        'aro',
        'auto',
        'elefante',
        'empanadas',
        'escoba',
        'escuela',
        'espada',
        'espejo',
        'estante',
        'estrella',
        'iglesia',
        'iman',
        'indio',
        'isla',
        'mano',
        'martillo',
        'muñeca',
        'ojo',
        'ojota',
        'ola',
        'olla',
        'oreja',
        'oso',
        'oveja',
        'uña',
        'uno',
        'utiles',
        'uva'
    ];

    function obtenerImagenAleatoria(val) {
        var indice = Math.floor(Math.random() * imagenes.length);
        var p = imagenes[indice];
        var i = 0;

        //Para que no se repitan las mismas imagenes
        while (i < pos.length && p == pos[i]) {
            indice = Math.floor(Math.random() * imagenes.length);
            p = imagenes[indice];
            i++;
        }
        if (p != pos[i]) {
            pos.push(p);
            //Agrego la imagen al arreglo de imagenes para guardarla y que no se repita 
        }

        var imagen = document.getElementById(val);
        //Aca hay que setearle el data y el id al img
        if (indice <= 8) {
            imagen.setAttribute("id", nombres[indice]);
            imagen.setAttribute("data-valor", "a");
        } else {
            if (indice >= 9 && indice <= 16) {
                imagen.setAttribute("id", nombres[indice]);
                imagen.setAttribute("data-valor", "e");
            } else {
                if (indice >= 17 && indice <= 20) {
                    imagen.setAttribute("id", nombres[indice]);
                    imagen.setAttribute("data-valor", "i");
                } else {
                    if (indice >= 21 && indice <= 23) {
                        imagen.setAttribute("id", nombres[indice]);
                        imagen.setAttribute("data-valor", "m");
                    } else {
                        if (indice >= 24 && indice <= 30) {
                            imagen.setAttribute("id", nombres[indice]);
                            imagen.setAttribute("data-valor", "o");
                        } else {
                            imagen.setAttribute("id", nombres[indice]);
                            imagen.setAttribute("data-valor", "u");
                        }
                    }
                }
            }
        }






        return p;
    }
    console.log(pos);

    $('.imagen1').attr('src', obtenerImagenAleatoria('img1'));
    $('.imagen2').attr('src', obtenerImagenAleatoria('img2'));
    $('.imagen3').attr('src', obtenerImagenAleatoria('img3'));
    $('.imagen4').attr('src', obtenerImagenAleatoria('img4'));

});