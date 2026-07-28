import "./Hero.css";
import { motion } from "motion/react";
import SplitText from "../animações/SplitText";
import AnimatedStars from "../animações/AnimatedStars";
import heroImage from "../assets/bolo1.webp";
import { celiWhatsappUrl } from "../utils/whatsapp";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-text">
        <SplitText
          text="Há mais de 30 anos adoçando momentos especiais"
          tag="h1"
          className="hero-title"
          delayStart={0}
        />

        <SplitText
          text="Bolos artesanais preparados com carinho para transformar aniversários, casamentos e celebrações em memórias inesquecíveis."
          tag="p"
          className="hero-description"
          delayStart={1.1}
        />

        <motion.div
          className="avaliacao"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.95, duration: 0.55, ease: "easeOut" }}
        >
          <div className="estrelas-hero">
            <AnimatedStars />
          </div>

          <span>Mais de 30 anos de tradição em Cerquilho</span>
        </motion.div>

        <motion.div
          className="botoes"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.12, duration: 0.55, ease: "easeOut" }}
        >
          <a
            className="btn-orcamento"
            href={celiWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazer orçamento
          </a>
          <button className="btn-catalogo">Ver catálogo</button>
        </motion.div>
      </div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.92, rotate: -2, y: 30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        transition={{ delay: 0.35, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={heroImage} alt="Bolo artesanal decorado da Celi Bolos" />
      </motion.div>
    </section>
  );
}
