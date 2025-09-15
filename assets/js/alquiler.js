let propiedadesEnAlquilerHtml = ''
for (let propiedad of listadoPropiedadesEnalquiler) {
  propiedadesEnAlquilerHtml += getTemplatePropiedad(propiedad)
}

const divPropiedadesEnAlquiler = document.querySelector('#propiedades_en_alquiler')
divPropiedadesEnAlquiler.innerHTML = propiedadesEnAlquilerHtml
