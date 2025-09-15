let propiedadesEnVentaHtml = ''
for (let propiedad of listadoPropiedadesEnVenta) {
  propiedadesEnVentaHtml += getTemplatePropiedad(propiedad)
}

const divPropiedadesEnVenta = document.querySelector('#propiedades_en_venta')
divPropiedadesEnVenta.innerHTML = propiedadesEnVentaHtml
