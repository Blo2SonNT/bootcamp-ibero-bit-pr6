//cSpell:disable
let imagenesCategorias = [
    { nombreCategoria: 'Colombiamoda', urlImagen: 'assets/img/1.webp' },
    { nombreCategoria: 'Ofertas relampago', urlImagen: 'assets/img/2.webp' },
    { nombreCategoria: 'Celulares', urlImagen: 'assets/img/3.webp' },
    { nombreCategoria: 'Televisores', urlImagen: 'assets/img/4.webp' },
    { nombreCategoria: 'Electrodomésticos', urlImagen: 'assets/img/5.webp' },
    { nombreCategoria: 'Mercado', urlImagen: 'assets/img/6.webp' },
    { nombreCategoria: 'Informática', urlImagen: 'assets/img/7.webp' },
    { nombreCategoria: 'Mundo cocina', urlImagen: 'assets/img/8.webp' },
    { nombreCategoria: 'Colchones', urlImagen: 'assets/img/9.webp' },
    { nombreCategoria: 'Temporada escolar', urlImagen: 'assets/img/10.webp' },
    { nombreCategoria: 'Juguetería', urlImagen: 'assets/img/11.webp' },
    { nombreCategoria: 'Salud y belleza', urlImagen: 'assets/img/12.webp' },
];

let grillaPagina = document.querySelector("#contenedorImgCategorias")
    // console.log(grillaPagina)

for (let policia = 0; policia < imagenesCategorias.length; policia++) {
    grillaPagina.innerHTML += `
        <div class="col-2">
            <img class="w-100" src="${imagenesCategorias[policia].urlImagen}">
            <div class="fw-bold text-danger"> ${imagenesCategorias[policia].nombreCategoria} </div>
        </div>
    `
}




let imgCategorias = [
    { nombreCat: 'cModa', urlImagen: 'assets/img/1.webp' },
    { nombreCat: 'cOfertas', urlImagen: 'assets/img/2.webp' },
    { nombreCat: 'cCelular', urlImagen: 'assets/img/3.webp' },
    { nombreCat: 'cTv', urlImagen: 'assets/img/4.webp' },
    { nombreCat: 'cElec', urlImagen: 'assets/img/5.webp' },
    { nombreCat: 'cMer', urlImagen: 'assets/img/6.webp' },
    { nombreCat: 'cInfo', urlImagen: 'assets/img/7.webp' },
    { nombreCat: 'cCoci', urlImagen: 'assets/img/8.webp' },
    { nombreCat: 'cColch', urlImagen: 'assets/img/9.webp' },
    { nombreCat: 'cTemp', urlImagen: 'assets/img/10.webp' },
    { nombreCat: 'cJug', urlImagen: 'assets/img/11.webp' },
    { nombreCat: 'cSalud', urlImagen: 'assets/img/12.webp' },
];


// for (let policia = 0; policia < imgCategorias.length; policia++) {
//     grillaPagina.innerHTML += `
//         <div class="col-2">
//             <img class="w-100" src="${imgCategorias[policia].urlImagen}">
//             <div> ${imgCategorias[policia].nombreCat} </div>
//         </div>
//     `
// }


let productos = [
    { producto: "Zapato", imagen: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg", precio: 50000, promocion: false },
    { producto: "Media", imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Socks_and_PJ.JPG", precio: 3000, promocion: false },
    { producto: "Pantalon", imagen: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Famous_Cargo_Pants.png", precio: 35000, promocion: false },
    { producto: "Camisa", imagen: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Vintage_aloha_shirt.JPG", precio: 60000, promocion: true, descuento: 20 },
    { producto: "Camisa", imagen: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Vintage_aloha_shirt.JPG", precio: 60000, promocion: true, descuento: 20 },
    { producto: "Camisa", imagen: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Vintage_aloha_shirt.JPG", precio: 60000, promocion: true, descuento: 20 }
]


let seccionJhon = document.querySelector('#arrayJhon')

for (let j = 0; j < productos.length; j++) {
    seccionJhon.innerHTML += `
    <div class="col">
        <div class="card">
            <img src="${productos[j].imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${productos[j].producto}</h5>
                <p class="card-text">${productos[j].precio}</p>
            </div>
        </div>
    </div>
    `

}