import '../../styles/PortafolioPage/Portafolio.css'
const Portafolio = () => {
  return (
    <div className="contariner3__main">
        <h5 className="container3-description">Para los siguientes proyectos se utilizaron diversas tecnologías,
                es el caso de Css, Html, Javascript, así también el entorno de desarrollo <span className="react">React </span></h5>

            <div className="container-images">
                <div className="card-images">
                    <a href="https://keen-puppy-7ab9e3.netlify.app/"  target="blanck"><img className="card-image" src="./foto/Portafolio/e-commerce.png" alt="" /></a>
                    <p className='description__portafolio'><a  target="blanck" href="https://keen-puppy-7ab9e3.netlify.app/">Una aplicación muy completa de e-commerce; se extraen los productos en stock desde una API, se contruye la lógica para filtrar productos por precio y categoría, se utilizan rutas protegidas para redirigir al usuario, uso de estados globales y más...</a></p>
                </div>
                <div className="card-images">
                    <a href="https://animated-seahorse-f2a91b.netlify.app/"  target="blanck"><img className="card-image" src="./foto/Portafolio/works.png" alt="" /></a>
                    <p className='description__portafolio'><a  target="blanck" href="https://animated-seahorse-f2a91b.netlify.app/">Sencillo componente Full-Stack, se trata de un componente que permite agregar y actualizar tareas, nota: se creó la Api en node y se generó la base de datos, esta está alojada en un server gratuito, por tanto el servidor la pone a dormir para ahorrar recurso, la carga de los datos demora aproximadamente 1 minuto</a></p>
                </div>
                 <div className="card-images">
                    <a href="https://poetic-brioche-1c2bda.netlify.app/"  target="blanck"><img className="card-image" src="./foto/Portafolio/crud2.jpeg" alt="" /></a>
                    <p className='description__portafolio'><a  target="blanck" href="https://poetic-brioche-1c2bda.netlify.app/">Se crea un CRUD para insertar, eliminar, actualizar y leer información de un Api de usuarios</a></p>
                </div>
                 <div className="card-images">
                    <a href="https://grand-sunflower-d866a1.netlify.app/"  target="blanck"><img className="card-image" src="./foto/Portafolio/morti2.jpg" alt="" /></a>
                    <p className='description__portafolio'><a  target="blanck" href="https://grand-sunflower-d866a1.netlify.app/">Se extraen datos de una Api de la famosa serie Rick & Morti, se hace uso de la tecnología flexbox para el reordenamiento de las tarjetas</a></p>
                </div>
                  <div className="card-images">
                    <a href="https://main--phenomenal-lily-2f763c.netlify.app/"  target="blanck"><img className="card-image" src="./foto/Portafolio/pokedex2.jpeg" alt="" /></a>
                    <p className='description__portafolio' ><a target="blanck" href="https://main--phenomenal-lily-2f763c.netlify.app/">Se obtienen datos de una Api 'pokemon', se utilizan las librerías de react-redux y @reduxjs/toolkit para generar estados globales; se agregó un sectión donde se puede elegir pokemon por tipo y un sistema de paginación. Se implementa 'rutas protegidas'</a></p>
                </div>
                 <div className="card-images">
                    <a target="blanck" href="https://tangerine-daffodil-ddd576.netlify.app/"><img className="card-image" src="./foto/Portafolio/clima2.jpg" alt="" /></a>
                    <p className='description__portafolio'><a  target="blanck" href="https://tangerine-daffodil-ddd576.netlify.app/">Aqui se consume una Api de pronóstico del clima, es posible buscar por nombre de Ciudad</a></p>
                </div>
                <div className="card-images">
                    <a href="https://gentle-kangaroo-473145.netlify.app/" target="blanck"><img className="card-image" src="./foto/Portafolio/fortuna2.jpg" alt="" /></a>
                    <p className='description__portafolio'><a  target="blanck" href="https://gentle-kangaroo-473145.netlify.app/">En este proyecto se consume una Api de frases sobre la buena fortuna</a></p>
                </div>
               
            </div>
    </div>
  )
}

export default Portafolio