import '../../styles/AboutPage/About.css'
const About = () => {
    return (
       
            <div className="container2__main">
                <h2 className="title">Acerca de <span className="mi">mi</span></h2>
                <h6 className="description2">Soy una persona sencilla y con muchas ganas de integrarme a un ambiente de desarrollo
                    que sirva como guia para continuar mis estudios y preparación.
                </h6>
                <div className="container2-personal">
                    <div className="container-dates">
                        <h3 className="title-personal">Información Personal</h3>
                        <ul className="list-personal">
                            <li className="item-personal">
                                <h4 className='title-item'>Fecha de Nacimiento</h4>
                                <span className='value-item'>17 de enero de 1988</span>
                            </li>
                            <li className="item-personal">
                                <h4 className='title-item'>Edad</h4>
                                <span className='value-item'>35 años</span>
                            </li>
                            <li className="item-personal">
                                <h4 className='title-item'>Email</h4>
                                <span className='value-item'>Gerardonuevo1234321@gmail.com</span>
                            </li>
                            <li className="item-personal">
                                <h4 className='title-item'>Carrera</h4>
                                <span className='value-item'>Ingeniería en Sistemas Computacionales</span>
                            </li>
                            <li className="item-personal">
                                <h4 className='title-item'>Teléfono</h4>
                                <span className='value-item'>6674702159</span>
                            </li>
                            <li className="item-personal">
                                <h4 className='title-item'>Ciudad</h4>
                                <span className='value-item'>Culiacán Sinaloa</span>
                            </li>
                            <li className="item-personal">
                                <h4 className='title-item'>Disponibilidad</h4>
                                <span className='value-item'>Inmediata</span>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
     
    )
}

export default About