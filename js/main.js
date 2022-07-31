import data from "./data.js";

let divContenido = document.getElementById("contenido");
let bodyCarrito = document.getElementById("tbody-carrito");

let arrCarrito = [];

function anadirACarrito(platillo) {
  arrCarrito.push(platillo);
  let htmlBodyCarrito = "";
  arrCarrito.forEach(function (item) {
    htmlBodyCarrito =
      htmlBodyCarrito +
      `
        <tr>
            <td>${item.nombre}</td>
            <td>${1}</td>
            <td>${item.precio}</td>
            <td>${item.precio * 1}</td>
        </tr>
        `;
  });
  bodyCarrito.innerHTML = htmlBodyCarrito;
}

function encontrarPlatillo(id) {
  let platilloEncontrado = data.filter(function (item) {
    return item.id === id;
  });
  return platilloEncontrado[0];
}

function obtenerBtns() {
  let btnsAgregar = document.querySelectorAll(".btn-agregar");
  btnsAgregar.forEach(function (btn) {
    btn.addEventListener("click", function (evento) {
      let idPlatillo = evento.target.getAttribute("data-id");
      let nuevoPlatillo = encontrarPlatillo(+idPlatillo);
      anadirACarrito(nuevoPlatillo);
    });
  });
}

function dibujarData(arrData) {
  //renderizar mis elementos
  let cardsHtml = "";
  arrData.forEach(function (item) {
    // console.table(item);
    cardsHtml =
      cardsHtml +
      `
        <div class="tarjeta">
            <div class="imagen">
                <img src="${item.imagen}" />
            </div>
            <div class="texto">
                <h4>${item.nombre}</h4>
                <p>
                    ${item.descripcion}
                </p>
                <div class="precio">
                    <span>S/ ${item.precio}</span>
                    <button class="btn-agregar" data-id="${item.id}">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
        `;
  });

  divContenido.innerHTML = cardsHtml;
  obtenerBtns();
}

dibujarData(data);
