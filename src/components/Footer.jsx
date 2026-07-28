import "./Footer.css";
import logo from "../assets/logo.jpg";

import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

import { Mail, MapPin } from "lucide-react";
import { celiWhatsappUrl } from "../utils/whatsapp";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo Celi Bolos" />

          <h2>Celi Bolos e Doces</h2>

          <p>Há mais de 30 anos adoçando momentos especiais em Cerquilho.</p>
        </div>

        <div className="footer-links">
          <h3>Navegação</h3>

          <a href="#inicio">Início</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#categorias">Galeria</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer-contato">
          <h3>Contato</h3>

          <div>
            <Mail size={18} />
            <span>celi_bolos@gmail.com</span>
          </div>

          <div>
            <MapPin size={18} />
            <span>Cerquilho - SP</span>
          </div>
        </div>

        <div className="footer-social">
          <h3>Redes Sociais</h3>

          <div className="icons">
            <a
              href="https://instagram.com/celi_bolos_edoces"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Celi Bolos"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Celi Bolos"
            >
              <FaFacebook />
            </a>

            <a
              href={celiWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Celi Bolos"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Celi Bolos e Doces • Todos os direitos reservados</p>

        <span>Desenvolvido por Gustavo Castro</span>
      </div>
    </footer>
  );
}
