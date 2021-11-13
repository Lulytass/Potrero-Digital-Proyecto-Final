// ARRAY DE OBJETOS
var productosMujer = [
    {
        articulo: "PULLOVER",
        imagen: "9.jpg",
        precio: 1200,
        filtro: "arriba",

    },
    {
        articulo: "JEAN",
        imagen: "11.jpg",
        precio: 1200,
        filtro: "abajo",

    },
    {
        articulo: "CAMISA",
        imagen: "12.jpg",
        precio: 1200,
        filtro: "arriba",

    },
    {
        articulo: "CAMISA",
        imagen: "13.jpg",
        precio: 1200,
        filtro: "arriba",

    },
    {
        articulo: "CONJUNTO",
        imagen: "5.jpg",
        precio: 1200,
        filtro: "conjuntos",

    },
    {
        articulo: "SAQUITO",
        imagen: "6.jpeg",
        precio: 1200,
        filtro: "arriba",

    },
    {
        articulo: "MALLA",
        imagen: "7.jpg",
        precio: 1200,
        filtro: "malla",

    },
    {
        articulo: "TRAJE",
        imagen: "8.jpg",
        precio: 1200,
        filtro: "conjuntos",

    },
]
const cuerpo = document.getElementById("articulos")
for(producto of productosMujer){
    cuerpo.innerHTML +=  `
    <div class="${producto.filtro} card col-sm-12 col-md-4 col-lg-3">
                <img src="imagenesmujer/${producto.imagen}" class="card-img-top" alt="ropa mujer">
                <div class="card-body">
                    <h5 class="card-title">${producto.articulo}</h5>
                    <div>
                        <h6>Colores</h6>
                        <select name="OS">
                            <option value="1">Negro</option> 
                            <option value="2">Azul</option> 
                            <option value="3">Verde</option>
                            <option value="10">Maiz</option> 
                            <option value="11">Rojo</option> 
                            <option value="12">Bordo</option> 
                        </select>
                    </div> 
                    <div>
                        <h6>Talle</h6>
                        <select name="OS">
                            <option >S</option> 
                            <option >M</option> 
                            <option >L</option>
                            <option >XL</option> 
                        </select>
                    </div>
                    <div class="precio">
                        <p>${producto.precio}</p>
                    </div>     
                    <button type="button" class="btn btn-warning">Comprar</button>                
                </div>
            </div>
    `
}
//              MODAL USUARIO
const abrir = document.querySelector("#contacto")

function abreModal(){
    abrir.style.display = "flex"
}
function cierraModal(){
    abrir.style.display = "none"
}
//            CARRITO DE COMPRAS
const abrirCarrito = document.querySelector("#carrito")

function abreModalCarrito(){
    abrirCarrito.style.display = "flex"
}
function cierraModalCarrito(){
    abrirCarrito.style.display = "none"
}
//                  FILTROS
let malla1 = document.querySelectorAll(".malla");
let arriba1 = document.querySelectorAll(".arriba");
let conjunto1 = document.querySelectorAll(".conjuntos");
let abajo1 = document.querySelectorAll(".abajo");

function abajo(){
    for(var i = 0; i< malla1.length; i++)
    malla1[i].classList.toggle("chau");
    for(var i = 0; i< arriba1.length; i++)
    arriba1[i].classList.toggle("chau");
    for(var i = 0; i< conjunto1.length; i++)
    conjunto1[i].classList.toggle("chau");
}
function arriba(){
    for(var i = 0; i< abajo1.length; i++)
    abajo1[i].classList.toggle("chau");
    for(var i = 0; i< malla1.length; i++)
    malla1[i].classList.toggle("chau");
    for(var i = 0; i< conjunto1.length; i++)
    conjunto1[i].classList.toggle("chau");
}
function mallas(){
    for(var i = 0; i< abajo1.length; i++)
    abajo1[i].classList.toggle("chau");
    for(var i = 0; i< arriba1.length; i++)
    arriba1[i].classList.toggle("chau");
    for(var i = 0; i< arriba1.length; i++)
    conjunto1[i].classList.toggle("chau");
}
function conjunto(){
    for(var i = 0; i< abajo1.length; i++)
    abajo1[i].classList.toggle("chau");
    for(var i = 0; i< arriba1.length; i++)
    arriba1[i].classList.toggle("chau");
    for(var i = 0; i< malla1.length; i++)
    malla1[i].classList.toggle("chau");
}
                //BOTON FILTRO
let botonFiltro = document.querySelector(".botonFiltro");
let filtros = document.querySelector(".losFiltros");
botonFiltro.addEventListener("click", function(){
   if(filtros.classList.contains("losFiltros")){
       filtros.classList.remove("losFiltros")
       filtros.classList.add("seVe")
   }else{
        filtros.classList.add("losFiltros")
   }
})


