const mostrarProductos = function (productosParam) {
  //Desde
  //Mientras
  //Incremento

  //FORMA IMPERATIVA
  /*for (let index = 0; index < productos.length; index++) {
    console.log(productos[index].nombre);
  }*/

  //FORMA DECLARATIVA

  productosParam.forEach(mostrarUnProducto);
};

function mostrarUnProducto(product) {
  console.log(product.nombre);
}

mostrarProductos(productos);
