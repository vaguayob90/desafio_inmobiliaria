let propiedadesEnVentaHtml = ''
let propiedadesEnAlquilerHtml = ''
for (i=0; i < 3; i++) {
  propiedadesEnVentaHtml += getTemplatePropiedad(listadoPropiedadesEnVenta[i])
  propiedadesEnAlquilerHtml += getTemplatePropiedad(listadoPropiedadesEnalquiler[i])
}

const divPropiedadesEnVenta = document.querySelector("#propiedades_en_venta")
divPropiedadesEnVenta.innerHTML = propiedadesEnVentaHtml

const divPropiedadesEnAlquiler = document.querySelector('#propiedades_en_alquiler')
divPropiedadesEnAlquiler.innerHTML = propiedadesEnAlquilerHtml
