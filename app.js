const producto = {
    nombre: "alfajor",
    precio: 20,
    porcentajeDeDescuento: 0.2
}

// function agregarMetodoCalculoDescuento(producto) {

//     producto.calcularPrecioDescuento = function () {
//         //console.log("Escribiendo desde metodo de objeto");
//         //producto.precioFinal = producto.precio - (producto.precio * producto.porcentajeDeDescuento);
//         //producto.precio = producto.precio - (producto.precio * producto.porcentajeDeDescuento);
//         producto.precioConDescuento = function () {
//             producto.precio = producto.precio - (producto.precio * producto.porcentajeDeDescuento);
//         };
//         return producto.precioConDescuento(producto);
//     }
//     return producto;
// }

function agregarMetodoCalculoDescuento(producto) {
  //   producto.calcularPrecioDescuento = function () {
  //     //console.log("Escribiendo desde metodo de objeto");
  //     //producto.precioFinal = producto.precio - (producto.precio * producto.porcentajeDeDescuento);
  //     producto.precio = producto.precio - (producto.precio * producto.porcentajeDeDescuento);
  //     return producto;
  // }
  // return producto.calcularPrecioDescuento(producto);
  
  producto.calcularPrecioDescuento = function (producto) {
    //console.log("Escribiendo desde metodo de objeto");
    //producto.precioFinal = producto.precio - (producto.precio * producto.porcentajeDeDescuento);
    //producto.precio = producto.precio - (producto.precio * producto.porcentajeDeDescuento);
    producto.precioConDescuento = function (producto) {
        producto.precioConDescuento = producto.precio - (producto.precio * producto.porcentajeDeDescuento);
    };
    return producto.precioConDescuento(producto);
  }
  return producto;
  }

agregarMetodoCalculoDescuento(producto);