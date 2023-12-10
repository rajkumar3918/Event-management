import "../styles/footer.scss";
import { FaFacebookSquare,FaLinkedin,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="Footer-cont">
        <div className="intersection"></div>
        <div className="useful-links wi">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Terms & conditions</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Cooki policy</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="contact wi">
            <h3>Contact</h3>
            <p>Send us a message</p>
            <p>Dhigna Limited, 30 Churchill Place, Canary Wharf, London E14 5RE, United Kingdom</p>
            <p>Phone: +44 204577 1234</p>
            <p>Email: <a href="mailto:info@dhigna.com">info@dhigna.com</a></p>
            <p><a href="#" target="_blank" rel="noopener noreferrer">Find us on Map</a></p>
        </div>
        <div className="connections wi">
          <h3>Social Connections</h3>
          <p>Find us on social platforms</p>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><FaTwitterSquare/></a></li>
          </ul>
        </div>
    </footer>
    );
  };

  export default Footer