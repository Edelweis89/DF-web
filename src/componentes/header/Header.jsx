import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link className="link" to="/">
        <img className="logoHeader" src="./logo.jpg" alt="logo" />
      </Link>

      <ul className="navega">
        <Link className="link" to="/catalogo">
          Productos
        </Link>

        <Link className="link" to="/Servicios">
          Servicios
        </Link>

        <Link className="link" to="/Contactanos">
          Contactanos
        </Link>

      </ul>
    </div>
  );
};

export default Header;
