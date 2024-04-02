import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footerText">© 2024 Edelweiss Web Studio, all rights reserved ©</p>
      <p className="footerText"> Whatsapp: 3516708620</p>
      <p className="footerText">Horario: 09:00hs a 18:00hs</p>
      <Link to="https://www.instagram.com/dolcefiore_p/?hl=es-la">
        <img
          className="imgFooter"
          src="./SkillIconsInstagram.png"
          alt="iraInstagram"
        />
      </Link>

      <Link to="https://api.whatsapp.com/send/?phone=543513558931&text&type=phone_number&app_absent=0">
        <img
          className="imgFooter"
          src="./IcBaselineWhatsapp.png"
          alt="iraWhatsapp"
        />
      </Link>
    </div>
  );
};

export default Footer;
