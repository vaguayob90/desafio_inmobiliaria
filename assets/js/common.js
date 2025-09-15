const smoke = {
  si: `
    <p class="text-success">
      <i class="fas fa-smoking"></i> Permitido fumar
    </p>
  `,
  no: `
    <p class="text-danger">
      <i class="fas fa-smoking-ban"></i> No se permite fumar
    </p>
  `
}

const pets = {
  si: `
    <p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
  `,
  no: `
    <p class="text-danger">
      <i class="fa-solid fa-ban"></i> No se permiten mascotas
    </p>
  `
}

const listadoPropiedadesEnVenta = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva', 
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg', 
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial', 
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678', 
    habitaciones: 4,
    bathrooms: 4, 
    costo: 5_000, 
    smoke: false, 
    pets: false 
  },
  {
    nombre: 'Apartamento acogedor en la montaña', 
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg', 
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas', 
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456', 
    habitaciones: 2,
    bathrooms: 1, 
    costo: 1_200, 
    smoke: true, 
    pets: true
  },
  {
    nombre: 'Penthouse de lujo con terraza panorámica', 
    src: 'https://lanacionar-la-nacion-ar-prod.web.arc-cdn.net/resizer/v2/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg?auth=f0a77ece3c9deb238be2b6bd03c400054cf3f0d57fda67c39c21dfb9fd2f4e56&width=768&quality=80', 
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares', 
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789', 
    habitaciones: 3,
    bathrooms: 3, 
    costo: 4_500, 
    smoke: false, 
    pets: true
  },
  {
    nombre: 'Villa con piscina',
    src: 'https://media.istockphoto.com/id/488052008/es/foto/lujosa-villa-con-una-piscina-gigante.jpg?s=612x612&w=0&k=20&c=KYUiYlRH9u4z1GOu8DTZXWw7L8omcr6XPvZcDXeRuSE=',
    descripcion: 'Una villa de lujo con piscina y vistas al mar',
    ubicacion: '456 Oceanfront Drive, Seaview, CA 11223',
    habitaciones: 5,
    bathrooms: 5,
    costo: 6_000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Loft moderno en el centro',
    src: 'https://mingenio.cl/cdn/shop/articles/Loft-3.jpg?v=1672087936',
    descripcion: 'Loft con diseño minimalista, ideal para jóvenes profesionales',
    ubicacion: '789 Downtown Street, City Center, CA 33445',
    habitaciones: 1,
    bathrooms: 1,
    costo: 2_000,
    smoke: false,
    pets: false,
  },
]

const listadoPropiedadesEnalquiler = [
  {
    nombre: 'Apartamento en el centro de la ciudad', 
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60', 
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.', 
    ubicacion: '123 Main Street, Anytown, CA 91234', 
    habitaciones: 2,
    bathrooms: 2, 
    costo: 2_000, 
    smoke: false, 
    pets: true
  },
  {
    nombre: 'Apartamento luminoso con vista al mar', 
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.', 
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789', 
    habitaciones: 3,
    bathrooms: 3, 
    costo: 2_500, 
    smoke: true, 
    pets: true
  },
  {
    nombre: 'Condominio moderno en zona residencial', 
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.', 
    ubicacion: '123 Main Street, Anytown, CA 91234', 
    habitaciones: 2,
    bathrooms: 2, 
    costo: 2_200, 
    smoke: false, 
    pets: false
  },
  {
    nombre: 'Casa espaciosa en el campo',
    src: 'https://images.adsttc.com/media/images/55db/b03a/e58e/ce05/2b00/0020/large_jpg/PORTADA_03.jpg?1440460843',
    descripcion: 'Una casa de campo con amplios espacios verdes, ideal para la familia y el ocio al aire libre.',
    ubicacion: '456 Green Valley Road, Countryside, CA 98765',
    habitaciones: 4,
    bathrooms: 3,
    costo: 3_000,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Estudio moderno en el centro urbano',
    src: 'https://becalp-24-moderno-estudio-en-el-centro-urbano.hotelindenia.com/data/Pics/700x500w/12665/1266507/1266507529/becalp-estudio-en-el-centro-by-bookindenia-denia-pic-1.JPEG',
    descripcion: 'Acogedor y moderno estudio con todas las comodidades, perfecto para una persona o pareja.',
    ubicacion: '789 Urban Boulevard, Metropolis, CA 11223',
    habitaciones: 1,
    bathrooms: 1,
    costo: 1_500,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Apartamento de playa con piscina',
    src: 'https://images.trvl-media.com/lodging/38000000/37040000/37031900/37031829/e30e08d7.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    descripcion: 'Un apartamento ideal para el verano, con acceso directo a la playa y una piscina comunitaria.',
    ubicacion: '101 Shoreline Drive, Beach Town, CA 56789',
    habitaciones: 2,
    bathrooms: 2,
    costo: 2_800,
    smoke: true,
    pets: false
  }
]

const getTemplatePropiedad = (propiedad) => {
  return `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${propiedad.src}"
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.bathrooms} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
          ${propiedad.smoke ? smoke.si : smoke.no}
          ${propiedad.pets ? pets.si : pets.no}
        </div>
      </div>
    </div>
  `
}