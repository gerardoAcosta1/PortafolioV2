import { Link } from "react-router-dom"
import '../../styles/Header.css'

const Header = () => {
  return (
    <div className="main__header">
        <ul className="items__header">
            <Link to={'/'}>
            <li className="item__header">Home</li>
            </Link>
            <Link to={'/about'}>
            <li className="item__header">About Me</li>
            </Link>
            <Link to={'/portafolio'}>
            <li className="item__header">Portafolio</li>
            </Link>
            <Link>
            <li className="item__header">Contacto</li>
            </Link>
        </ul>
      
    </div>
  )
}

export default Header