import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import { celiWhatsappUrl } from "../utils/whatsapp";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <a className="logo" href="#inicio" aria-label="Celi Bolos e Doces">
          <img src={logo} alt="Logo Celi" />
          <h2>Celi Bolos e Doces</h2>
        </a>

        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#catalogo" onClick={closeMenu}>Catálogo</a>
          <a href="#categorias" onClick={closeMenu}>Galeria</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#redes-sociais" onClick={closeMenu}>Contato</a>

          <a
            className="orcamento"
            href={celiWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Fazer orçamento
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
