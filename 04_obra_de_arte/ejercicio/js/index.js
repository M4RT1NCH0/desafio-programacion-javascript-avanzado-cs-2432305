
// Crear una clase que cargue una imágen y que se muestre en la página.

const rutaImagen = '../../imagenes/Cat_inside_LIL_134199.jpg';

class Img {
    _path;

    constructor(path) {
        this._ruta = path;
    }

    loadImage(){
        const img = document.createElement('img');
        img.src = this._ruta;
        document.body.appendChild(img);
    }
}

const img = new Img(rutaImagen);
img.loadImage();
