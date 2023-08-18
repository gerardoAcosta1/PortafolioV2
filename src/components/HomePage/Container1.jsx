import '../../styles/HomePage/Container1.css'

const Container1 = () => {
    return (

        <div className="container1__main">

            <h5 className="presentation">Hola mi nombre es <span className="name">Gerardo</span></h5>
            <h5 className="presentation__dos">Soy desarrollador <span className="name">Web Junior</span></h5>
            <h5 className="description">Soy un programador web con poca experiencia; una de las capacidades que puedo ofertar
                es la del análisis de sistemas y estructuras</h5>
            <button className="button__container1"><a className="contact" target="blanck" href='https://api.whatsapp.com/send/?phone=526674702159'>Contactarme</a></button>
            
        </div>

    )
}

export default Container1