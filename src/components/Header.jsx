import "./Header.css";
import { motion } from "motion/react";
import logo from "../assets/logo.jpg";
import { celiWhatsappUrl } from "../utils/whatsapp";

export default function Header() {
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

        <nav>
          <a href="#inicio">Início</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#categorias">Galeria</a>
          <a href="#sobre">Sobre</a>
          <a href="#redes-sociais">Contato</a>

          <a
            className="orcamento"
            href={celiWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazer orçamento
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
